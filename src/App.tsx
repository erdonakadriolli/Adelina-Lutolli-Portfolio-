import React, { useState, useEffect } from "react";
import PortfolioGrid from "./components/PortfolioGrid";
import AboutAndContact from "./components/AboutAndContact";
import { STU_INFO } from "./data";
import { translations } from "./translations";
import { 
  Instagram, Facebook, Linkedin, Twitter, Mail, ArrowUp, 
  Sun, Moon, ExternalLink, Sparkles, Sliders 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [lang, setLang] = useState<"AL" | "EN">("AL");

  const t = translations[lang];

  // Sync state with HTML document root for standard accessibility
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div id="home" className={`min-h-screen transition-colors duration-300 selection:bg-[#FF6584] selection:text-white font-sans scroll-smooth ${
      isDark ? "bg-[#0d0d0f] text-zinc-100" : "bg-[#FCFAF7] text-zinc-900"
    }`}>
      
      {/* ================= 1. HEADER & TOP COUPLING ================= */}
      <header className={`sticky top-0 z-40 transition-all duration-300 backdrop-blur-md border-b ${
        isDark 
          ? "bg-[#0d0d0f]/80 border-zinc-800" 
          : "bg-[#FCFAF7]/80 border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Handwritten aesthetic script logo */}
          <a href="#home" className="font-script text-[32px] lowercase tracking-tight leading-none italic font-bold shrink-0 cursor-pointer hover:opacity-80 select-none text-[#FF6584]">
            june
          </a>

          {/* Centered navigation items menu (Fully responsive, wraps elegantly on mobile) */}
          <nav className="hidden md:flex items-center space-x-6 font-mono text-[9px] tracking-widest uppercase font-bold text-zinc-500">
            <a href="#home" className="hover:text-[#FF6584] transition duration-200">{t.home}</a>
            <a href="#work" className="hover:text-[#FF6584] transition duration-205">{t.work}</a>
            <a href="#about" className="hover:text-[#FF6584] transition duration-200">{t.about}</a>
            <a href="#skills" className="hover:text-[#FF6584] transition duration-200">{t.skills}</a>
            <a href="#certification" className="hover:text-[#FF6584] transition duration-200">{t.certification}</a>
            <a href="#services" className="hover:text-[#FF6584] transition duration-200">{t.services}</a>
            <a href="#contact" className="hover:text-[#FF6584] transition duration-200">{t.contact}</a>
          </nav>

          {/* Right side tools: Language select, Dark Mode toggle & Socials */}
          <div className="flex items-center space-x-3.5">
            {/* Language switch panel */}
            <div className={`flex items-center space-x-0.5 p-0.5 rounded-xl border font-mono text-[8.5px] font-bold transition-all duration-300 ${
              isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
            }`}>
              <button
                onClick={() => setLang("AL")}
                className={`px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                  lang === "AL"
                    ? "bg-[#FF6584] text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-650"
                }`}
                title="Shqip / AL"
              >
                AL
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                  lang === "EN"
                    ? "bg-[#FF6584] text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-650"
                }`}
                title="English / EN"
              >
                EN
              </button>
            </div>

            {/* Dark & Light mode support requested */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
                isDark 
                  ? "bg-zinc-900 border-zinc-800 text-[#FFD2DB] hover:bg-zinc-850" 
                  : "bg-white border-zinc-200 text-zinc-650 hover:bg-zinc-50"
              }`}
              title={isDark ? "Switch to Light Frame" : "Switch to Dark Cosmic mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick action button for easy conversion */}
            <a
              href="#contact"
              className="font-mono text-[9.5px] px-4 py-2 border rounded-xl font-bold bg-[#FF8EAD]/10 text-[#FF6584] border-[#FF8EAD]/20 hover:bg-[#FF6584] hover:text-white hover:border-[#FF6584] transition duration-300"
            >
              {t.hireMe}
            </a>
          </div>
        </div>
      </header>

      {/* ================= 2. HERO SECTION ================= */}
      <section className={`relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b ${
        isDark ? "bg-[#111113]/40 border-zinc-850" : "bg-[#5C7075] text-white border-zinc-200"
      }`}>
        {/* Watercolor decorative grid */}
        <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/fist_tattoo_blue_1780921227870.png')] bg-cover bg-center pointer-events-none mix-blend-overlay" />
        <div className={`absolute inset-0 pointer-events-none ${
          isDark 
            ? "bg-gradient-to-b from-[#0d0d0f]/20 to-[#0d0d0f]/80" 
            : "bg-gradient-to-b from-transparent to-[#5C7075]/20"
        }`} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-1.5"
          >
            <span className={`h-[1px] w-8 ${isDark ? "bg-zinc-800": "bg-white/40"}`} />
            <span className="font-mono text-[10.5px] tracking-widest text-[#FF8EAD] font-bold uppercase">
              {t.portfolioMatrix}
            </span>
            <span className={`h-[1px] w-8 ${isDark ? "bg-zinc-800": "bg-white/40"}`} />
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className={`text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-none font-sans ${
                isDark ? "text-white" : "text-white"
              }`}
            >
              {STU_INFO.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`font-mono text-xs uppercase tracking-widest font-bold ${
                isDark ? "text-[#FF6584]" : "text-[#FF8EAD]"
              }`}
            >
              {lang === "AL" ? STU_INFO.role_al : STU_INFO.role}
            </motion.p>
          </div>

          <div className="w-12 h-1 bg-[#FF6584] mx-auto rounded-full" />

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${
              isDark ? "text-zinc-300" : "text-zinc-100"
            }`}
          >
            {lang === "AL" ? STU_INFO.tagline_al : STU_INFO.tagline}
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#work"
              className="px-6 py-3 bg-[#FF6584] hover:bg-[#FF8EAD] text-white border-2 border-[#FF6584] hover:border-[#FF8EAD] font-mono text-[10px] uppercase tracking-wider font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {t.viewPortfolio}
            </a>
            
            <a
              href="#contact"
              className={`px-6 py-3 border-2 font-mono text-[10px] uppercase tracking-wider font-bold rounded-2xl transition-all duration-300 cursor-pointer ${
                isDark
                  ? "border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  : "border-white bg-white/10 text-white hover:bg-white hover:text-[#5C7075]"
              }`}
            >
              {t.contactMe}
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= 3. PORTFOLIO MATRIX ================= */}
      <main id="work" className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-12 scroll-mt-20">
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 ${
          isDark ? "border-zinc-850" : "border-zinc-200"
        }`}>
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#FF6584] font-bold">
              {t.workSub}
            </h2>
            <h3 className={`text-2xl md:text-3xl font-extrabold uppercase tracking-tight font-sans mt-1.5 ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              {t.workTitle}
            </h3>
          </div>
          <p className="text-[10.5px] font-mono text-zinc-450 uppercase mt-3 md:mt-0 max-w-[320px] font-bold">
            {t.workDesc}
          </p>
        </div>

        {/* Portfolio gallery view components */}
        <PortfolioGrid isDark={isDark} lang={lang} />
      </main>

      {/* ================= 4. ABOUT, SKILLS & SERVICES COUPLING ================= */}
      <div className={`border-t transition-colors duration-300 ${
        isDark ? "bg-[#111114]/50 border-zinc-850" : "bg-zinc-50/20 border-zinc-200"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <AboutAndContact isDark={isDark} lang={lang} />
        </div>
      </div>

      {/* ================= 5. FOOTER & SOCIAL COUPLING ================= */}
      <footer className={`border-t font-mono text-[9px] uppercase tracking-widest font-bold py-16 ${
        isDark ? "bg-[#0d0d0f] border-zinc-850 text-zinc-400" : "bg-white border-zinc-200 text-[#5C7075]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
          
          {/* Scroll design link anchor */}
          <a href="#home" className="flex items-center gap-1.5 text-zinc-405 hover:text-[#FF6584] transition-colors duration-200 uppercase tracking-widest cursor-pointer">
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6584]" />
            <span>{t.backToTop}</span>
          </a>

          {/* Social icons matrix */}
          <div className="flex items-center justify-center space-x-6 text-zinc-405">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6584] transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6584] transition-colors duration-200">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6584] transition-colors duration-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6584] transition-colors duration-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={`mailto:${STU_INFO.email}`} className="hover:text-[#FF6584] transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 text-zinc-405 font-mono text-[9px] font-bold tracking-widest opacity-80 space-y-1">
            <p>{t.designDirected}</p>
            <p className="text-[#FF6584] text-[8px] font-extrabold">{t.allRights}</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
