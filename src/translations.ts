export interface TranslationDict {
  // Navigation & General
  home: string;
  work: string;
  about: string;
  skills: string;
  certification: string;
  services: string;
  contact: string;
  hireMe: string;
  viewPortfolio: string;
  contactMe: string;
  backToTop: string;
  designDirected: string;
  allRights: string;
  verifiedGraduate: string;
  issuedByTectigon: string;
  availableNow: string;

  // Hero Section
  portfolioMatrix: string;

  // Work Section
  workSub: string;
  workTitle: string;
  workDesc: string;
  viewImage: string;
  viewVector: string;
  originalPdf: string;
  viti: string;
  klienti: string;
  ngjyrat: string;
  specifikimet: string;
  close: string;

  // About Section
  aboutSub: string;
  aboutTitle: string;
  aboutRole: string;
  location: string;
  phone: string;
  email: string;
  downloadResume: string;
  compilingPdf: string;
  downloadSuccess: string;
  credentials: string;
  designPhilosophy: string;

  // Skills Section
  skillsSub: string;
  skillsTitle: string;

  // Certificate Section
  certSub: string;
  certTitle: string;
  certDesc: string;
  viewFullscreen: string;

  // Services Section
  servicesSub: string;
  servicesTitle: string;

  // Contact Section
  contactSub: string;
  contactTitle: string;
  contactDesc: string;
  directEmail: string;
  callChannels: string;
  inquiryName: string;
  inquiryMail: string;
  serviceType: string;
  notes: string;
  notesPlaceholder: string;
  submitButton: string;
  submitting: string;
  inquiryCompiled: string;
  thankYou: string;
  sendAnother: string;
}

