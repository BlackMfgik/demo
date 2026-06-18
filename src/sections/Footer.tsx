import { Leaf } from 'lucide-react';

const servicesLinks = [
  'Інтернет',
  'IP-Телебачення',
  'IP-Телефонія',
  'Хостинг',
  'Датацентр',
];

const companyLinks = [
  'Про нас',
  'Покриття',
  'Новини',
  'Контакти',
  'Оплата',
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#060A12]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2 mb-4"
            >
              <Leaf className="w-5 h-5 text-[#00D4FF]" />
              <span className="text-[#F0F4F8] font-semibold text-lg">Дикий Сад</span>
            </button>
            <p className="text-sm text-[#8896AB] leading-relaxed mb-6">
              Інтернет-провайдер у місті Миколаїв з 1999 року. Швидкісний оптоволоконний інтернет, IPTV, IP-телефонія.
            </p>
            <div className="flex items-center gap-4">
              {/* Telegram */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#131B2E] flex items-center justify-center text-[#4A5570] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#131B2E] flex items-center justify-center text-[#4A5570] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Viber */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#131B2E] flex items-center justify-center text-[#4A5570] hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-all"
                aria-label="Viber"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.998 0C5.372 0 0 5.37 0 11.996c0 2.648.858 5.098 2.31 7.09l.478.637-.192 2.12 2.052-1.065.582.332A11.933 11.933 0 0 0 12 24c6.628 0 12.002-5.372 12.002-12.004C24.002 5.37 18.628 0 11.998 0zm6.49 16.988c-.27.758-1.34 1.382-1.848 1.478-.498.093-1.002.172-3.304-.722-2.804-1.078-4.61-3.878-4.748-4.058-.138-.178-1.132-1.502-1.132-2.866 0-1.362.712-2.028.964-2.306.252-.28.552-.35.736-.35.184 0 .368.002.528.01.18.01.42-.068.658.498.24.572.816 1.992.888 2.14.072.146.12.318.024.514-.096.196-.144.318-.286.486-.142.168-.298.352-.426.472-.142.134-.29.28-.2.552.09.272.402 1.324 1.65 2.142 1.134.74 2.04.978 2.326 1.086.288.11.482.092.66-.056.176-.146.756-.884.956-1.188.202-.304.402-.252.66-.152.258.1 1.644.77 1.926.91.282.142.47.212.54.33.068.12.05.688-.22 1.446z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#F0F4F8] mb-4 tracking-wide">Послуги</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-[#8896AB] hover:text-[#F0F4F8] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#F0F4F8] mb-4 tracking-wide">Компанія</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      if (link === 'Покриття') scrollTo('#coverage');
                      else if (link === 'Контакти') scrollTo('#contact');
                    }}
                    className="text-sm text-[#8896AB] hover:text-[#F0F4F8] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-[#F0F4F8] mb-4 tracking-wide">Контакти</h4>
            <ul className="space-y-3">
              <li className="text-sm text-[#8896AB]">(0512) 709-555</li>
              <li className="text-sm text-[#8896AB]">+38 (093) 170-1871</li>
              <li className="text-sm text-[#8896AB]">+38 (066) 170-9555</li>
              <li className="text-sm text-[#8896AB]">wpboss@wildpark.net</li>
              <li className="text-sm text-[#8896AB]">м. Миколаїв</li>
              <li className="text-sm text-[#4A5570] mt-4">
                Пн-Пт: 09:00-17:00
                <br />
                Сб: 10:00-15:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A2540] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A5570]">
            © 2025 Дикий Сад. Інтернет-провайдер м. Миколаїв.
          </p>
          <p className="text-xs text-[#4A5570]">
            Техпідтримка: щодня 08:00-23:00
          </p>
        </div>
      </div>
    </footer>
  );
}
