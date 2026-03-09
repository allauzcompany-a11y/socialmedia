import React from 'react';
import { motion } from 'motion/react';
import lauzLogo from './lauz logo.png';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  ChevronRight,
  Gauge,
  Sparkles
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

const CarSilhouette = ({ className = '' }) => (
  <svg viewBox="0 0 240 96" className={className} aria-hidden>
    <path
      d="M26 61h14l19-23c4-5 10-8 16-8h88c7 0 13 3 17 8l18 21h15c10 0 18 8 18 18v6h-11c0-10-8-18-18-18s-18 8-18 18h-72c0-10-8-18-18-18s-18 8-18 18H26z"
      fill="currentColor"
    />
    <path d="M84 42h72c4 0 8 2 11 6l5 6H72l6-7c2-3 4-5 6-5Z" fill="rgba(255,255,255,0.14)" />
    <circle cx="74" cy="82" r="10" fill="rgba(8,8,8,0.9)" />
    <circle cx="74" cy="82" r="4" fill="rgba(255,255,255,0.35)" />
    <circle cx="166" cy="82" r="10" fill="rgba(8,8,8,0.9)" />
    <circle cx="166" cy="82" r="4" fill="rgba(255,255,255,0.35)" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lauz.company?igsh=eWQwOGR3amQ3Z21x&utm_source=qr',
    icon: <Instagram className="w-6 h-6" />,
    borderColor: 'border-[#E1306C]/35',
    accent: 'from-[#E1306C]/55 to-[#F77737]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(225,48,108,0.28)]'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1C5sBETMCC/?mibextid=wwXIfr',
    icon: <Facebook className="w-6 h-6" />,
    borderColor: 'border-[#1877F2]/35',
    accent: 'from-[#1877F2]/55 to-[#60A5FA]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(24,119,242,0.28)]'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/lauz-smart-automotive-service-company',
    icon: <Linkedin className="w-6 h-6" />,
    borderColor: 'border-[#0A66C2]/35',
    accent: 'from-[#0A66C2]/55 to-[#38BDF8]/45',
    shadow: 'hover:shadow-[0_14px_34px_rgba(10,102,194,0.28)]'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@lauz.company?_r=1&_t=ZS-94XxUyqFlzz',
    icon: <TikTokIcon />,
    borderColor: 'border-white/25',
    accent: 'from-white/40 to-red-500/35',
    shadow: 'hover:shadow-[0_14px_34px_rgba(255,255,255,0.15)]'
  }
];

