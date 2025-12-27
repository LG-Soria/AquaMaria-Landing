
export interface Product {
  id: string;
  name: string;
  category: 'filter' | 'dispenser';
  description: string;
  features: string[];
  price: number;
  imageUrl: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface AdvisorState {
  step: number;
  usageType: 'hogar' | 'oficina' | null;
  peopleCount: number | null;
  preferences: string[];
  recommendation: string | null;
  loading: boolean;
}
