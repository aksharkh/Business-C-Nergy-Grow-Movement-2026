import type { ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom';
}

export interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  href?: string;
}

export interface StatCardProps {
  icon: React.ComponentType<{ size: number }>;
  number: string;
  label: string;
  subtext: string;
  className?: string;
}

export interface MentorProps {
  name: string;
  role: string;
}
