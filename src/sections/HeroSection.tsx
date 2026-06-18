import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';
import ParticleCanvas from '@/components/ParticleCanvas';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
      .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

    return () => { tl.kill(); };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#080D17]"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Bottom gradient for readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080D17 0%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[72px]">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="opacity-0 translate-y-5 mb-6"
        >
          <span className="text-xs font-medium tracking-[0.1em] uppercase text-[#4A5570]">
            Інтернет-провайдер м. Миколаїв — з 1999 року
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
          <div ref={line1Ref} className="opacity-0 translate-y-8 text-[#F0F4F8]">
            Швидкість, якій
          </div>
          <div ref={line2Ref} className="opacity-0 translate-y-8 text-[#00D4FF]">
            можна довіряти
          </div>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="opacity-0 translate-y-5 text-base sm:text-lg text-[#8896AB] max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          Волоконно-оптичний інтернет до 1 Гбіт/с. IPTV з 190+ каналами. IP-телефонія.
          Безперервна робота мережі навіть при відключенні світла.
        </p>

        {/* CTA Group */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 bg-[#00D4FF] text-[#080D17] font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
          >
            Підключити інтернет
          </button>
          <button
            onClick={() => scrollTo('#coverage')}
            className="px-8 py-4 border border-[#1A2540] text-[#F0F4F8] font-semibold rounded-xl hover:bg-[#131B2E] hover:border-[#00D4FF]/50 transition-all duration-300 flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            Перевірити адресу
          </button>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="opacity-0 translate-y-5 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00D4FF]">25+</div>
            <div className="text-sm text-[#4A5570] mt-1">років на ринку</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00D4FF]">1 Гбіт/с</div>
            <div className="text-sm text-[#4A5570] mt-1">максимальна швидкість</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00D4FF]">24/7</div>
            <div className="text-sm text-[#4A5570] mt-1">техпідтримка</div>
          </div>
        </div>
      </div>
    </section>
  );
}
