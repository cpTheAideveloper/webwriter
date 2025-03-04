export interface HeroData {
    title: string;
    description: string;
    cta: string;
  }
  
  export interface Feature {
    featureTitle: string;
    featureDescription: string;
  }
  
  export interface Service {
    serviceTitle: string;
    serviceDescription: string;
  }
  
  export interface ContentData {
    hero: HeroData;
    features: Feature[];
    services: Service[];
    finalCta: string;
  }