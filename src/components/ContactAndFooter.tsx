import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, MapPin, AlertCircle, CheckCircle2, Calendar, Loader2, Clock, Phone, X, ExternalLink, Shield, FileText, Briefcase, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export function ContactAndFooter() {
  const [activeTab, setActiveTab] = useState<'bookCall' | 'message'>('bookCall');
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'careers' | null>(null);
  
  // Calculate tomorrow's date string as default min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: minDateStr,
    preferredTime: '09:00 AM - 10:00 AM',
    companySize: '1-50 employees',
    challenge: 'AI Growth Automation',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (activeTab === 'bookCall' && !formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (validate()) {
      setIsSubmitting(true);
      try {
        const payload = {
          ...formData,
          isBookingCall: activeTab === 'bookCall'
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok || data.success) {
          setIsSubmitted(true);
          window.open("https://calendly.com/harshvardhansharma676/discovery-call", "_blank");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            preferredDate: minDateStr,
            preferredTime: '09:00 AM - 10:00 AM',
            companySize: '1-50 employees',
            challenge: 'AI Growth Automation',
            message: ''
          });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          window.open("https://calendly.com/harshvardhansharma676/discovery-call", "_blank");
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error('An error occurred during form submission:', error);
        setServerError('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM'
  ];

  return (
    <>
      {/* Contact & Strategy Booking Section */}
      <section id="contact" className="py-24 md:py-36 bg-[#F8F9FA] relative overflow-hidden text-slate-900">
        
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6 inline-flex items-center gap-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                FINAL CALL TO ACTION
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading leading-tight">
                Ready to build a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600">
                  predictable growth engine?
                </span>
              </h2>
              
              <p className="text-base text-slate-600 mb-8 leading-relaxed font-normal">
                Tell us about your current bottlenecks, and we’ll map out the exact system needed to scale your acquisition and operations.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/90 mb-10 text-xs sm:text-sm font-medium text-slate-800">
                ✨ No hard sales pitches. No generic packages. Just an actionable blueprint for your business.
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 font-heading">Direct Inquiry Email</h3>
                    <a href="mailto:harshvardhan@caelforge.com" className="text-sm font-semibold text-blue-700 hover:text-indigo-600 transition-colors">
                      harshvardhan@caelforge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 font-heading">Global Innovation Hub</h3>
                    <p className="text-sm font-semibold text-slate-800">Faridabad, India</p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">Serving Enterprise Clients Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Actionable Growth Blueprint Guarantee
                </div>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  No hard sales pitches. No generic packages. Just an actionable blueprint designed specifically for your business growth.
                </p>
              </div>
            </motion.div>
            
            {/* Right Booking / Contact Form Card (Pure Crisp White Card) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

              {/* Tab Selector */}
              <div className="flex flex-col xs:flex-row bg-slate-100 p-1.5 rounded-2xl mb-8 border border-slate-200 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('bookCall')}
                  className={`flex-1 py-3 px-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 font-heading ${
                    activeTab === 'bookCall'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Calendar className={`w-4 h-4 ${activeTab === 'bookCall' ? 'text-cyan-200' : ''}`} />
                  <span>Schedule a Strategy Call</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-3 px-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 font-heading ${
                    activeTab === 'message'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Mail className={`w-4 h-4 ${activeTab === 'message' ? 'text-cyan-200' : ''}`} />
                  Send General Inquiry
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 border border-blue-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">Strategy Session Scheduled!</h3>
                  <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal mb-6">
                    Thank you. We will review your current bottlenecks and map out the exact system needed to scale your acquisition and operations.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-xl">
                    <Clock className="w-4 h-4 text-blue-600" />
                    NO HARD SALES PITCHES • ACTIONABLE BLUEPRINT
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {serverError && (
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${errors.firstName ? 'border-red-400' : 'border-slate-200'} rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
                      />
                      {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${errors.lastName ? 'border-red-400' : 'border-slate-200'} rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
                      />
                      {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Booking Fields (Date & 1-Hour Time Slot) */}
                  {activeTab === 'bookCall' && (
                    <div className="grid sm:grid-cols-2 gap-5 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5 font-heading">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          min={minDateStr}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                        {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5 font-heading">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          1-Hour Time Slot *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-600 font-semibold"
                        >
                          {timeSlots.map((slot, i) => (
                            <option key={i} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Company Size & Challenge */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Company Size</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="1-10 employees">1-10 employees</option>
                        <option value="11-50 employees">11-50 employees</option>
                        <option value="51-200 employees">51-200 employees</option>
                        <option value="201-500 employees">201-500 employees</option>
                        <option value="500+ employees">500+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Primary Bottleneck</label>
                      <select
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="Performance Marketing & Acquisition">Performance Marketing & Acquisition</option>
                        <option value="AI Automation & Workflows">AI Automation & Workflows</option>
                        <option value="Social Media & Distribution">Social Media & Distribution</option>
                        <option value="Personal & Founder Branding">Personal & Founder Branding</option>
                        <option value="Fragmented Growth Engine">Fragmented Growth Engine</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">Current Bottlenecks & Goals</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current bottlenecks, revenue targets, or system goals..."
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group font-heading"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-cyan-200" />
                        <span>Processing Strategy Session...</span>
                      </>
                    ) : (
                      <>
                        <span>{activeTab === 'bookCall' ? 'Schedule a Strategy Call →' : 'Submit Inquiry →'}</span>
                        <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 font-medium">
                    No hard sales pitches. No generic packages. Just an actionable blueprint for your business.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020408] text-white pt-20 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-slate-800">
            
            <div className="md:col-span-2">
              <Logo size="xl" variant="light" className="mb-4" />
              <p className="text-sm text-slate-400 max-w-md leading-relaxed font-normal mb-6">
                Cael Forge is an elite AI-led marketing and growth engineering agency. We fuse autonomous AI agents with precision media buying to scale market leaders.
              </p>
              <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  Faridabad, India
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">Core Services</h4>
              <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
                <li><a href="#services" className="hover:text-white transition-colors">Performance Marketing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Automations</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Funnels & Landing Pages</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Growth Systems</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-4">Company & Governance</h4>
              <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
                <li><button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors text-left">Terms of Governance</button></li>
                <li><button onClick={() => setActiveModal('careers')} className="hover:text-white transition-colors text-left">Careers & Talent</button></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 font-mono gap-4">
            <div>© {new Date().getFullYear()} Cael Forge Agency. All rights reserved.</div>
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              SOC2 Compliant Architecture | Faridabad, India
            </div>
          </div>
        </div>
      </footer>

      {/* Legal & Information Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0B0F19] border border-white/15 rounded-3xl p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
                <h3 className="text-xl font-bold text-white font-heading">
                  {activeModal === 'privacy' && 'Privacy Policy'}
                  {activeModal === 'terms' && 'Terms of Governance'}
                  {activeModal === 'careers' && 'Careers at Cael Forge'}
                </h3>
                <button onClick={() => setActiveModal(null)} className="p-2 rounded-full hover:bg-white/10 text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 text-slate-300 text-sm leading-relaxed space-y-4 font-normal">
                {activeModal === 'privacy' && (
                  <>
                    <p>Cael Forge (&quot;Company&quot;) is committed to protecting your organizational data and privacy.</p>
                    <p>We collect business details provided through our strategy booking forms solely to evaluate potential marketing partnerships. All client data is encrypted using AES-256 and stored on secure cloud servers.</p>
                    <p>We do not sell, rent, or trade client information to third parties.</p>
                  </>
                )}
                {activeModal === 'terms' && (
                  <>
                    <p>All services provided by Cael Forge are subject to executed Master Services Agreements (MSA) and Statements of Work (SOW).</p>
                    <p>Performance metrics, ad creative assets, and AI agent architectures remain proprietary IP of Cael Forge unless specifically licensed under contract.</p>
                  </>
                )}
                {activeModal === 'careers' && (
                  <div className="space-y-4">
                    <p className="text-slate-300 text-xs sm:text-sm mb-4">
                      Join Cael Forge to build high-growth systems, performance engines, and executive brands. We are actively hiring for the following roles:
                    </p>

                    <div className="space-y-3">
                      {/* Role 1 */}
                      <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950 border border-purple-800 px-2 py-0.5 rounded uppercase">
                              Internship
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Remote / Hybrid</span>
                          </div>
                          <h4 className="text-base font-bold text-white font-heading">B2B OUTREACH INTERN</h4>
                          <p className="text-xs text-slate-400 mt-1">Lead generation, B2B cold email outbound setups, LinkedIn prospect research, & pipeline acceleration.</p>
                        </div>
                        <a
                          href="mailto:harshvardhan@caelforge.com?subject=Career%20Application%20-%20B2B%20Outreach%20Intern"
                          className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm text-center shrink-0"
                        >
                          Apply Now →
                        </a>
                      </div>

                      {/* Role 2 */}
                      <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 border border-cyan-800 px-2 py-0.5 rounded uppercase">
                              Internship
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Remote / Hybrid</span>
                          </div>
                          <h4 className="text-base font-bold text-white font-heading">SOCIAL MEDIA INTERN</h4>
                          <p className="text-xs text-slate-400 mt-1">Short-form video editing, Reels/Shorts distribution, audience engagement, & personal brand curation.</p>
                        </div>
                        <a
                          href="mailto:harshvardhan@caelforge.com?subject=Career%20Application%20-%20Social%20Media%20Intern"
                          className="px-3.5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm text-center shrink-0"
                        >
                          Apply Now →
                        </a>
                      </div>

                      {/* Role 3 */}
                      <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded uppercase">
                              Full-Time / Part-Time
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">Remote / Hybrid</span>
                          </div>
                          <h4 className="text-base font-bold text-white font-heading">PERFORMANCE MARKETER</h4>
                          <p className="text-xs text-slate-400 mt-1">Meta & Google Paid Ads buying, ROAS scaling, CAC optimization, & custom landing page conversion tracking.</p>
                        </div>
                        <a
                          href="mailto:harshvardhan@caelforge.com?subject=Career%20Application%20-%20Performance%20Marketer"
                          className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-sm text-center shrink-0"
                        >
                          Apply Now →
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/80 text-xs font-mono text-slate-300 mt-4">
                      📩 Send your resume and portfolio to <strong className="text-purple-300">harshvardhan@caelforge.com</strong> with the subject line <em>&quot;Career Application - [Role Name]&quot;</em>.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
