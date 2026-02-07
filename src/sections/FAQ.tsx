import { ChevronDown } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the Business C-Nergy & Growth Movement 2026?',
      answer: 'It\'s a national initiative aligned with Visit Malaysia 2026 that brings together corporate leaders, entrepreneurs, and investors to build conscious, sustainable business practices. We focus on creating partnerships, sharing knowledge, and driving impact across the ASEAN region.'
    },
    {
      question: 'Who should join this movement?',
      answer: 'Business leaders seeking growth opportunities, entrepreneurs looking for mentorship and investment, service providers wanting to connect with a network of conscious businesses, trainers and coaches, consultants, and impact investors. If you believe business can be a force for good, you belong here.'
    },
    {
      question: 'What will I gain from membership?',
      answer: 'Direct access to 30+ global mentors, quarterly business growth sessions, strategic partnership opportunities, business certifications and recognition, media visibility to enhance thought leadership, and an investment-ready acceleration program to scale your business.'
    },
    {
      question: 'How is this different from other business networks?',
      answer: 'We emphasize conscious capitalism—where purpose and profit coexist. Our focus isn\'t just on transactions, but on transformations. We bridge Malaysia to Asia, and Asia to the World, creating a truly global community of leaders committed to sustainable, ethical business practices.'
    },
    {
      question: 'How often will there be events and sessions?',
      answer: 'We conduct quarterly sessions with our network of mentors, regular workshops on business growth, and exclusive networking events. Members also get access to our online community for continuous learning and collaboration.'
    },
    {
      question: 'Is there a membership fee?',
      answer: 'Details on membership tiers and pricing will be shared during onboarding. We offer flexible options to accommodate businesses of all sizes. Priority early bird rates are available for those who register before the official launch.'
    }
  ];

  return (
    <section id="faq" className="py-32 relative z-10 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-[#2D1B3D] mb-6">
            Frequently Asked <span className="text-[#6B2D8C] italic">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about joining the Business C-Nergy & Growth Movement 2026
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 50} direction="up">
              <div
                className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-[#6B2D8C] transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-[#f8fafc] transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-serif text-[#2D1B3D] text-left group-hover:text-[#6B2D8C] transition-colors duration-300 cursor-pointer">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-[#6B2D8C] flex-shrink-0 transition-transform duration-500 cursor-pointer ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-8 py-6 border-t border-slate-200 bg-gradient-to-br from-[#6B2D8C]/5 to-[#D4AF37]/5 animate-in fade-in slide-in-from-top-4 duration-300">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} className="text-center mt-16 p-8 bg-gradient-to-r from-[#6B2D8C]/10 to-[#D4AF37]/10 rounded-2xl border border-[#6B2D8C]/20">
          <p className="text-slate-700 text-lg mb-6">
            Have more questions? Our team is here to help.
          </p>
          <a
            href="mailto:hello@businesscnergy2026.my"
            className="inline-block px-8 py-3 bg-[#6B2D8C] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Contact Us
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
