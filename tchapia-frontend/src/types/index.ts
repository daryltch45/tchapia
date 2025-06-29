// Service types
export interface Service {
  title: string;
  image: string;
  id?: string;
}

// Artisan types
export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  reviews?: number;
}

// Search props
export interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

// Component props
export interface ServiceCardProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export interface HowItWorksStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}