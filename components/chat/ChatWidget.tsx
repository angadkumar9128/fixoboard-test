
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail, CheckCircle2, User, Bot, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

const MotionDiv = motion.div as any;

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; action: string; type?: string; value?: string }[];
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Initializing Gemini API
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chatRef = useRef<any>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    // Initializing chat session with system instruction
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are Fixoboard's industrial support bot. Fixoboard is a brand by Atlantic Polymers Pvt. Ltd. with over 30 years of history. 
        Makers of high-quality PVC/WPC Ply, WPC Doors, Prelaminate Ply, WPC Door Frames, and PVC Marble Sheets.
        Features: 100% waterproof, termite proof, lead-free, fire resistant, and industrial grade.
        Your tone should be professional, helpful, and concise. 
        If users ask about pricing, guide them to the quote page.
        Our office is in Kandivali (W), Mumbai.
        Contact: +91 9930349472, info@fixoboard.com.`
      },
    });

    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          type: 'bot',
          text: "Welcome to Fixoboard! I'm your industrial support assistant. How can I help you with our advanced PVC/WPC solutions today?",
          timestamp: getCurrentTime(),
          actions: [
            { label: "🧱 Products", action: "intent_products" },
            { label: "🛡️ Certifications", action: "intent_quality" },
            { label: "💰 Request Quote", action: "open_get_quote" },
          ]
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string, isFromQuickReply = false) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text,
      timestamp: getCurrentTime()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const result = await chatRef.current.sendMessage({ message: text });
      const botResponse = result.text;

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        text: botResponse,
        timestamp: getCurrentTime()
      }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        text: "I'm having trouble connecting to our technical database. Please try again or contact us at +91 9930349472.",
        timestamp: getCurrentTime()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'intent_products':
        handleSendMessage("Tell me about your product range");
        break;
      case 'intent_quality':
        handleSendMessage("What certifications do your products have?");
        break;
      case 'open_get_quote':
        navigate('/get-quote');
        setIsOpen(false);
        break;
      case 'call_support':
        window.location.href = `tel:+919930349472`;
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[360px] md:w-[400px] h-[540px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-950 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center relative shadow-lg shadow-red-600/20">
                  <Bot size={22} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-slate-950 rounded-full" />
                </div>
                <div>
                  <h3 className="font-black text-sm uppercase tracking-widest">FixoBoard Support</h3>
                  <p className="text-[10px] font-bold text-green-400 uppercase tracking-tighter">🟢 Online – AI Assistant</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Minus size={20} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/50 scroll-smooth"
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-red-600 text-white rounded-br-none shadow-lg shadow-red-200' 
                      : 'bg-white text-slate-800 rounded-bl-none shadow-sm border border-slate-200'
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 px-1">{msg.timestamp}</span>
                  
                  {msg.actions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.actions.map((act, i) => (
                        <button 
                          key={i}
                          onClick={() => handleAction(act.action)}
                          className="px-4 py-2 bg-white border border-red-100 rounded-full text-[10px] font-black text-red-600 uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
                        >
                          {act.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-red-600/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                className="relative flex items-center"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about WPC products..."
                  className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-red-100 focus:bg-white transition-all outline-none"
                />
                <button 
                  disabled={!inputValue.trim() || isTyping}
                  type="submit"
                  className="absolute right-2 p-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-red-200"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                Industrial Support Powered by Fixoboard Gemini AI
              </p>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      <button 
        onClick={() => { setIsOpen(!isOpen); }}
        className="group flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-red-500/40 hover:bg-red-700 hover:scale-105 transition-all relative"
      >
        <div className="relative">
          <MessageCircle size={24} />
          {!isOpen && (
             <motion.span 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-red-600 rounded-full"
             />
          )}
        </div>
        <span className="font-black uppercase tracking-widest text-xs hidden md:inline">Chat with Support</span>
        
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20 pointer-events-none" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
