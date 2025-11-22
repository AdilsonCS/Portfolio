export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export interface TechItem {
  name: string;
  category: 'Orchestration' | 'Intelligence' | 'Data';
  iconName: string;
}

export interface FormData {
  name: string;
  whatsapp: string;
  painPoint: string;
  budget: string;
}
