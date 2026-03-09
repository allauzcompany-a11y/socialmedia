import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import lauzLogo from './lauzlogo.png';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  ChevronRight,
  Gauge,
  Sparkles,
  ShieldCheck,
  Wrench
} from 'lucide-react';

// Custom TikTok icon since lucide doesn't have it by default in some versions or it's named differently
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
    <path d="M20.52 3.48A11.74 11.74 0 0 0 12.17 0C5.64 0 .32 5.31.32 11.84c0 2.08.55 4.12 1.58 5.91L0 24l6.45-1.7a11.8 11.8 0 0 0 5.72 1.46h.01c6.53 0 11.85-5.31 11.85-11.84 0-3.16-1.23-6.13-3.51-8.44ZM12.18 21.76h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.39a9.82 9.82 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.88a9.76 9.76 0 0 1 2.9 6.96c0 5.44-4.43 9.86-9.86 9.86Zm5.4-7.36c-.3-.16-1.79-.88-2.07-.98-.28-.1-.48-.16-.69.16-.2.3-.79.98-.96 1.18-.18.2-.35.23-.66.08-.3-.16-1.27-.47-2.42-1.5a9.06 9.06 0 0 1-1.67-2.08c-.18-.3-.02-.46.13-.61.14-.14.31-.35.47-.53.15-.18.2-.3.3-.5.1-.2.05-.39-.03-.54-.08-.16-.69-1.66-.95-2.27-.24-.58-.5-.5-.69-.5h-.58c-.2 0-.53.07-.8.38s-1.05 1.02-1.05 2.49 1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.13 4.54.72.31 1.29.5 1.72.63.73.23 1.4.2 1.93.12.58-.08 1.79-.73 2.04-1.44.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@lauz.company',
    url: 'https://www.instagram.com/lauz.company?igsh=eWQwOGR3amQ3Z21x&utm_source=qr',
    icon: <Instagram className="w-6 h-6" />,
    iconColor: 'text-[#F472B6]',
    actionLabel: 'Visit',
    borderColor: 'border-[#E1306C]/35',
    accent: 'from-[#E1306C]/55 to-[#F77737]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(225,48,108,0.28)]'
  },
  {
    name: 'Facebook',
    handle: 'Lauz Company',
    url: 'https://www.facebook.com/share/1C5sBETMCC/?mibextid=wwXIfr',
    icon: <Facebook className="w-6 h-6" />,
    iconColor: 'text-[#60A5FA]',
    actionLabel: 'Visit',
    borderColor: 'border-[#1877F2]/35',
    accent: 'from-[#1877F2]/55 to-[#60A5FA]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(24,119,242,0.28)]'
  },
  {
    name: 'LinkedIn',
    handle: 'Lauz Smart Automotive',
    url: 'https://www.linkedin.com/company/lauz-smart-automotive-service-company',
    icon: <Linkedin className="w-6 h-6" />,
    iconColor: 'text-[#38BDF8]',
    actionLabel: 'Visit',
    borderColor: 'border-[#0A66C2]/35',
    accent: 'from-[#0A66C2]/55 to-[#38BDF8]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(10,102,194,0.28)]'
  },
  {
    name: 'TikTok',
    handle: '@lauz.company',
    url: 'https://www.tiktok.com/@lauz.company?_r=1&_t=ZS-94XxUyqFlzz',
    icon: <TikTokIcon />,
    iconColor: 'text-white',
    actionLabel: 'Visit',
    borderColor: 'border-white/25',
    accent: 'from-white/40 to-red-500/35',
    shadow: 'hover:shadow-[0_14px_34px_rgba(255,255,255,0.15)]'
  },
  {
    name: 'YouTube',
    handle: '@LauzCompany',
    url: 'https://www.youtube.com/@LauzCompany',
    icon: <Youtube className="w-6 h-6" />,
    iconColor: 'text-[#F87171]',
    actionLabel: 'Watch',
    borderColor: 'border-[#EF4444]/35',
    accent: 'from-[#EF4444]/60 to-[#F97316]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(239,68,68,0.28)]'
  },
  {
    name: 'WhatsApp',
    handle: '+964 770 140 3305',
    url: 'https://wa.me/9647701403305?text=Hello%20Lauz%20Company',
    icon: <WhatsAppIcon />,
    iconColor: 'text-[#4ADE80]',
    actionLabel: 'Chat',
    borderColor: 'border-[#22C55E]/35',
    accent: 'from-[#22C55E]/60 to-[#4ADE80]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(34,197,94,0.25)]'
  }
];

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const usePosterOnly = shouldReduceMotion;
  const activePoster = isMobile ? '/media/car-poster-mobile.jpg' : '/media/car-poster.jpg';
  const reveal = (delay = 0, y = 16) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.58, ease: 'easeOut', delay }
        };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090a0c] text-white selection:bg-red-600 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {usePosterOnly ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${activePoster}')` }}
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={activePoster}
          >
            <source media="(max-width: 768px)" src="/media/car-bg-mobile.webm" type="video/webm" />
            <source media="(max-width: 768px)" src="/media/car-bg-mobile.mp4" type="video/mp4" />
            <source src="/media/car-bg.webm" type="video/webm" />
            <source src="/media/car-bg.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-x-0 top-0 h-[32vh] bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[44vh] bg-gradient-to-t from-black/75 to-transparent" />

        <motion.div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 12%, rgba(239,68,68,0.45), transparent 36%), radial-gradient(circle at 78% 24%, rgba(59,130,246,0.3), transparent 34%), radial-gradient(circle at 50% 78%, rgba(185,28,28,0.24), transparent 38%)'
          }}
          animate={shouldReduceMotion ? { opacity: 0.16 } : { opacity: [0.12, 0.2, 0.12] }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(116deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 34px)',
            backgroundSize: '240px 240px'
          }}
          animate={shouldReduceMotion ? { backgroundPosition: '0px 0px' } : { backgroundPosition: ['0px 0px', '280px 340px'] }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10 md:pt-12">
        {/* Logo Section */}
        <motion.div 
          {...reveal(0.02, -16)}
          className="mb-5 flex w-full justify-center sm:mb-7 md:mb-8"
        >
          <div className="relative w-full max-w-[580px]">
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[14.5rem] w-[14.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.42),rgba(127,29,29,0.03)_68%)] blur-2xl sm:h-[17rem] sm:w-[17rem] md:h-[19rem] md:w-[19rem]"
              animate={shouldReduceMotion ? { opacity: 0.66, scale: 1 } : { opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex items-center justify-center px-2 py-2 sm:px-6 sm:py-6 md:px-8 md:py-8">
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[7.5rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/24 blur-3xl sm:h-40 sm:w-64 md:h-44 md:w-72"
                animate={shouldReduceMotion ? { opacity: 0.4 } : { opacity: [0.25, 0.5, 0.25] }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-16 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-white/24 to-transparent blur-lg sm:h-18 sm:w-56 md:h-20 md:w-60"
                animate={shouldReduceMotion ? { x: 0, opacity: 0.25 } : { x: [-120, 120, -120], opacity: [0, 0.45, 0] }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 5.2, repeat: Infinity, ease: 'linear' }}
              />
              <img 
                src={lauzLogo}
                alt="LAUZ Logo" 
                className="relative z-10 mx-auto h-32 w-auto scale-[1.05] object-contain drop-shadow-[0_20px_36px_rgba(239,68,68,0.45)] sm:h-52 sm:scale-[1.34] md:h-64 md:scale-[1.5]"
              />
            </div>
          </div>
        </motion.div>

        {/* Header Text */}
        <motion.div 
          {...reveal(0.12)}
          className="mb-7 text-center sm:mb-8"
        >
          <h1 className="font-display mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-[1.75rem] font-extrabold leading-[1.08] tracking-tight text-transparent sm:text-4xl">
            Lauz Group Smart Automotive Service
          </h1>
          <p className="mx-auto max-w-md text-[13px] leading-relaxed text-gray-300/90 sm:text-base">
            Premium automotive services, diagnostics, and detailing with an engineered attention to quality.
          </p>
          <motion.div
            {...reveal(0.28, 10)}
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-red-200/90 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.14em]"
          >
            <Gauge className="h-4 w-4 text-red-300" />
            Performance Driven Care
            <Sparkles className="h-3.5 w-3.5 text-blue-200" />
          </motion.div>

          <motion.div
            {...reveal(0.34, 10)}
            className="mx-auto mt-4 flex w-full max-w-sm flex-wrap items-center justify-center gap-2 text-[11px] text-gray-400 sm:text-xs"
          >
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5">
              <Wrench className="h-3.5 w-3.5 text-red-300" />
              Service
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5">
              <Gauge className="h-3.5 w-3.5 text-blue-300" />
              Performance
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              Trusted
            </span>
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          {...reveal(0.42, 18)}
          className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/35 p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-4"
        >
          <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500/70 via-white/45 to-blue-400/70" />
          <motion.p
            className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-red-300/80 sm:mb-4 sm:text-[11px] sm:tracking-[0.22em]"
          >
            Official Channels
          </motion.p>

          <div className="grid gap-3 md:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name} (${link.handle})`}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, x: -18 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.52 + index * 0.08, duration: 0.48 }
                  })}
              className={`focus-ring group relative flex items-center justify-between overflow-hidden rounded-2xl border ${link.borderColor} bg-[#101214]/85 px-3.5 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#171a1f] sm:px-5 sm:py-[18px] ${link.shadow}`}
            >
              <span aria-hidden className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${link.accent}`} />
                <span aria-hidden className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${link.accent}`} />

              <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                <div className={`relative z-10 rounded-lg bg-white/10 p-2 transition-colors group-hover:bg-white/20 ${link.iconColor}`}>
                  {link.icon}
                </div>
                <div className="relative z-10 min-w-0">
                  <span className="block text-base font-semibold leading-5 sm:text-lg">{link.name}</span>
                  <span className="block max-w-[46vw] truncate text-[11px] font-medium leading-4 text-gray-400 sm:max-w-none sm:text-xs">
                    {link.handle}
                  </span>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-2">
                <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 transition-colors group-hover:text-white/90 sm:block">
                  {link.actionLabel}
                </span>
                <ChevronRight className="h-5 w-5 opacity-70 transition-all sm:translate-x-[-10px] sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          {...reveal(0.72, 14)}
          className="mt-10 text-center sm:mt-14"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.14em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
            <div className="hidden h-[1px] w-8 bg-gray-800 sm:block" />
            <span className="text-center">Lauz Group Smart Automotive Service</span>
            <div className="hidden h-[1px] w-8 bg-gray-800 sm:block" />
          </div>
          <p className="text-[10px] text-gray-600">
            &copy; {new Date().getFullYear()} LAUZ Company. All rights reserved.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
