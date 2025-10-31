export type PageKey = 'home' | 'dashboard';

export interface NavigationProps {
  onNavigate: (page: PageKey) => void;
  activePage: PageKey;
}