const AnimatedCar = ({
  laneClass,
  duration,
  delay,
  reverse = false,
  tint = '#f8fafc',
  scale = 1
}) => (
  <motion.div
    className={`pointer-events-none absolute ${laneClass}`}
    initial={{ x: reverse ? '115%' : '-35%', opacity: 0 }}
    animate={{ x: reverse ? '-40%' : '115%', opacity: [0, 1, 1, 0] }}
    transition={{
      x: { duration, repeat: Infinity, ease: 'linear', delay },
      opacity: { duration, repeat: Infinity, ease: 'linear', delay, times: [0, 0.08, 0.9, 1] }
    }}
  >
    <div className="relative" style={{ color: tint, transform: `scale(${scale})` }}>
      <motion.div
        className={`absolute top-1/2 h-[2px] w-24 -translate-y-1/2 rounded-full blur-[1px] ${
          reverse
            ? 'right-full mr-1 bg-gradient-to-l from-white/80 via-red-500/60 to-transparent'
            : 'left-full ml-1 bg-gradient-to-r from-white/80 via-cyan-400/60 to-transparent'
        }`}
        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1.1, 0.8] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <CarSilhouette className="h-10 w-auto sm:h-12 drop-shadow-[0_0_18px_rgba(255,255,255,0.24)]" />
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090a0c] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 12%, rgba(239,68,68,0.45), transparent 36%), radial-gradient(circle at 78% 24%, rgba(59,130,246,0.3), transparent 34%), radial-gradient(circle at 50% 78%, rgba(185,28,28,0.24), transparent 38%)'
          }}
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(116deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 34px)',
            backgroundSize: '240px 240px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '280px 340px'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-[42vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
        <motion.div
          className="absolute bottom-[-12%] left-1/2 h-[36vh] w-[150%] -translate-x-1/2"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(255,255,255,0.06), transparent 64%), repeating-linear-gradient(90deg, rgba(255,255,255,0) 0 70px, rgba(255,255,255,0.12) 70px 72px)',
            clipPath: 'polygon(13% 100%, 87% 100%, 63% 0%, 37% 0%)'
          }}
          animate={{ y: [0, 14, 0], opacity: [0.34, 0.52, 0.34] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <AnimatedCar laneClass="top-[14%]" duration={15} delay={0.3} tint="#f8fafc" />
        <AnimatedCar laneClass="top-[28%]" duration={18} delay={2.4} reverse tint="#f87171" scale={1.08} />
        <AnimatedCar laneClass="top-[42%]" duration={12.5} delay={1.1} tint="#60a5fa" scale={0.9} />
      </div>

      <main className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 pb-14 pt-12 md:pt-16">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-12 w-full flex justify-center"
        >
          <div className="relative w-full max-w-[520px]">
            <motion.div
              aria-hidden
              className="absolute -inset-8 sm:-inset-10 bg-[radial-gradient(circle,rgba(220,38,38,0.42),rgba(127,29,29,0.04)_60%)] blur-3xl"
              animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-red-500/35 bg-gradient-to-br from-[#160b0b] via-[#0c0d10] to-[#070809] p-6 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <motion.div
                aria-hidden
                className="absolute -left-20 top-1/2 h-28 w-44 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-red-400/55 to-transparent blur-lg"
                animate={{ x: [-40, 420, -40], opacity: [0, 0.75, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: 'linear' }}
              />
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(220,38,38,0.22),transparent_45%)]" />
              <img 
                src={lauzLogo}
                alt="LAUZ Logo" 
                className="relative z-10 mx-auto h-48 sm:h-56 md:h-64 w-auto object-contain scale-[1.3] sm:scale-[1.35] md:scale-[1.4] drop-shadow-[0_20px_36px_rgba(239,68,68,0.45)]"
              />
            </div>

            <div aria-hidden className="mx-auto mt-3 h-5 w-44 rounded-full bg-red-500/40 blur-2xl" />
          </div>
        </motion.div>

        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            LAUZ Smart Automotive
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xs mx-auto">
            Premium Automotive Services & Smart Solutions
          </p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-red-200/90"
          >
            <Gauge className="h-4 w-4 text-red-300" />
            Performance Driven Care
            <Sparkles className="h-3.5 w-3.5 text-blue-200" />
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 backdrop-blur-md">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.45 }}
            className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-red-300/75"
          >
            Official Channels
          </motion.p>

          <div className="space-y-3">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden flex items-center justify-between rounded-2xl border ${link.borderColor} bg-[#101214]/85 px-4 py-4 sm:px-5 sm:py-[18px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#171a1f] ${link.shadow}`}
            >
              <span aria-hidden className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${link.accent}`} />
              <span aria-hidden className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${link.accent}`} />

              <div className="flex items-center gap-4">
                <div className="relative z-10 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  {link.icon}
                </div>
                <span className="relative z-10 font-semibold text-lg">{link.name}</span>
              </div>
              <ChevronRight className="relative z-10 h-5 w-5 opacity-0 transition-all transform translate-x-[-10px] group-hover:translate-x-0 group-hover:opacity-100" />
            </motion.a>
          ))}
          </div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">
            <div className="h-[1px] w-8 bg-gray-800" />
            <span>Smart Automotive Service</span>
            <div className="h-[1px] w-8 bg-gray-800" />
          </div>
          <p className="text-gray-600 text-[10px]">
            &copy; {new Date().getFullYear()} LAUZ Company. All rights reserved.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
