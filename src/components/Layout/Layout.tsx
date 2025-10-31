import './layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import type { NavigationProps } from '../../types/navigation';

interface LayoutProps extends NavigationProps {
  children: React.ReactNode;
}

const Layout = ({ children, onNavigate, activePage }: LayoutProps) => {
  return (
    <div className="app-grid">
      <header className="app-header">
        <Header />
      </header>

      <nav className="app-sidebar" aria-label="Primary navigation">
        <Sidebar onNavigate={onNavigate} activePage={activePage} />
      </nav>

      <main className="app-main" role="main">
        {children}
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;