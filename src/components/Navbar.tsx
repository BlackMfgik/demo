import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Головна', href: '#hero' },
  { label: 'Тарифи', href: '#tariffs' },
  { label: 'Послуги', href: '#services' },
  { label: 'Покриття', href: '#coverage' },
  { label: 'Контакти', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080D17]/85 backdrop-blur-[20px] border-b border-[#1A2540]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <Leaf className="w-6 h-6 text-[#00D4FF] transition-transform group-hover:scale-110" />
            </div>
            <span className="text-[#F0F4F8] font-semibold text-lg tracking-tight">
              Дикий Сад
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#8896AB] hover:text-[#F0F4F8] transition-colors tracking-[0.02em]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-7 py-3 bg-[#00D4FF] text-[#080D17] font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300"
            >
              Підключити
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#F0F4F8] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#080D17]/95 backdrop-blur-[20px] z-40">
          <div className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-medium text-[#8896AB] hover:text-[#F0F4F8] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-4 px-7 py-3 bg-[#00D4FF] text-[#080D17] font-semibold text-sm rounded-full"
            >
              Підключити
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
