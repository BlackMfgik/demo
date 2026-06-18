import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hexagon, Triangle, Circle, Square, Pentagon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { icon: Hexagon, name: 'Cisco' },
  { icon: Triangle, name: 'MikroTik' },
  { icon: Circle, name: 'Ubiquiti' },
  { icon: Square, name: 'Juniper' },
  { icon: Pentagon, name: 'Huawei' },
];

export default function PartnersBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-10 bg-[#0D1321]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium tracking-[0.1em] uppercase text-[#4A5570] text-center mb-8">
          Технологічні партнери
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                ref={(el) => { if (el) itemsRef.current[i] = el; }}
                className="flex items-center gap-3 text-[#4A5570] hover:text-[#8896AB] transition-colors"
              >
                <Icon className="w-8 h-8 opacity-50" strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wide hidden sm:inline">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
