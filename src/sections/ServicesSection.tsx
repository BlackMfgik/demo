import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Tv, Phone, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: 'Високошвидкісний Інтернет',
    description:
      'Волоконно-оптична мережа зі швидкістю до 1 Гбіт/с. Стабільне з\'єднання та мінімальні затримки для роботи, навчання та розваг.',
    image: '/images/service-internet.jpg',
  },
  {
    icon: Tv,
    title: 'IP-Телебачення',
    description:
      'Понад 190 цифрових каналів у високій якості. Перегляд на Smart TV, смартфонах та ТВ-приставках. Архів передач до 7 днів.',
    image: '/images/service-iptv.jpg',
  },
  {
    icon: Phone,
    title: 'IP-Телефонія',
    description:
      'Сучасна телефонія через інтернет-з\'єднання. Чітка якість звуку, вигідні тарифи на дзвінки по Україні та за кордон.',
    image: '/images/service-phone.jpg',
  },
  {
    icon: Server,
    title: 'Хостинг та Датацентр',
    description:
      'Надійний хостинг для ваших проєктів. Colocation, віртуальні сервери, хмарні рішення. Ліцензія серія АВ № 303342.',
    image: '/images/service-hosting.jpg',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    // Встановлюємо початковий стан явно перед анімацією
    gsap.set(cards, { opacity: 0, y: 30 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
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
    <section id="services" ref={sectionRef} className="w-full py-[120px] bg-[#0D1321]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4 block">
            ПОСЛУГИ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#F0F4F8] tracking-[-0.02em]">
            Більше, ніж просто інтернет
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="group bg-[#080D17] border border-[#1A2540] rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:border-[#00D4FF]/50"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D17] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F0F4F8] mb-3">{service.title}</h3>
                  <p className="text-sm text-[#8896AB] leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
