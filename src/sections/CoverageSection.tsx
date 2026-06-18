import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Волоконно-оптична мережа по всьому місту',
  'Підключення в приватному секторі та багатоквартирних будинках',
  'Швидке підключення — від 24 годин',
];

export default function CoverageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(leftRef.current, { opacity: 0, x: -30 });
    gsap.set(rightRef.current, { opacity: 0, x: 30 });

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
        delay: 0.3,
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

  return (
    <section id="coverage" ref={sectionRef} className="w-full py-[120px] bg-[#080D17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div ref={leftRef}>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4 block">
              ПОКРИТТЯ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#F0F4F8] tracking-[-0.02em] mb-6">
              Миколаїв та область
            </h2>
            <p className="text-base text-[#8896AB] mb-8 leading-relaxed">
              Наша волоконно-оптична мережа охоплює місто Миколаїв та прилеглі райони.
              Перевірте доступність послуг за вашою адресою.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00E5A0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#00E5A0]" />
                  </div>
                  <span className="text-sm text-[#8896AB]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#00D4FF] text-[#080D17] font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Перевірити адресу
            </button>
          </div>

          {/* Right Column - Map Visualization */}
          <div ref={rightRef} className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Abstract Map */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                <g stroke="#1A2540" strokeWidth="0.5" opacity="0.3">
                  {Array.from({ length: 9 }, (_, i) => (
                    <g key={i}>
                      <line x1={(i + 1) * 40} y1="0" x2={(i + 1) * 40} y2="400" />
                      <line x1="0" y1={(i + 1) * 40} x2="400" y2={(i + 1) * 40} />
                    </g>
                  ))}
                </g>

                {/* District shapes - covered areas */}
                <path
                  d="M40 40 L160 40 L160 120 L120 160 L40 160 Z"
                  fill="#00D4FF"
                  fillOpacity="0.08"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <path
                  d="M160 40 L280 40 L320 100 L280 160 L160 120 Z"
                  fill="#00D4FF"
                  fillOpacity="0.12"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <path
                  d="M40 160 L120 160 L160 200 L160 320 L80 360 L40 280 Z"
                  fill="#00D4FF"
                  fillOpacity="0.06"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <path
                  d="M160 200 L280 160 L360 200 L360 320 L240 360 L160 320 Z"
                  fill="#00D4FF"
                  fillOpacity="0.1"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />
                <path
                  d="M280 40 L360 80 L360 200 L280 160 L320 100 Z"
                  fill="#00D4FF"
                  fillOpacity="0.04"
                  stroke="#00D4FF"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                />

                {/* Center pulse dot */}
                <circle cx="200" cy="200" r="6" fill="#00D4FF" opacity="0.8">
                  <animate
                    attributeName="r"
                    values="6;12;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0.3;0.8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="200" cy="200" r="20" stroke="#00D4FF" strokeWidth="1" fill="none" opacity="0.2">
                  <animate
                    attributeName="r"
                    values="20;40;20"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.2;0;0.2"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Secondary points */}
                <circle cx="120" cy="120" r="3" fill="#00D4FF" opacity="0.4" />
                <circle cx="280" cy="120" r="3" fill="#00D4FF" opacity="0.4" />
                <circle cx="120" cy="280" r="3" fill="#00D4FF" opacity="0.4" />
                <circle cx="280" cy="280" r="3" fill="#00D4FF" opacity="0.4" />
                <circle cx="80" cy="200" r="3" fill="#00D4FF" opacity="0.4" />
                <circle cx="320" cy="200" r="3" fill="#00D4FF" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
