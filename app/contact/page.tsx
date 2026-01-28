
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Briefcase, 
  Upload, 
  Users, 
  Navigation,
  CheckCircle2,
  FileText,
  X
} from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionSection = motion.section as any;

const ContactPage: React.FC = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => setInquirySubmitted(false), 5000);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCareerSubmitted(true);
    setTimeout(() => setCareerSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Call Us",
      details: ["+91 9930349472", "+91 9930349421"],
      link: "tel:+919930349472"
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email Us",
      details: ["info@fixoboard.com"],
      link: "mailto:info@fixoboard.com"
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: "Visit Us",
      details: ["Sejal Encasa, Office No. 4A, 4th Floor, S.V. Road, Kandivali (W), Mumbai - 400067"],
      link: "https://maps.google.com/?q=Sejal+Encasa+Kandivali+West+Mumbai"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Contact Hero */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2070" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">
              Let’s Build Something <br /> <span className="text-blue-500">Sustainable Together.</span>
            </h1>
          </MotionDiv>
        </div>
      </section>

      {/* 2. Contact Information Grid */}
      <section className="py-12 -mt-16 relative z-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => (
            <MotionDiv
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {info.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-widest">{info.title}</h3>
              {info.details.map((detail, dIdx) => (
                <a 
                  key={dIdx} 
                  href={info.link} 
                  className="text-slate-500 font-medium hover:text-blue-600 transition-colors block mb-1"
                >
                  {detail}
                </a>
              ))}
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* 3. Inquiry Form & 5. Distributorship Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Inquiry / Quote Request</h2>
                </div>

                {inquirySubmitted ? (
                  <MotionDiv initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 p-10 rounded-3xl border border-green-100 text-center">
                    <CheckCircle2 className="text-green-500 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-black text-green-900 uppercase mb-2">Thank You!</h3>
                    <p className="text-green-700 font-medium">Your inquiry has been received. Our technical team will contact you shortly.</p>
                  </MotionDiv>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name *</label>
                      <input required type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address *</label>
                      <input required type="email" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="email@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number *</label>
                      <input required type="tel" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="+91 XXXX XXXX" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company (Optional)</label>
                      <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Business Name" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Detailed Message *</label>
                      <textarea required rows={5} className="w-full bg-slate-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Describe your project requirements..."></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-200 uppercase tracking-[0.2em] text-xs">
                        Submit Inquiry
                        <Send size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Distributorship Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="relative z-10">
                  <Users className="text-blue-500 mb-6" size={40} />
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight italic">Partner With Us</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                    Join India's most innovative PVC/WPC network. We are expanding our footprint across 
                    20+ states and seeking committed partners to grow with the "Green Revolution".
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      Industrial Support
                    </li>
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      Marketing Collaterals
                    </li>
                    <li className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500" />
                      Logistics Assistance
                    </li>
                  </ul>
                  <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-all">
                    Apply for Distributorship
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-[3rem] p-10 border border-blue-100 flex flex-col items-center text-center">
                <h4 className="text-blue-900 font-black uppercase tracking-tighter text-xl mb-4">Direct Connect</h4>
                <p className="text-blue-700 text-sm font-bold uppercase mb-6 tracking-wide">Instant Technical Support</p>
                <a 
                  href="https://wa.me/919930349472" 
                  className="bg-green-600 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-200"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Work With Us (Careers) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-4 italic">Opportunities</span>
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Work With Us!</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">Join Atlantic Polymers Pvt. Ltd. and be a part of the future of building materials.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 -mr-32 -mt-32 rounded-full" />
              
              {careerSubmitted ? (
                <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 relative z-10">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-blue-200">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">Application Sent!</h3>
                  <p className="text-slate-500 font-medium">Our HR department will review your profile and get back to you.</p>
                </MotionDiv>
              ) : (
                <form onSubmit={handleCareerSubmit} className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Post Applied For</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="e.g. Area Sales Manager" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                      <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="+91 XXXX XXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Cover Message</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 transition-all font-medium" placeholder="Tell us about your experience..."></textarea>
                  </div>

                  {/* CV Upload Section */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Upload CV (PDF / DOC)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 rounded-[2rem] p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group"
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileUpload} 
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                      />
                      {fileName ? (
                        <div className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
                          <FileText size={20} />
                          <span className="font-bold text-sm">{fileName}</span>
                          <X 
                            size={16} 
                            className="cursor-pointer hover:text-red-200" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setFileName(null);
                            }} 
                          />
                        </div>
                      ) : (
                        <>
                          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                            <Upload size={32} />
                          </div>
                          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Drag & drop or click to upload CV</p>
                        </>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 uppercase tracking-[0.2em] text-xs">
                    Apply Now
                    <Briefcase size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAP FEATURE */}
      <section className="pt-24 pb-4">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 min-h-[500px] border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.876442654316!2d72.84439031121307!3d19.200593681944627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b713455160cb%3A0xc4864c3c3a44d03!2sSejal%20Encasa!5e0!3m2!1sen!2sin!4v1710174123456!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl max-w-xs border border-white">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <Navigation size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">Our Location</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                Sejal Encasa, Office No. 4A, 4th Floor, Kandivali (West), Mumbai - 400067.
              </p>
              <a 
                href="https://maps.app.goo.gl/YourActualLink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
              >
                Get Directions
                <Navigation size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
