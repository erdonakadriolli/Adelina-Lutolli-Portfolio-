export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface DesignSpec {
  label: string;
  value: string;
}

export interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  image: string;
  pdfUrl?: string; // High-fidelity vector layout PDF
  images?: string[]; // Multiple high fidelity screenshots
  year: string;
  client: string;
  description: string;
  tags: string[];
  colors: ColorSwatch[];
  specs: DesignSpec[];
}

export interface GenerativeConfigType {
  type: "lissajous" | "rose" | "spirograph";
  resolution: number;
  thickness: number;
  colorScheme: "monochrome" | "swiss" | "neon" | "holographic";
  paramA: number;
  paramB: number;
  paramC: number;
  scale: number;
  glow: boolean;
  animate: boolean;
}
