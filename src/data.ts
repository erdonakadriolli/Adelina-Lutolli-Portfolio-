import { PortfolioItemType } from "./types";

export const STU_INFO = {
  name: "Adelina Lutolli",
  role: "Graphic Designer & Digital Storyteller",
  role_al: "Dizajnere Grafike & Storyteller Digjitale",
  location: "Prishtinë, Kosovë",
  location_al: "Prishtinë, Kosovë",
  phone: "+383 49 158 309",
  email: "adelinalutolli@gmail.com",
  tagline: "Combining visual storytelling with language and structure to turn simple concepts into purposeful, engaging, and premium brand experiences.",
  tagline_al: "Bashkimi i tregimit vizual me gjuhën dhe strukturën për të shndërruar konceptet e thjeshta në përvoja të qëllimshme, tërheqëse dhe premium të brendit.",
  resume_url: "#",
  bio: `Hi, I’m Adelina.

I’ve always been drawn to creativity, whether that’s designing visuals, editing videos, or finding new ways to communicate ideas through digital content. What I enjoy most is turning a simple concept into something engaging, meaningful, and visually appealing.

Over the years, I’ve developed skills in Graphic Design, Digital Marketing, and Video Editing through both my studies and hands-on experience, including specialized training at Tectigon Academy. I love exploring new creative tools, experimenting with different styles, and continuously learning how design and media can make a stronger impact.

As someone who studies English Language and Literature, I bring together creativity and communication—combining visual storytelling with a strong understanding of language, audience, and message.

I’m currently focused on growing as a creative professional, building projects that reflect both my skills and personality, and creating work that is not only visually appealing but also purposeful and effective.`,
  bio_al: `Përshëndetje, unë jam Adelina.

Gjithmonë kam qenë e tërhequr nga kreativiteti, qoftë në dizajnimin e pamjeve vizuale, montimin e videove, apo gjetjen e mënyrave të reja për të komunikuar ide përmes përmbajtjes digjitale. Ajo që më pëlqen më shumë është shndërrimi i një koncepti të thjeshtë në diçka tërheqëse, kuptimplote dhe vizualisht të bukur.

Përgjatë viteve, kam zhvilluar aftësi në Dizajn Grafik, Marketing Digjital dhe Editim të Videove përmes studimeve të mia dhe përvojës praktike, duke përfshirë trajnimin e specializuar në Akademinë Tectigon. Më pëlqen të eksploroj mjete të reja krijuese, të eksperimentoj me stile të ndryshme dhe të mësoj vazhdimisht se si dizajni dhe mediat mund të kenë një ndikim më të fortë.

Si studente e Gjuhës dhe Letërsisë Angleze, unë ndërthur kreativitetin dhe komunikimin—duke kombinuar tregimin vizual me një kuptim të jashtëzakonshëm të gjuhës, audiencës dhe mesazhit.

Aktualisht jam e përqendruar në rritjen time si një profesioniste krijuese, duke ndërtuar projekte që pasqyrojnë aftësitë dhe personalitetin tim, dhe duke krijuar punë që nuk janë vetëm tërheqëse vizualisht, por edhe me qëllim të qartë dhe efektive.`,
  credentials: [
    { label: "Sferat e Praktikës", label_en: "Practice Areas", value: "Dizajn i Logove, Identitet i Brendit, Media e Printuar, Përmbajtje Sociale", value_en: "Logo Design, Brand Identity, Print Media, Social Content" },
    { label: "Trajnim i Specializuar", label_en: "Specialized Training", value: "Dizajn Grafik & Marketing Digjital në Akademinë Tectigon", value_en: "Graphic Design & Digital Marketing at Tectigon Academy" },
    { label: "Fokusimi Akademik", label_en: "Academic Focus", value: "Gjuhë dhe Letërsi Angleze - Strukturë & Kompozim", value_en: "English Language and Literature Structure & Composition" },
  ],
  principles: [
    {
      title: "Tregimi Vizual",
      title_en: "Visual Storytelling",
      desc: "Shndërrimi i ideve të papërpunuara në përmbajtje të bukur vizuale me tipografi të pasur dhe paleta ngjyrash të përshtatshme.",
      desc_en: "Transforming raw ideas into beautiful, layout-driven visual content with rich typography and matching palettes."
    },
    {
      title: "Ndikimi & Gjuhësia",
      title_en: "Impact & Literacy",
      desc: "Përdorimi i njohurive nga Letërsia Angleze për të hartuar mesazhe të fuqishme që plotësojnë dhe forcojnë dizajnin grafik.",
      desc_en: "Leveraging background knowledge in English Literature to draft messaging that complements and strengthens the design."
    },
    {
      title: "Zbulim Krijues i Vazhdueshëm",
      title_en: "Continuous Creative Discovery",
      desc: "Eksperimentim i vazhdueshëm me sisteme të reja të faqosjes, mekanika lëvizjeje dhe përdorim i mjeteve kryesore si Figma dhe InDesign.",
      desc_en: "Constantly testing new vector layout systems, motion mechanics, and keeping up with premier tools like Figma and InDesign."
    }
  ]
};