export const translations: Record<"AL" | "EN", TranslationDict> = {
  AL: {
    home: "KREU",
    work: "PUNËT",
    about: "RRETH MEJE",
    skills: "AFTËSITË",
    certification: "CERTIFIKATA",
    services: "SHËRBIMET",
    contact: "KONTAKTI",
    hireMe: "MË PUNËSO",
    viewPortfolio: "Shiko Portfolion",
    contactMe: "Më Kontakto",
    backToTop: "Kthehu lart",
    designDirected: "DIZAJNI NGA ADELINA LUTOLLI • STUDIUESE NË AKADEMINË TECTIGON",
    allRights: "© 2026 TË GJITHA SKICAT DHE DIZAJNET E MBROJTURA",
    verifiedGraduate: "I diplomuar i verifikuar",
    issuedByTectigon: "LËSHUAR NGA AKADEMIA TECTIGON",
    availableNow: "E disponueshme tani • Kontakto",

    portfolioMatrix: "MATRICA E PORTFOLIOS KRIJUESE",

    workSub: "Koleksioni / Responsive Gallery",
    workTitle: "Kryeveprat Vizuale të Përzgjedhura",
    workDesc: "Zgjidhni një projekt më poshtë për të parë fletët e plota tipografike, paletat e ngjyrave dhe specifikimet digjitale.",
    viewImage: "🖼️ IMAZHI / SCREENSHOT",
    viewVector: "📐 VEKTORI / DETAJET",
    originalPdf: "PDF ORIGJINALE ↗",
    viti: "VITI",
    klienti: "KLIENTI",
    ngjyrat: "PALETA E NGJYRAVE",
    specifikimet: "SPECIFIKIMET TEKNIKE",
    close: "Mbyll",

    aboutSub: "Rreth Meje / About Me",
    aboutTitle: "Rreth Meje",
    aboutRole: "Dizajnere Grafike & Storyteller Digjitale",
    location: "VENDNDODHJA",
    phone: "NUMRI I TELEFONIT",
    email: "ADRESA E EMAIL-IT",
    downloadResume: "SHKARKO CV / BIOGRAFINË",
    compilingPdf: "Duke përpiluar PDF-në...",
    downloadSuccess: "U shkarkua me sukses!",
    credentials: "KUALIFIKIMET",
    designPhilosophy: "FILOZOFIA E DIZAJNIT",

    skillsSub: "Aftësitë / Core Skills",
    skillsTitle: "Matrica e Softuerëve & Disiplinat",

    certSub: "Trajnimi / Tectigon Academy",
    certTitle: "Certifikim Profesional",
    certDesc: "Unë kam përfunduar me sukses trajnimin specializues në Dizajn Grafik & Marketing Digjital në Akademinë Tectigon. Ky program rigoroz mbulon zhvillimin prej fillimit të brendit, teoritë e ngjyrave, parametrat e kompozimit tipografik, mjetet e vizatimit profesional vektorial, dhe praktikat më të mira të tregut digjital.",
    viewFullscreen: "Hap në Tab të Ri / View Fullscreen",

    servicesSub: "Shërbimet / Services",
    servicesTitle: "Specializimet e Prodhimit të Dizajnit",

    contactSub: "Na Kontaktoni / Direct Connection",
    contactTitle: "Fillo një Projekt",
    contactDesc: "Gati për të ngritur fushatat tuaja të marketingut digjital, materialet e brendingut apo prodhimin e videove? Na shkruani parametrat tuaj direkt.",
    directEmail: "EMAIL DIREKT",
    callChannels: "TELEFONI DIRECT",
    inquiryName: "Emri Juaj / Emri i Brendit",
    inquiryMail: "Posta Digjitale (Email)",
    serviceType: "Lloji i Shërbimit të Kërkuar",
    notes: "Specifikimet & Shënimet e Projektit",
    notesPlaceholder: "Përshkruani parametrat tuaj të dizajnit, ngjyrat apo idetë e përgjithshme...",
    submitButton: "DËRGO KËRKESËN E PROJEKTIT",
    submitting: "Duke dërguar...",
    inquiryCompiled: "Kërkesa u Dërgua",
    thankYou: "Faleminderit! Adelina do ta rishikojë kërkesën tuaj dhe do të ju kontaktojë së shpejti.",
    sendAnother: "Dërgo Kërkesë Tjetër"
  },
  EN: {
    home: "HOME",
    work: "WORK",
    about: "ABOUT",
    skills: "SKILLS",
    certification: "CERTIFICATE",
    services: "SERVICES",
    contact: "CONTACT",
    hireMe: "HIRE ME",
    viewPortfolio: "View Portfolio",
    contactMe: "Contact Me",
    backToTop: "Back to Top",
    designDirected: "DESIGN DIRECTED BY ADELINA LUTOLLI • STUDIED AT TECTIGON ACADEMY",
    allRights: "© 2026 ALL BLUEPRINTS SECURED",
    verifiedGraduate: "Verified Graduate",
    issuedByTectigon: "ISSUED BY TECTIGON ACADEMY",
    availableNow: "Available now • Contact",

    portfolioMatrix: "CREATIVE PORTFOLIO MATRIX",

    workSub: "Koleksioni / Responsive Gallery",
    workTitle: "Featured Visual Masterpieces",
    workDesc: "Select a project layout below to view full typography sheets, custom color palettes, and digital specifications.",
    viewImage: "🖼️ IMAGE / SCREENSHOT",
    viewVector: "📐 VECTOR / DETAILS",
    originalPdf: "ORIGINAL PDF ↗",
    viti: "YEAR",
    klienti: "CLIENT",
    ngjyrat: "COLOR PALETTE",
    specifikimet: "TECHNICAL SPECS",
    close: "Close",

    aboutSub: "Rreth Meje / About Me",
    aboutTitle: "About Me",
    aboutRole: "Graphic Designer & Digital Storyteller",
    location: "LOCATION",
    phone: "PHONE NUMBER",
    email: "EMAIL ADDRESS",
    downloadResume: "DOWNLOAD CV / RESUME",
    compilingPdf: "Compiling PDF...",
    downloadSuccess: "Downloaded Successfully!",
    credentials: "CREDENTIALS",
    designPhilosophy: "DESIGN PHILOSOPHY",

    skillsSub: "Aftësitë / Core Skills",
    skillsTitle: "Software Matrix & Disciplines",

    certSub: "Trajnimi / Tectigon Academy",
    certTitle: "Professional Certification",
    certDesc: "I have successfully completed highly specialized training in Graphic Design & Digital Marketing at Tectigon Academy, refining strict visual guidelines, typographic compositions, and vector workflows.",
    viewFullscreen: "Hap në Tab të Ri / View Fullscreen",

    servicesSub: "Shërbimet / Services",
    servicesTitle: "Design Production Specialties",

    contactSub: "Na Kontaktoni / Direct Connection",
    contactTitle: "Start A Project",
    contactDesc: "Ready to elevate your digital marketing, branding materials, or video content pipeline? Forward your parameters directly to Adelina's workspace.",
    directEmail: "DIRECT EMAIL",
    callChannels: "CALL CHANNELS",
    inquiryName: "Inquirer / Brand Name",
    inquiryMail: "Digital Mailbox (Email)",
    serviceType: "Conception Service Type",
    notes: "Conception Specifications & Notes",
    notesPlaceholder: "Describe your design parameters, gold foil, custom branding layout thoughts...",
    submitButton: "COMPILE INQUIRY BLUEPRINT",
    submitting: "Compiling...",
    inquiryCompiled: "Inquiry Compiled",
    thankYou: "Thank you! Adelina will review and follow up in 12-24 business cycles.",
    sendAnother: "Send Another Blueprint"
  }
};
