import { Calendar, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import Notification from '../components/Notification';
import { useState } from 'react';

type NotificationType = 'success' | 'error' | 'duplicate' | 'loading' | null;

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    company: '',
    yearsInBusiness: '',
    interest: 'Business Leaders who want to participate & stay updated with movement',
    referral: '',
    readiness: [] as string[],
    consent: false,
  });

  const [notification, setNotification] = useState<{
    type: NotificationType;
    message: string;
  }>({ type: null, message: '' });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    
    if (name === 'readiness' && type === 'checkbox') {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData(prev => {
        const currentReadiness = prev.readiness as string[];
        if (isChecked) {
          return { ...prev, readiness: [...currentReadiness, value] };
        } else {
          return { ...prev, readiness: currentReadiness.filter(item => item !== value) };
        }
      });
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setNotification({
        type: 'error',
        message: 'Please agree to PDPA to continue.'
      });
      return;
    }

    setIsLoading(true);
    setNotification({ type: 'loading', message: 'Submitting your registration...' });

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

      if (!scriptUrl) {
        throw new Error('Google Apps Script URL not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL in .env.local');
      }

      const sheetName = 'Business C-Nergy 2026 Registrations';
      const encodedSheet = encodeURIComponent(sheetName);
      const targetUrl = `${scriptUrl}?sheetName=${encodedSheet}&sheet=${encodedSheet}`;

      const payload = {
        ...formData,
        whatsapp: `"${formData.whatsapp}"`,
        readiness: Array.isArray(formData.readiness) ? formData.readiness.join(', ') : formData.readiness,
        sheetName,
        sheet: sheetName
      };

      const response = await fetch(targetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
      });

      // With no-cors mode, assume success if no error
      setNotification({
        type: 'success',
        message: 'Thank you for registering! We\'ll be in touch soon.'
      });
      console.log('Form submitted successfully', response);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        company: '',
        yearsInBusiness: '',
        interest: 'Business Leaders who want to participate & stay updated with movement',
        referral: '',
        readiness: [],
        consent: false,
      });
      
      // Close notification after 5 seconds
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setNotification({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit registration. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    'Business opportunities in new markets and new income streams.',
    'Access to global mentors and complimentary consultations.',
    'Over 50 hours of free learnings with Q&A sessions.',
    'Invites to online and in-person networking sessions.'
  ];

  const interestOptions = [
    'Business Leaders who want to participate & stay updated with movement',
    'HRDC Registered Training Provider with trainers network',
    'Service Provider to SMEs - Corporates : F&B, Digital Marketing, Corporate Gifts, etc.',
    'International Professional Trainers and Consultants',
    'Other'
  ];

  const readinessOptions = [
    'Learning and get access to all the FREE online sessions',
    'Attending Online & In-Person Business C-nergy & Growth Conference with Business Matching & Deal making potential',
    'Participating in Expo and showcase my business and get partners in new markets',
    'Consulting to expand new markets / Raise Fund for my business',
    'All of the above'
  ];

  return (
    <section id="register" className="py-32 relative overflow-hidden bg-[#1b052a]">
      {/* Notification Display */}
      {notification.type && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ type: null, message: '' })}
          duration={notification.type === 'loading' ? 0 : 5000}
        />
      )}

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#6B2D8C]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#8B4BA8]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal direction="zoom" className="text-center mb-16">
          <div className="w-20 h-20 mx-auto bg-[#6B2D8C] rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-purple-500/30 animate-float transform rotate-3 hover:rotate-6 transition-transform">
            <Calendar size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Ready for Quantum Leap in Your Business?</h2>
          <p className="text-slate-300 mb-4 text-xl md:text-2xl max-w-4xl mx-auto">
            <span className="text-[#D4AF37] font-bold">Be a Part of the Movement and Accelerate Your Growth!</span>
          </p>
          <p className="text-white font-bold tracking-widest uppercase text-lg max-w-4xl mx-auto mt-6 bg-white/10 py-3 rounded-full border border-white/20">
            FREE Signup for Value worth Thousands of Dollars
          </p>
        </Reveal>

        {/* Benefits Section */}
        <Reveal delay={100} direction="up" className="mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-8">What You'll Gain</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors duration-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Impact Metrics */}
        {/* <Reveal delay={200} direction="up" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#6B2D8C]/30 border border-[#D4AF37]/30 rounded-2xl p-8 text-center hover:bg-[#6B2D8C]/50 transition-all duration-300">
              <div className="text-5xl font-serif text-[#D4AF37] mb-2">5000+</div>
              <p className="text-white text-sm uppercase tracking-widest">Leaders Impacted</p>
            </div>
            <div className="bg-[#6B2D8C]/30 border border-[#D4AF37]/30 rounded-2xl p-8 text-center hover:bg-[#6B2D8C]/50 transition-all duration-300">
              <div className="text-5xl font-serif text-[#D4AF37] mb-2">400+</div>
              <p className="text-white text-sm uppercase tracking-widest">Projects Matched</p>
            </div>
            <div className="bg-[#6B2D8C]/30 border border-[#D4AF37]/30 rounded-2xl p-8 text-center hover:bg-[#6B2D8C]/50 transition-all duration-300">
              <div className="text-5xl font-serif text-[#D4AF37] mb-2">80+</div>
              <p className="text-white text-sm uppercase tracking-widest">Global Organizations</p>
            </div>
          </div>
        </Reveal> */}

        {/* Registration Form */}
        <Reveal delay={300} direction="up">
          <form className="text-left space-y-4" onSubmit={handleSubmit}>
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-serif text-white mb-8">Secure Your Spot</h3>

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* WhatsApp & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                    WhatsApp (with country code) *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="60 123456789"
                  />
                </div>
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Years in Business & Interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                    Number of years in Business
                  </label>
                  <input
                    type="text"
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. 5"
                  />
                </div>
                <div className="group">
                <label htmlFor="interest" className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                  Interest to Participate as *
                </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {interestOptions.map(option => (
                      <option key={option} value={option} className="bg-[#1b052a] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Referral */}
              <div className="mb-6 group">
                <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                  Referred By *
                </label>
                <input
                  type="text"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-base focus:ring-2 focus:ring-[#6B2D8C] focus:bg-white/10 focus:border-white/30 outline-none transition-all placeholder-white/30 group-hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Who referred you?"
                />
              </div>

              {/* Readiness Options */}
              <div className="mb-6 group">
                <label className="block text-[11px] uppercase tracking-widest text-[#D4AF37] mb-3 font-bold">
                  I am ready for: *
                </label>
                <div className="space-y-3">
                  {readinessOptions.map((option, idx) => (
                    <label key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/30 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        name="readiness"
                        value={option}
                        checked={(formData.readiness as string[]).includes(option)}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-5 h-5 rounded border-white/30 text-[#6B2D8C] focus:ring-2 focus:ring-[#6B2D8C] mt-0.5 cursor-pointer accent-[#6B2D8C] disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                      />
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="mb-8 flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-5 h-5 rounded border-white/30 text-[#6B2D8C] focus:ring-2 focus:ring-[#6B2D8C] mt-1 cursor-pointer accent-[#6B2D8C] disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label htmlFor="consent" className="text-white text-sm cursor-pointer">
                  I agree and accept that All information gathered by GOGLOBAL Business School & Work Less Earn More Academy, is maintained in accordance to the the PDPA laws of Singapore, and shared ONLY to the SHINE GOGLOBAL & Its related company to serve the purpose of this movement, sharing the relevant information needed for my business and personal growth
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-[#6B2D8C] text-white font-bold uppercase tracking-[0.2em] py-5 overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.consent || isLoading}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {isLoading ? 'Submitting...' : 'Secure Your Spot'}
                </span>
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 text-[#6B2D8C]">
                  {isLoading ? 'Submitting...' : 'Secure Your Spot'}
                </span>
              </button>
              
              <p className="text-center text-white/40 text-xs mt-4">
                Join us in building Malaysia's Conscious Business Capital. Together, we create impact.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Register;
