export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badgeText: string;
  iconName: string;
  imageUrl: string;
  applications: string[];
  pieces: string[];
  fabrics: string[];
  customizations: string[];
  productionProcess: {
    title: string;
    description: string;
  }[];
  differentials: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  whatsappMessage: string;
}

export interface ProductColorVariation {
  name: string;
  hex: string;
  isWhite?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  recommendedFabrics: string[];
  customizationOptions: string[];
  applications: string[];
  tags: string[];
  imageUrl: string;
  featured?: boolean;
  seoKeywords?: string[];
  geoScope?: string;
  aeoQuickAnswer?: string;
  technicalSpecs?: { label: string; value: string }[];
  sizeGrade?: string;
  pieceType?: string;
  sector?: string;
  colorVariations?: ProductColorVariation[];
  additionalImages?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  segment: string;
  description: string;
  fabricUsed: string;
  customizationUsed: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ProductionStep {
  number: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: string;
  deliverable: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
}

export interface FAQItem {
  id: string;
  category: 'geral' | 'uniformes' | 'private-label' | 'producao' | 'orcamento';
  question: string;
  answer: string;
}

export interface GeoPageData {
  slug: string;
  city: string;
  state: string;
  type: 'uniformes' | 'private-label';
  title: string;
  metaDescription: string;
  h1: string;
  localIntro: string;
  industrialContext: string;
  logisticsInfo: string;
  recommendedSolutions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface QuoteFormData {
  companyName: string;
  contactName: string;
  email: string;
  whatsapp: string;
  city: string;
  state: string;
  productType: string;
  estimatedQuantity: string;
  segment: string;
  hasReferenceModel: 'sim' | 'nao' | 'parcial';
  needsModelDevelopment: 'sim' | 'nao' | 'a_definir';
  wantsPilotPiece: boolean;
  customizationTypes: string[];
  desiredDeadline: string;
  notes: string;
  attachmentFileName?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  galleryImages?: string[];
  category: string;
  categorySlug: string;
  publishedAt: string;
  formattedDate: string;
  author: string;
  readTimeMinutes: number;
  tags: string[];
  isGooglePost?: boolean;
  googlePostUrl?: string;
  callToAction?: {
    text: string;
    link: string;
    isExternal?: boolean;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    aeoQuickAnswer?: string;
    keyTakeaways?: string[];
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
}