export const SKILLS_LIST = [
  { name: "Adobe Photoshop", percent: 95, category: "Creative Suite" },
  { name: "Adobe Illustrator", percent: 98, category: "Creative Suite" },
  { name: "Adobe InDesign", percent: 90, category: "Creative Suite" },
  { name: "Figma", percent: 92, category: "UI/UX" },
  { name: "Canva", percent: 85, category: "Fast Prototyping" },
  { name: "Branding", percent: 94, category: "Strategy & Identity" },
  { name: "Typography", percent: 96, category: "Composition" },
];

export const SERVICES_LIST = [
  {
    title: "Dizajni i Logove",
    title_en: "Logo Design",
    desc: "Dizajni i simboleve dhe tipografisë unike që kapin në mënyrë të përsosur bërthamën e një brendi. Skica vektoriale me saktësi të lartë që ruan cilësinë në çdo madhësi.",
    desc_en: "Bespoke symbol and typography design that perfectly captures a brand’s core. Unique, high-fidelity vector layouts suitable for high-density production screen and print use.",
    iconName: "Compass"
  },
  {
    title: "Identiteti i Brendit",
    title_en: "Brand Identity",
    desc: "Udhëzues të plotë vizual duke përfshirë paleta të veçanta të ngjyrave, përzgjedhjet tipografike, ornamente grafike dhe rregulla strikte stili.",
    desc_en: "Full comprehensive visual manuals including custom color matching palettes, typographic selections, graphic ornaments, style rules, and core guidelines.",
    iconName: "Sparkles"
  },
  {
    title: "Dizajni për Rrjete Sociale",
    title_en: "Social Media Design",
    desc: "Shabllone moderne dhe të përshtatshme për rrjete sociale, grafika të veçanta shtesë, ballina dhe postime fushatash të optimizuara për angazhim maksimal në Instagram.",
    desc_en: "Highly tailored, modern social templates, highlight graphics, banners, and bespoke campaign posts optimized for outstanding engagement on Instagram and Behance.",
    iconName: "Layers"
  },
  {
    title: "Dizajni i Printimit",
    title_en: "Print Design",
    desc: "Tipografi mbresëlënëse e posterëve, fletëpalosjeve, ilustrimeve të kapakëve të librave dhe produkteve të tjera nga asete me rezolucion të lartë.",
    desc_en: "Stunning poster typography, flyers, layouts, book jacket illustrations, and paper merchandise tailored from pure high-resolution asset matrices.",
    iconName: "FileText"
  },
  {
    title: "Materiale Marketingu",
    title_en: "Marketing Materials",
    desc: "Kartëvizita premium të dizajnuara nga të dyja anët, fatura vizuale, zarfe katalogësh të punuara në mënyrë elitare dhe profesionale.",
    desc_en: "Premium double-sided layout business cards, visual invoices, letterheads, and customized catalog envelopes designed to feel elite and highly professional.",
    iconName: "Bookmark"
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    role: "Dizajnere Kryesore Krijuese",
    role_en: "Lead Creative Designer",
    company: "Studio Bloom Zurich",
    period: "2024 - Present",
    desc: "Udhëheqja e udhëzuesve të brendit, materialeve promovuese, faqosjeve dhe grafikave të tregimit digjital për shtëpi botuese dhe brende kulturore.",
    desc_en: "Spearheading branding guidelines, promotional materials, publishing layouts, and digital storytelling graphics for cultural and publishing brands."
  },
  {
    role: "Dizajnere Grafike e Pavarur",
    role_en: "Freelance Graphic Designer",
    company: "Vetëpunësuar / Komisione Agjencie",
    period: "2023 - 2024",
    desc: "Krijimi i logove të personalizuara, grafikave me cilësi të lartë për marketing në rrjete sociale, dhe editimi i videove për startup-e dhe agjenci në Zvicër dhe Evropën Juglindore.",
    desc_en: "Delivered customized logos, high-resolution social marketing graphics, and custom video edits for dynamic direct startups and agencies across Switzerland & Southeast Europe."
  },
  {
    role: "Specializim Krijues",
    role_en: "Creative Specialization",
    company: "Tectigon Academy",
    period: "2023",
    desc: "Përfundimi i trajnimeve të gjera të specializuara në Dizajn Grafik, rregullat e faqosjes së mediave digjitale, dhe vektoret moderne të brendingut.",
    desc_en: "Completed extensive specialized tracks in Graphic Design, digital media layout rules, modern branding vectors, and specialized marketing frameworks."
  },
  {
    role: "Studiuese Akademike",
    role_en: "Academic Scholar",
    company: "Fakulteti i Gjuhës dhe Letërsisë Angleze",
    period: "2022 - Present",
    desc: "Përdorimi i teorisë së thellë të rrëfimit, semantikës dhe strategjive të komunikimit për të pasuruar dizajnin tipografik dhe tregimet grafike.",
    desc_en: "Leveraging deep narrative theory, semantics, and communication strategies to enrich target audience typography designs and graphic narratives."
  }
];

