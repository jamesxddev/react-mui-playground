import './layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-grid">
      <header className="app-header">
        <Header />
      </header>

      <nav className="app-sidebar" aria-label="Primary navigation">
        <Sidebar />
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