import React, { useState } from "react";
import { PortfolioItemType } from "../types";
import { PORTFOLIO_PROJECTS } from "../data";
import { translations } from "../translations";
import { X, FileText, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioGridProps {
  isDark: boolean;
  lang?: "AL" | "EN";
}

export default function PortfolioGrid({ isDark, lang = "AL" }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const t = translations[lang];

  const handleSelectItem = (item: PortfolioItemType) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
  };

  // Requested categories
  const categoriesList = [
    "All",
    "Logo Design",
    "Branding",
    "Social Media Design",
    "Posters & Flyers",
    "Business Cards",
    "Packaging Design"
  ];

  // Map category internally or visually
  const getCategoryLabel = (cat: string) => {
    if (lang === "EN") return cat;
    switch(cat) {
      case "All": return "Të Gjitha";
      case "Logo Design": return "Dizajn i Logos";
      case "Branding": return "Brendimi / Identiteti";
      case "Social Media Design": return "Rrjetet Sociale";
      case "Posters & Flyers": return "Postera & Fletëpalosje";
      case "Business Cards": return "Kartëvizita";
      case "Packaging Design": return "Dizajni i Paketimit";
      default: return cat;
    }
  };

  const translateSpecLabel = (lbl: string) => {
    if (lang === "EN") return lbl;
    switch(lbl) {
      case "Software Tool": return "Softueri i përdorur";
      case "Design Method": return "Metoda e dizajnit";
      case "Target Audience": return "Publiku i synuar";
      case "Grid Alignment": return "Rregullimi i rrjetës";
      case "Drafting Style": return "Stili i vizatimit";
      case "Grid Formula": return "Formula e rrjetës";
      case "Export Quality": return "Rezolucioni i produktit";
      case "Composition": return "Kompozimi";
      case "Typography Mode": return "Kombinimi tipografik";
      case "Layout Spec": return "Madhësia fizike";
      default: return lbl;
    }
  };

  const translateSpecValue = (val: string) => {
    if (lang === "EN") return val;
    if (val.includes("Bespoke Vector Outlines")) return "Vektorë të Personalizuar";
    if (val.includes("E-Commerce & High-End Brands")) return "E-Commerce & Marka Luksoze";
    if (val.includes("Symmetric Proportions")) return "Proporcione Simetrike";
    if (val.includes("Continuous Vector Path")) return "Rrugë Vektoriale e Vazhdueshme";
    if (val.includes("Fibonacci Spiral Ratio")) return "Raporti i Artë i Fibonaccit";
    if (val.includes("Unlimited Scalability")) return "Vektorë të Pakufizuar (.SVG / .PDF)";
    if (val.includes("Editorial Structural Alignment")) return "Rregullim Struktural Editorial";
    if (val.includes("Inter UI paired with JetBrains Mono")) return "Inter UI i kombinuar me JetBrains Mono";
    if (val.includes("Dynamic Grid Book Edition")) return "Libër me Rrjetë Dinamike Vizuale";
    return val;
  };

  // Filter projects
  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  // Function to copy color code
  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  // Safe split helper for description
  const parseDescription = (desc: string) => {
    if (desc.includes("\n\n")) {
      return lang === "AL" ? desc.split("\n\n")[0] : desc.split("\n\n")[1];
    }
    return desc;
  };

  return (
    <div className="space-y-8">
      
      {/* Category filter tabs with beautiful custom styling */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#FF6584] uppercase font-bold">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{lang === "AL" ? "Filtro sipas Kategorisë" : "Filter by Category"}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 border cursor-pointer rounded-full font-bold ${
                  isActive
                    ? "bg-[#FF6584] text-white border-[#FF6584] shadow-md"
                    : isDark
                      ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      : "bg-white border-zinc-200 text-zinc-650 hover:text-zinc-950 hover:border-zinc-400"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Portfolio Grid */}
      {filteredProjects.length === 0 ? (
        <div className={`p-12 text-center rounded-3xl border border-dashed font-mono text-xs ${isDark ? "border-zinc-800 text-zinc-500" : "border-zinc-200 text-zinc-400"}`}>
          {lang === "AL" 
            ? "Nuk u gjet asnjë projekt në këtë kategori aktualisht. Kliko të tjerat!" 
            : "No project archives loaded in this scope yet. Check other dynamic categories!"}
        </div>
      ) : (
        <div 
          id="positivity-portfolio-grid" 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-3xl border transition-colors duration-300 ${
            isDark ? "bg-[#161619] border-zinc-800 shadow-xl" : "bg-white border-zinc-200 shadow-sm"
          }`}
        >
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => handleSelectItem(item)}
              className={`group flex flex-col cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 h-full ${
                isDark ? "bg-[#202024] border-zinc-800/80 hover:border-[#FF6584]" : "bg-zinc-50/70 border-zinc-100 hover:border-[#FF6584]"
              }`}
            >
              {/* Image & Interactive Schematic Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#121215] border-b border-zinc-100/10 shrink-0 flex items-center justify-center animate-fade-in">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-103"
                />
                
                {/* Visual Category overlay pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#FF6584] font-mono text-[8.5px] uppercase px-2.5 py-1 text-white tracking-widest rounded-full font-bold shadow-sm whitespace-nowrap">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>

                {/* Grid Overlay on Hover */}
                <div className="absolute inset-0 bg-[#FF6584]/5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-center z-20">
                  <div className="bg-zinc-950/85 text-[10px] text-white font-mono font-bold px-3 py-1.5 rounded-lg border border-[#FF6584]/20 shadow-lg tracking-wider">
                    {lang === "AL" ? "KLIKO PËR DETALET 🔍" : "VIEW DETAILS 🔍"}
                  </div>
                </div>
              </div>

              {/* Informative description on the card */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h4 className={`font-sans text-base font-bold uppercase tracking-tight group-hover:text-[#FF6584] transition duration-200 ${
                    isDark ? "text-white" : "text-zinc-900"
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-[11.5px] leading-relaxed line-clamp-3 ${
                    isDark ? "text-zinc-400" : "text-zinc-650"
                  }`}>
                    {parseDescription(item.description)}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100/10 mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                  <span>{item.client}</span>
                  <span className="text-[#FF6584] underline group-hover:translate-x-1 transition-transform duration-200 block shrink-0">{lang === "AL" ? "Hap" : "Inspect"} →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Specification Sheet Modal / Drawer Component */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm cursor-zoom-out"
            />

            {/* Spec Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.95 }}
              transition={{ type: "spring", damping: 24, stiffness: 140 }}
              className={`relative w-full max-w-lg md:max-w-xl h-full p-6 md:p-8 flex flex-col justify-between overflow-y-auto z-10 border-l shadow-2xl transition-colors duration-300 ${
                isDark ? "bg-[#161619] border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
              }`}
            >
              <div>
                <div className={`flex items-center justify-between pb-4 mb-6 border-b ${isDark ? "border-zinc-800" : "border-zinc-100"}`}>
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">
                    <FileText className="w-4 h-4 text-[#FF6584]" />
                    <span>{lang === "AL" ? "SPECIFIKAT E DIZAJNIT" : "DRAFTING PARAMETERS"}: {selectedItem.id.toUpperCase()}</span>
                  </div>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer ${
                      isDark ? "bg-zinc-800 hover:bg-zinc-700 text-white" : "bg-zinc-50 hover:bg-zinc-100 text-zinc-900"
                    }`}
                  >
                    <X className="w-4 h-4 stroke-[2.3]" />
                  </button>
                </div>

                {/* Hero preview in detail modal */}
                <div className={`relative aspect-[16/10] overflow-hidden rounded-xl mb-4 border flex flex-col items-center justify-center ${
                  isDark ? "border-zinc-800 bg-[#121215]" : "border-zinc-150 bg-zinc-50"
                }`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`art-${activeImageIndex}-${selectedItem.id}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#121215]"
                    >
                      <img
                        src={selectedItem.images && selectedItem.images.length > 0 ? selectedItem.images[activeImageIndex] : selectedItem.image}
                        alt={`${selectedItem.title} Preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Absolute overlays */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="bg-[#FF6584] font-mono text-[8px] uppercase px-2.5 py-1 text-white tracking-widest rounded-full font-bold shadow-sm">
                      {getCategoryLabel(selectedItem.category)}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-20 bg-zinc-950/80 backdrop-blur px-2.5 py-1 rounded-lg border border-white/5 font-mono text-[8px] text-[#A9D5E4] uppercase tracking-widest font-bold">
                    {t.viti} {selectedItem.year}
                  </div>
                </div>

                {/* Switcher & Multi-image thumbs bar */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    {/* Gallery label */}
                    <div className="font-mono text-[9px] uppercase tracking-wider text-zinc-405 font-bold">
                      {lang === "AL" ? "Galeria e Imazheve" : "Image Gallery"}
                    </div>

                    {/* PDF Original document launcher */}
                    {selectedItem.pdfUrl && (
                      <a
                        href={selectedItem.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-3 py-1.5 bg-[#FF6584]/10 hover:bg-[#FF6584] text-[#FF6584] hover:text-white rounded-xl transition duration-250 border border-[#FF6584]/25 text-[9px] font-mono uppercase tracking-wider font-bold"
                      >
                        <span>{t.originalPdf}</span>
                      </a>
                    )}
                  </div>

                  {/* Dynamic screenshot thumbnails carousel */}
                  {selectedItem.images && selectedItem.images.length > 1 && (
                    <div className="flex items-center space-x-2 overflow-x-auto py-1">
                      {selectedItem.images.map((img, index) => {
                        const isSelected = activeImageIndex === index;
                        return (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition shrink-0 cursor-pointer ${
                              isSelected ? "border-[#FF6584] scale-102" : "border-zinc-800 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Description details */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-2xl font-bold tracking-tight uppercase ${isDark ? "text-white" : "text-zinc-900"}`}>
                      {selectedItem.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mt-2 font-medium ${isDark ? "text-zinc-300" : "text-zinc-650"}`}>
                      {parseDescription(selectedItem.description)}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
