import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Smartphone, Clock, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: Phone,
    value: '(0512) 709-555',
    label: 'Основний телефон',
  },
  {
    icon: Smartphone,
    value: '+38 (093) 170-1871',
    label: 'LifeCell',
  },
  {
    icon: Clock,
    value: 'Щодня 08:00-23:00',
    label: 'Техпідтримка',
  },
  {
    icon: MessageCircle,
    value: '@wildpark',
    label: 'Telegram-бот',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.set([leftRef.current, rightRef.current], { opacity: 0 });
    gsap.set(leftRef.current, { x: -20 });
    gsap.set(rightRef.current, { x: 20 });

    const ctx = gsap.context(() => {
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.to(rightRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="w-full py-[120px] bg-[#080D17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div ref={leftRef}>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4 block">
              КОНТАКТИ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#F0F4F8] tracking-[-0.02em] mb-4">
              Зв'яжіться з нами
            </h2>
            <p className="text-base text-[#8896AB] mb-10 leading-relaxed">
              Маєте питання? Наші спеціалісти допоможуть обрати оптимальний тариф та підключити послуги.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={contact.label}
                    className="flex items-center gap-4 p-4 bg-[#0D1321] border border-[#1A2540] rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#00D4FF]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#F0F4F8]">{contact.value}</div>
                      <div className="text-xs text-[#4A5570]">{contact.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef}>
            <div className="bg-[#0D1321] border border-[#1A2540] rounded-2xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00E5A0]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#00E5A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-2">Дякуємо!</h3>
                  <p className="text-sm text-[#8896AB]">Ми зв'яжемося з вами найближчим часом.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#8896AB] mb-2">Ім'я</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#131B2E] border border-[#1A2540] rounded-lg text-[#F0F4F8] placeholder-[#4A5570] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-colors"
                      placeholder="Ваше ім'я"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8896AB] mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#131B2E] border border-[#1A2540] rounded-lg text-[#F0F4F8] placeholder-[#4A5570] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-colors"
                      placeholder="+38 (0XX) XXX-XX-XX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8896AB] mb-2">Адреса</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3.5 bg-[#131B2E] border border-[#1A2540] rounded-lg text-[#F0F4F8] placeholder-[#4A5570] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-colors"
                      placeholder="вул. Прикладна, 1, кв. 10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8896AB] mb-2">Повідомлення</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3.5 bg-[#131B2E] border border-[#1A2540] rounded-lg text-[#F0F4F8] placeholder-[#4A5570] focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-colors resize-none"
                      placeholder="Опишіть ваше питання..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00D4FF] text-[#080D17] font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
                  >
                    Надіслати
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
