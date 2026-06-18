import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Zap, Wifi } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tariffs = [
  {
    name: 'Базовий',
    speed: '100',
    price: '250',
    popular: false,
    features: [
      'Безлімітний інтернет',
      'Швидкість до 100 Мбіт/с',
      'Wi-Fi роутер в оренду',
      'Техпідтримка 24/7',
    ],
  },
  {
    name: 'Оптимальний',
    speed: '500',
    price: '400',
    popular: true,
    features: [
      'Безлімітний інтернет',
      'Швидкість до 500 Мбіт/с',
      'Wi-Fi 6 роутер в оренду',
      'IPTV базовий пакет',
      'Техпідтримка 24/7',
    ],
  },
  {
    name: 'Преміум',
    speed: '1000',
    price: '600',
    popular: false,
    features: [
      'Безлімітний інтернет',
      'Швидкість до 1 Гбіт/с',
      'Wi-Fi 6 роутер в подарунок',
      'IPTV розширений пакет',
      'IP-телефонія',
      'Пріоритетна підтримка',
    ],
  },
];

export default function TariffsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    // Встановлюємо початковий стан явно перед анімацією
    gsap.set(cards, { opacity: 0, y: 40 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
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

  return (
    <section id="tariffs" ref={sectionRef} className="w-full py-[120px] bg-[#080D17]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4 block">
            ТАРИФИ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#F0F4F8] tracking-[-0.02em] mb-4">
            Оберіть свій пакет
          </h2>
          <p className="text-base text-[#8896AB] max-w-[600px] mx-auto">
            Швидкісний інтернет для дому та бізнесу. Безлімітний трафік. Стабільна швидкість.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tariffs.map((tariff, i) => (
            <div
              key={tariff.name}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`relative bg-[#0D1321] border rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,212,255,0.1)] ${
                tariff.popular
                  ? 'border-2 border-[#00D4FF]'
                  : 'border-[#1A2540] hover:border-[#00D4FF]/50'
              }`}
            >
              {/* Popular Badge */}
              {tariff.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-[#00D4FF] text-[#080D17] text-xs font-semibold rounded-full">
                  Популярний
                </div>
              )}

              {/* Speed Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-[#F0F4F8] tracking-[-0.04em]">
                    {tariff.speed}
                  </div>
                  <div className="text-sm text-[#4A5570]">Мбіт/с</div>
                </div>
              </div>

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-[#F0F4F8] mb-4">{tariff.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-extrabold text-[#F0F4F8] tracking-[-0.04em]">
                  {tariff.price}
                </span>
                <span className="text-lg font-medium text-[#4A5570]">грн/міс</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tariff.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E5A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#8896AB]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  tariff.popular
                    ? 'bg-[#00D4FF] text-[#080D17] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]'
                    : 'border border-[#1A2540] text-[#F0F4F8] hover:bg-[#131B2E] hover:border-[#00D4FF]/50'
                }`}
              >
                Обрати
              </button>
            </div>
          ))}
        </div>

        {/* Router Note */}
        <div className="flex items-center justify-center gap-2 mt-10 text-[#4A5570]">
          <Wifi className="w-4 h-4" />
          <span className="text-sm">Wi-Fi роутер включено у всі тарифи</span>
        </div>
      </div>
    </section>
  );
}
