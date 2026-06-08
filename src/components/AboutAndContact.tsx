import React, { useState } from "react";
import { STU_INFO, SKILLS_LIST, SERVICES_LIST } from "../data";
import { translations } from "../translations";
import { 
  Mail, Landmark, Award, ArrowUpRight, CheckCircle, Sparkles, 
  Download, Phone, Compass, Layers, Bookmark, FileText 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AboutAndContactProps {
  isDark: boolean;
  lang?: "AL" | "EN";
}

export default function AboutAndContact({ isDark, lang = "AL" }: AboutAndContactProps) {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryMail, setInquiryMail] = useState("");
  const [inquiryType, setInquiryType] = useState("Logo Design");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Resume status simulation state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryMail) return;

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setInquiryName("");
    setInquiryMail("");
    setInquiryType("Logo Design");
    setInquiryMsg("");
    setIsSubmitted(false);
  };

  const handleDownloadResume = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      // Simulate file download trigger
      const mockContent = `ADELINA LUTOLLI - GRAPHIC DESIGNER RESUME\n\nEmail: ${STU_INFO.email}\nPhone: ${STU_INFO.phone}\nLocation: ${STU_INFO.location}\n\nEXPERIENCE:\n- Lead Creative Designer at Studio Bloom Zurich\n- Freelance Designer & Video Editor\n- Specialized Training from Tectigon Academy`;
      const blob = new Blob([mockContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Adelina_Lutolli_Graphic_Designer_Resume.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  // Helper function to render correct service icons dynamically
  const renderServiceIcon = (iconName: string) => {
    const iconSize = "w-5 h-5 text-[#FF6584]";
    switch(iconName) {
      case "Compass": return <Compass className={iconSize} />;
      case "Sparkles": return <Sparkles className={iconSize} />;
      case "Layers": return <Layers className={iconSize} />;
      case "FileText": return <FileText className={iconSize} />;
      case "Bookmark": return <Bookmark className={iconSize} />;
      default: return <Sparkles className={iconSize} />;
    }
  };

  return (
    <div className="space-y-24">
      
      {/* ================= ABOUT ME SECTION ================= */}
      <section id="about" className="scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Profile Photo - Kush jam unë (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className={`relative aspect-[3/4] overflow-hidden rounded-3xl border p-2 transition-all duration-300 ${
              isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200"
            }`}>
              {/* Profile Image container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-100/10">
                <img
                  src="/fotoeprofilit.png"
                  alt="Adelina Lutolli Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-102"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('profile-placeholder');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback stylized profile illustration if image has loading error */}
                <div id="profile-placeholder" className="hidden absolute inset-0 flex-col items-center justify-center text-center p-6 bg-gradient-to-tr from-[#1E2022] to-[#121215]">
                  <Compass className="w-10 h-10 text-[#FF6584] animate-spin-slow mb-3" />
                  <span className="font-sans text-sm font-bold uppercase tracking-widest text-[#FF6584]">ADELINA</span>
                  <span className="font-mono text-[9px] text-zinc-400 mt-1 uppercase tracking-widest">{lang === "AL" ? "KUSH JAM UNË" : "WHO I AM"}</span>
                </div>

                {/* Aesthetic label badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/80 backdrop-blur border border-white/5 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[11px] font-bold text-white uppercase block leading-none">{STU_INFO.name}</span>
                    <span className="font-mono text-[8.5px] text-[#FF6584] uppercase tracking-widest mt-1.5 block">{lang === "AL" ? "Kush jam unë" : "Who I am"}</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#FF8EAD]" />
                </div>
              </div>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 text-center font-bold">
              {STU_INFO.location} • {lang === "AL" ? STU_INFO.role_al : STU_INFO.role}
            </p>
          </div>

          {/* Bio text (md:col-span-5) */}
          <div className="md:col-span-5 space-y-8">
            {/* About Title & Subtitle */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{t.aboutSub}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase font-sans">
                {t.aboutTitle}
              </h2>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                {lang === "AL" ? STU_INFO.role_al : STU_INFO.role}
              </h3>
            </div>

            {/* Art Bio Paragraphs */}
            <div className={`text-sm leading-relaxed font-sans space-y-4 ${
              isDark ? "text-zinc-300" : "text-zinc-650"
            }`}>
              {(lang === "AL" ? STU_INFO.bio_al : STU_INFO.bio).split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 border-t border-zinc-100/10">
                <p className="text-2xs font-mono tracking-wider uppercase text-[#FF6584] font-bold">
                  📍 {STU_INFO.location}
                </p>
                <p className="text-2xs font-mono tracking-wider uppercase text-zinc-400 font-bold">
                  📞 {STU_INFO.phone}
                </p>
                <p className="text-2xs font-mono tracking-wider uppercase text-zinc-400 font-bold">
                  ✉️ {STU_INFO.email}
                </p>
              </div>
            </div>

            {/* Resume Download Trigger */}
            <div className="pt-2">
              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#FF6584] hover:bg-white text-white hover:text-[#FF6584] border-2 border-[#FF6584] font-mono text-[10px] uppercase tracking-wider font-bold rounded-2xl shadow-sm transition duration-300 cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>
                  {isDownloading 
                    ? t.compilingPdf 
                    : downloadSuccess 
                      ? t.downloadSuccess 
                      : t.downloadResume}
                </span>
              </button>
            </div>
          </div>

          {/* Credentials list (md:col-span-3) */}
          <div className="md:col-span-3 space-y-6">
            {/* Credentials Grid */}
            <div className={`border p-6 rounded-3xl space-y-4 ${
              isDark ? "bg-[#161619] border-zinc-805" : "bg-zinc-50/50 border-zinc-100"
            }`}>
              <h4 className="font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold border-b pb-2 flex items-center space-x-2 border-zinc-100/10">
                <Landmark className="w-3.5 h-3.5" />
                <span>{t.credentials}</span>
              </h4>
              <div className="grid grid-cols-1 gap-4 font-sans text-xs">
                {STU_INFO.credentials.map((cred, i) => (
                  <div key={i} className="space-y-0.5">
                    <span className="font-mono text-[9px] text-[#5C7075] uppercase tracking-wider font-bold block">
                      {lang === "AL" ? cred.label : (cred.label_en || cred.label)}
                    </span>
                    <span className={`font-medium block ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
                      {lang === "AL" ? cred.value : (cred.value_en || cred.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Principles Grid */}
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center space-x-2 border-b pb-2 font-bold border-zinc-100/10">
                <Award className="w-3.5 h-3.5 text-zinc-400" />
                <span>{t.designPhilosophy}</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {STU_INFO.principles.map((pr, i) => (
                  <div key={i} className="space-y-1 pl-4 border-l-2 border-[#FF6584] transition-all duration-300">
                    <h6 className={`font-sans font-bold text-xs uppercase tracking-tight ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}>
                      {lang === "AL" ? pr.title : pr.title_en}
                    </h6>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                      {lang === "AL" ? pr.desc : pr.desc_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
            <Award className="w-4 h-4" />
            <span>{t.skillsSub}</span>
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            {t.skillsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_LIST.map((sk) => (
            <div 
              key={sk.name}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200 shadow-2xs"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] mb-3">
                <span className="text-zinc-400 uppercase font-bold text-[9px]">{sk.category}</span>
                <span className="text-[#FF6584] font-bold">{sk.percent}%</span>
              </div>
              <h4 className={`text-sm font-bold uppercase font-sans mb-3 ${isDark ? "text-white" : "text-zinc-900"}`}>
                {sk.name}
              </h4>
              
              {/* Progress Slider Animation */}
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sk.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#FF6584] to-[#FF8EAD]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACADEMY CERTIFICATE SECTION ================= */}
      <section id="certification" className="scroll-mt-24 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>{t.certSub}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase font-sans">
                {t.certTitle}
              </h2>
              <p className={`text-xs leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-650"}`}>
                {t.certDesc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className={`p-4 rounded-3xl border transition-all duration-300 ${
              isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200"
            }`}>
              {/* Certificate image display frame with zoom trigger */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-100/10 shadow-sm flex items-center justify-center group/cert cursor-zoom-in">
                <img
                  src="/Certifikata.jpg"
                  alt="Tectigon Academy Course Certification"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover/cert:scale-102"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('cert-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Fallback description in case of load fails */}
                <div id="cert-fallback" className="hidden absolute inset-0 flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-[#1C1E22] to-[#121215]">
                  <Award className="w-12 h-12 text-[#FF6584] mb-3" />
                  <h4 className="font-sans text-base font-bold text-white uppercase tracking-wider">TECTIGON ACADEMY CERTIFIED</h4>
                  <p className="font-mono text-[9px] text-[#FF6584] uppercase tracking-widest mt-1">Graphic Design & Digital Marketing Specialist</p>
                </div>

                {/* Interactive glass overlay details */}
                <div className="absolute inset-0 bg-zinc-950/20 group-hover/cert:bg-zinc-950/5 transition duration-300 pointer-events-none" />
                
                <div className="absolute top-4 right-4 z-10 bg-zinc-950/70 backdrop-blur px-3 py-1.5 rounded-xl border border-white/5 flex items-center space-x-1.5 font-mono text-[8px] text-white uppercase font-bold tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#FF6584] img-certified-dot animate-ping" />
                  <span>{t.verifiedGraduate}</span>
                </div>
              </div>
              
              {/* Optional direct download view action */}
              <div className="pt-4 flex justify-between items-center font-mono text-[9.5px] font-bold tracking-widest text-[#FF6584]">
                <span>{t.issuedByTectigon}</span>
                <a 
                  href="/Certifikata.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline flex items-center space-x-1 uppercase"
                >
                  <span>{t.viewFullscreen}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="scroll-mt-24 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{t.servicesSub}</span>
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            {t.servicesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((ser, i) => (
            <div 
              key={i}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200 shadow-sm"
              }`}
            >
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                  isDark ? "bg-zinc-800/80" : "bg-zinc-50"
                }`}>
                  {renderServiceIcon(ser.iconName)}
                </div>
                <h4 className={`font-sans text-base font-bold uppercase tracking-tight ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}>
                  {lang === "AL" ? ser.title : ser.title_en}
                </h4>
                <p className={`text-[12px] leading-relaxed ${
                  isDark ? "text-zinc-400" : "text-zinc-650"
                }`}>
                  {lang === "AL" ? ser.desc : ser.desc_en}
                </p>
              </div>

              <div className="pt-6 font-mono text-[9px] uppercase tracking-widest text-[#FF6584] font-bold">
                {t.availableNow}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ================= CONTACT SECTION & FORM ================= */}
      <section id="contact" className="scroll-mt-24 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
                <Mail className="w-3.5 h-3.5" />
                <span>{t.contactSub}</span>
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold tracking-tight uppercase ${
                isDark ? "text-white" : "text-zinc-900"
              }`}>
                {t.contactTitle}
              </h2>
              <p className={`text-xs leading-relaxed max-w-sm ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                {t.contactDesc}
              </p>
            </div>

            {/* Direct contact credentials details cards */}
            <div className="space-y-3 font-mono text-[10px] uppercase tracking-wider">
              <div className={`p-4 border rounded-2xl flex items-center space-x-3.5 ${isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200"}`}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF6584]/10 text-[#FF6584] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 block font-bold">{t.directEmail}</span>
                  <a href={`mailto:${STU_INFO.email}`} className={`font-bold hover:text-[#FF6584] transition ${isDark ? "text-white" : "text-zinc-805"}`}>{STU_INFO.email}</a>
                </div>
              </div>

              <div className={`p-4 border rounded-2xl flex items-center space-x-3.5 ${isDark ? "bg-[#161619] border-zinc-800" : "bg-white border-zinc-200"}`}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF6584]/10 text-[#FF6584] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 block font-bold">{t.callChannels}</span>
                  <a href={`tel:${STU_INFO.phone}`} className={`font-bold hover:text-[#FF6584] transition ${isDark ? "text-white" : "text-zinc-805"}`}>{STU_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div id="enquiry-card" className={`border p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-300 ${
              isDark 
                ? "bg-[#161619] border-zinc-800 shadow-[4px_4px_0px_rgba(255,101,132,0.02)]" 
                : "bg-white border-zinc-200 shadow-[4px_4px_0px_rgba(255,101,132,0.04)]"
            }`}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                  >
                    <CheckCircle className="w-12 h-12 text-[#FF6584] animate-bounce" />
                    <div className="space-y-1">
                      <h5 className="font-sans text-lg font-bold uppercase tracking-tight text-[#FF6584]">
                        {t.inquiryCompiled}
                      </h5>
                      <p className={`font-mono text-[10px] max-w-[280px] mx-auto leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                        {lang === "AL" 
                          ? `Faleminderit, ${inquiryName}! Adelina do ta rishikojë kërkesën tuaj dhe do të ju përgjigjet në email-in ${inquiryMail} së shpejti.`
                          : `Thank you, ${inquiryName}! Adelina will review and follow up at ${inquiryMail} in 12-24 business cycles.`}
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className={`px-4 py-2 font-mono text-[10px] uppercase tracking-wider rounded-full font-bold transition ${
                        isDark ? "bg-zinc-800 hover:bg-zinc-700 text-white" : "bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
                      }`}
                    >
                      {t.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-405 uppercase font-bold block">{t.inquiryName}</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="E.g. Dr. Müller"
                        className={`w-full border rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-[#FF6584] ${
                          isDark 
                            ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500" 
                            : "bg-zinc-50 border-zinc-205 text-zinc-900 placeholder-zinc-400"
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-405 uppercase font-bold block">{t.inquiryMail}</label>
                      <input
                        id="contact-mail"
                        type="email"
                        required
                        value={inquiryMail}
                        onChange={(e) => setInquiryMail(e.target.value)}
                        placeholder="E.g. name@agency.com"
                        className={`w-full border rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-[#FF6584] ${
                          isDark 
                            ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500" 
                            : "bg-zinc-50 border-zinc-205 text-zinc-900 placeholder-zinc-400"
                        }`}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-405 uppercase font-bold block">{t.serviceType}</label>
                      <select
                        id="contact-type"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className={`w-full border rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-[#FF6584] font-medium ${
                          isDark 
                            ? "bg-zinc-900 border-zinc-800 text-zinc-300" 
                            : "bg-zinc-50 border-zinc-205 text-zinc-700"
                        }`}
                      >
                        <option value="Logo Design">Logo Design</option>
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Social Media Design">Social Media Design</option>
                        <option value="Print Design">Print & Poster Layout</option>
                        <option value="Marketing Materials">Marketing Materials</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[10px] text-zinc-405 uppercase font-bold block">{t.notes}</label>
                      <textarea
                        id="contact-msg"
                        rows={4}
                        value={inquiryMsg}
                        onChange={(e) => setInquiryMsg(e.target.value)}
                        placeholder={t.notesPlaceholder}
                        className={`w-full border rounded-xl px-4 py-2.5 transition focus:outline-none focus:border-[#FF6584] resize-none ${
                          isDark 
                            ? "bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500" 
                            : "bg-zinc-50 border-zinc-205 text-zinc-900 placeholder-zinc-400"
                        }`}
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      id="submit-inquiry"
                      type="submit"
                      className="w-full py-3 bg-[#FF6584] hover:bg-white border-2 border-[#FF6584] text-white hover:text-[#FF6584] font-bold font-mono text-[10px] uppercase tracking-wider rounded-2xl shadow-sm transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.submitButton}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