export const TESTIMONIALS_LIST = [
  {
    quote: "Adelina combined a brilliant design style with an incredibly crisp copy approach. She didn't just design our logo; she structured the story of our brand. Absolute recommendation!",
    author: "Sophie Ramos",
    title: "Creative Director at Summit Media",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=120&h=120&q=80"
  },
  {
    quote: "Her graphic layout work has a level of sophistication and space mastery that is incredibly hard to find. Adelina's training in English Literature makes her communications incredibly polished.",
    author: "Marc Kessler",
    title: "Founder, Bloom Studio Zurich",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=120&h=120&q=80"
  },
  {
    quote: "Adelina delivered beautiful, high-quality packaging layouts and social media assets in record time. Excellent communication throughout the entire creative pipeline. Total professional.",
    author: "Elona Krasniqi",
    title: "Brand Specialist, GRL PWR Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=120&h=120&q=80"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItemType[] = [
  {
    id: "solune-logo",
    title: "SOLUNE Branding Logo",
    category: "Logo Design",
    image: "/Logo 6/Screenshot 2026-06-08 162603.png",
    pdfUrl: "/Logo 6/SOLUNE logo.pdf",
    images: [
      "/Logo 6/Screenshot 2026-06-08 162603.png",
      "/Logo 6/Screenshot 2026-06-08 162622.png",
      "/Logo 6/Screenshot 2026-06-08 162639.png"
    ],
    year: "2026",
    client: "Solune Co.",
    description: "SOLUNE është një markë bizhuterish e frymëzuar nga harmonia midis diellit dhe hënës. Emri kombinon “Sol” (dielli) dhe “Lune” (hëna), duke simbolizuar ekuilibrin, bukurinë dhe dyanshmërinë. I dizajnuar për individë që vlerësojnë elegancën me kuptim, SOLUNE ofron një identitet të rafinuar vizual që ndërthur frymëzimin qiellor me luksin modern. Brandi pasqyron besim, feminitet dhe sofistikim të jashtëzakonshëm përmes dizajneve të krijuara me kujdes dhe një estetike të veçantë.\n\nSOLUNE is a jewelry brand inspired by the harmony between the sun and the moon. The name combines “Sol” (sun) and “Lune” (moon), symbolizing balance, beauty, and duality. Designed for individuals who appreciate elegance with meaning, SOLUNE offers a refined visual identity that blends celestial inspiration with modern luxury. The brand reflects confidence, femininity, and timeless sophistication through carefully crafted designs and a distinctive aesthetic.",
    tags: ["Logo Design", "Geometric Vectors", "Solar Elements", "Premium Branding"],
    colors: [
      { name: "Gold Dust", hex: "#D4AF37" },
      { name: "Deep Charcoal", hex: "#1A1A1E" },
      { name: "Alabaster White", hex: "#FAF9F6" },
      { name: "Soft Mavi Accent", hex: "#7D9D9C" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe Illustrator" },
      { label: "Design Method", value: "Bespoke Vector Outlines" },
      { label: "Target Audience", value: "E-Commerce & High-End Brands" },
      { label: "Grid Alignment", value: "Symmetric Proportions" }
    ]
  },
  {
    id: "bird-emblem",
    title: "Layered Realism: Typography Exploration",
    category: "Logo Design",
    image: "/Logo 7/Screenshot 2026-06-08 162332.png",
    pdfUrl: "/Logo 7/BIRD.pdf",
    images: ["/Logo 7/Screenshot 2026-06-08 162332.png"],
    year: "2026",
    client: "Avis Dynamic",
    description: "The goal of this project was to experiment with typography as a physical environment rather than just flat text. By carefully masking and layering the branches and feathers of the bird over and under the letters 'B-I-R-D,' I created an illusion of interaction. The muted tones of the typography were intentionally chosen to let the vibrant blue and warm rust tones of the bird stand out as the central focus.",
    tags: ["Logo Design", "Vector Curves", "Dynamic Symbols", "Sleek Outlines"],
    colors: [
      { name: "Nordic Blue", hex: "#2B4C7E" },
      { name: "Vivid Pink", hex: "#FF6584" },
      { name: "Midnight Ash", hex: "#1E2229" },
      { name: "Snowdrift", hex: "#F5F7FA" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe Illustrator CC" },
      { label: "Drafting Style", value: "Continuous Vector Path" },
      { label: "Grid Formula", value: "Fibonacci Spiral Ratio" },
      { label: "Export Quality", value: "Unlimited Scalability (.SVG & .PDF)" }
    ]
  },
  {
    id: "think-2-concept",
    title: "Negative Space: THINK",
    category: "Branding",
    image: "/Logo 2/Screenshot 2026-06-08 162950.png",
    pdfUrl: "/Logo 2/THINK-2.pdf",
    images: ["/Logo 2/Screenshot 2026-06-08 162950.png"],
    year: "2026",
    client: "Think Smart Labs",
    description: "A typographic logo concept that uses negative space and chess imagery to symbolize intelligence, strategy, and critical thinking. The design combines readability with hidden visual elements to create a memorable and meaningful identity.",
    tags: ["Branding", "Corporate Identity", "Visual Thinking", "Grid Mastery"],
    colors: [
      { name: "Bacon Pink", hex: "#FF6584" },
      { name: "Intelligent Blue", hex: "#4E6E81" },
      { name: "Cool Shell", hex: "#F4F6F9" },
      { name: "Obsidian Ink", hex: "#0F1115" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe InDesign & Illustrator" },
      { label: "Composition", value: "Editorial Structural Alignment" },
      { label: "Typography Mode", value: "Inter UI paired with JetBrains Mono" },
      { label: "Layout Spec", value: "Dynamic Grid Book Edition" }
    ]
  },
  {
    id: "mavi-identity",
    title: "MAVI (brand redesign)",
    category: "Branding",
    image: "/Logo 3/Screenshot 2026-06-08 162421.png",
    pdfUrl: "/Logo 3/mavi.pdf",
    images: [
      "/Logo 3/Screenshot 2026-06-08 162421.png",
      "/Logo 3/Screenshot 2026-06-08 162525.png",
      "/Logo 3/Screenshot 2026-06-08 162537.png"
    ],
    year: "2026",
    client: "Mavi Agencies",
    description: "MAVI është një markë e mirënjohur turke e modës, e njohur për koleksionet e xhinsit dhe veshjeve bashkëkohore. Për këtë projekt ribrendimi, unë ridizajnova identitetin vizual duke ruajtur vlerat kryesore dhe njohshmërinë e markës. I frymëzuar nga kuptimi i fjalës “Mavi” (“blu” në turqisht) dhe lidhja e saj me detin, zhvillova një koncept logoje të bazuar në valë që komunikon lëvizje, besim dhe modernitet. Qëllimi ishte krijimi i një identiteti vizual të freskuar që ndihet bashkëkohor, i mbahet mend dhe është i rëndësishëm për publikun e sotëm të modës.\n\nMAVI is a well-established Turkish fashion brand known for its denim and contemporary clothing collections. For this rebranding project, I redesigned the visual identity while preserving the brand’s core values and recognition. Inspired by the meaning of the word “Mavi” (“blue” in Turkish) and its connection to the sea, I developed a wave-based logo concept that communicates movement, confidence, and modernity. The goal was to create a refreshed visual identity that feels contemporary, memorable, and relevant to today’s fashion audience.",
    tags: ["Branding", "Style Guidelines", "Corporate Identity", "Stationery Layout"],
    colors: [
      { name: "Oceanic Mavi", hex: "#628E90" },
      { name: "Pure Sand", hex: "#F5F2EB" },
      { name: "Asphalt Grey", hex: "#3F3D56" },
      { name: "Soft Coral Highlight", hex: "#FF8EAD" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe InDesign CC" },
      { label: "Page Count", value: "Full Corporate Guideline Guide" },
      { label: "Color Space", value: "CMYK Coated & Pantone Coated" },
      { label: "Standard Ratio", value: "Landscape A4 Screen Ratio" }
    ]
  },
  {
    id: "logo-diplom",
    title: "Institutional Identity Design/Logo",
    category: "Logo Design",
    image: "/Logo 1/Screenshot 2026-06-08 163042.png",
    pdfUrl: "/Logo 1/LOGOdiplom.pdf",
    images: [
      "/Logo 1/Screenshot 2026-06-08 163042.png",
      "/Logo 1/Screenshot 2026-06-08 163055.png"
    ],
    year: "2025",
    client: "Tectigon Academy Certification",
    description: "The logo merges traditional academic elements with a modern digital component. The graduation cap and diploma symbolize educational achievement, while the play button represents online learning, video-based education, and continuous personal development. Together, these elements create a visual identity that reflects the evolving nature of education in the digital age.",
    tags: ["Logo Design", "Graduation Piece", "Portfolio Seal", "Tectigon Academy"],
    colors: [
      { name: "Tectigon Blue", hex: "#4B7CB8" },
      { name: "Crayon Pink", hex: "#FF6584" },
      { name: "Soft Linen", hex: "#FAF8F5" },
      { name: "Charcoal Slate", hex: "#1E2022" }
    ],
    specs: [
      { label: "Academy Course", value: "Graphic Design & Digital Marketing" },
      { label: "Tutor Feedback", value: "Excellent Pixel-Perfect Score" },
      { label: "Graduation Date", value: "2025 Specialized Training" },
      { label: "Form Factor", value: "Multi-Format Brand Signature" }
    ]
  },
  {
    id: "negative-space-blueprint",
    title: "Chili / negative space concept",
    category: "Logo Design",
    image: "/Logo 4/Screenshot 2026-06-08 162724.png",
    pdfUrl: "/Logo 4/negative logo.pdf",
    images: [
      "/Logo 4/Screenshot 2026-06-08 162724.png",
      "/Logo 4/Screenshot 2026-06-08 162742.png"
    ],
    year: "2025",
    client: "Contrast Lab",
    description: "his work reinterprets Sunny Hill Festival through experimental typography, using type as a visual medium to capture the festival’s atmosphere, movement, and cultural energy without relying on imagery. A negative space logo concept that incorporates a hidden chili pepper within the typography to represent flavor, heat, and bold brand personality.",
    tags: ["Logo Design", "Negative Space", "Intelligent Forms", "Contrast Art"],
    colors: [
      { name: "Stark Black", hex: "#000000" },
      { name: "Bone White", hex: "#FFFFFF" },
      { name: "Soft Shadow Grey", hex: "#ECECEC" },
      { name: "Hot Rose Stroke", hex: "#FF6584" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe Illustrator" },
      { label: "Design Method", value: "Silhouette Inversion Masking" },
      { label: "Grid Alignment", value: "Orthogonal Guides" },
      { label: "Target Application", value: "High-Contrast Business Cards & Seals" }
    ]
  },
  {
    id: "glass-water-art",
    title: "Water-glass portrait",
    category: "Social Media Design",
    image: "/Logo 5/Screenshot 2026-06-08 164109.png",
    pdfUrl: "/Logo 5/glaas water pic.pdf",
    images: ["/Logo 5/Screenshot 2026-06-08 164109.png"],
    year: "2026",
    client: "Personal Composition Series",
    description: "This composition explores transparency and distortion through water and glass effects layered over a portrait. The aim was to create a sense of emotion and fragility, where the subject emerges through fragmented reflections and liquid movement.",
    tags: ["Social Media Design", "Digital Portrait", "Refraction", "Glassware Art"],
    colors: [
      { name: "Water Tint Blue", hex: "#A9D5E4" },
      { name: "Prism Lilac", hex: "#DEC9E9" },
      { name: "Deep Navy Tint", hex: "#0A192F" },
      { name: "Frost White", hex: "#F3F9FB" }
    ],
    specs: [
      { label: "Software Tool", value: "Adobe Photoshop & Procreate" },
      { label: "Illustration Type", value: "Translucent Refraction Model" },
      { label: "Aspect Ratio", value: "1:1 Square (Ideal for Social Feeds)" },
      { label: "Branding Intend", value: "Pure Aesthetic Content Series" }
    ]
  }
];
