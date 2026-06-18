import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: '25+',
    numericValue: 25,
    suffix: '+',
    label: 'років на ринку',
    description: 'Працюємо з 1999 року. Один із перших інтернет-провайдерів Миколаєва.',
  },
  {
    number: '1 Гбіт/с',
    numericValue: 1,
    suffix: ' Гбіт/с',
    label: 'максимальна швидкість',
    description: 'Волоконно-оптична мережа забезпечує найвищу швидкість передачі даних.',
  },
  {
    number: '24/7',
    numericValue: 24,
    suffix: '/7',
    label: 'технічна підтримка',
    description: 'Техпідтримка по телефону щодня з 08:00 до 23:00. Аварійні бригади цілодобово.',
  },
  {
    number: '100%',
    numericValue: 100,
    suffix: '%',
    label: 'власна інфраструктура',
    description: 'Власна волоконно-оптична мережа та обладнання. Не залежимо від третіх осіб.',
  },
];

function AnimatedCounter({ value, suffix, triggered }: { value: number; suffix: string; triggered: boolean }) {
  const [count, setCount] = useState(0);
  const countRef = useRef({ val: 0 });

  useEffect(() => {
    if (!triggered) return;

    const obj = countRef.current;
    gsap.to(obj, {
      val: value,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        setCount(Math.round(obj.val));
      },
    });
  }, [triggered, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const blocks = blocksRef.current.filter(Boolean);
    if (!blocks.length) return;

    gsap.set(blocks, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => setTriggered(true),
      });

      gsap.to(blocks, {
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
    <section ref={sectionRef} className="w-full py-[120px] bg-[#0D1321]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#00D4FF] mb-4 block">
            ЧОМУ МИ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#F0F4F8] tracking-[-0.02em]">
            25 років довіри миколаївців
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { if (el) blocksRef.current[i] = el; }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#00D4FF] tracking-[-0.04em] mb-2">
                <AnimatedCounter
                  value={stat.numericValue}
                  suffix={stat.suffix}
                  triggered={triggered}
                />
              </div>
              <h3 className="text-lg font-semibold text-[#F0F4F8] mb-2">{stat.label}</h3>
              <p className="text-sm text-[#8896AB] leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
