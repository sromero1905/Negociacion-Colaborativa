import { LucideIcon } from 'lucide-react';

export interface Module {
  id: number;
  title: string;
  description: string;
  status: string;
  image: string;
  path: string;
  items: string[];
}
