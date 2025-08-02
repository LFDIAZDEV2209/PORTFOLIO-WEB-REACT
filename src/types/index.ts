export interface ExperienceItem {
  icon: React.ReactNode;
}

export interface ExperienceData {
  id: number;
  title: string;
  title_es?: string;
  experience: ExperienceItem[];
}

export interface AboutMeItem {
  id: number;
  name: string;
  name_es?: string;
  icon: React.ReactNode;
  description: string;
  description_es?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  title_es?: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  title_es?: string;
  icon: React.ReactNode;
  features: string[];
  features_es?: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  name_es?: string;
  description: string;
  description_es?: string;
  imageUrl: string;
} 