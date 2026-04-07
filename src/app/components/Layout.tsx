import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  CircuitBoard, 
  Menu, 
  X, 
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/formations', label: 'Formations' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg' : 'bg-[#0a0f1e]/80 backdrop-blur-sm'
        }`}
        style={{ borderBottom: scrolled ? '1px solid rgba(0, 168, 255, 0.1)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00a8ff] to-[#00e5b0] rounded-lg flex items-center justify-center">
                <CircuitBoard className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                2E Training
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#00e5b0]'
                      : 'text-[#f4f7fb]/80 hover:text-[#00e5b0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#00a8ff] text-white rounded-lg hover:bg-[#0096e6] transition-all hover:shadow-[0_0_20px_rgba(0,168,255,0.4)] inline-block"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Nous contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1e] border-t border-[#00a8ff]/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#00e5b0]'
                      : 'text-[#f4f7fb]/80 hover:text-[#00e5b0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full mt-4 px-6 py-3 bg-[#00a8ff] text-white rounded-lg hover:bg-[#0096e6] transition-all text-center"
                style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0f1e] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00a8ff] to-[#00e5b0] rounded-lg flex items-center justify-center">
                  <CircuitBoard className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700 }}>
                  2E Training
                </span>
              </Link>
              <p className="text-[#8892a6] text-sm leading-relaxed">
                Formation et certification aux standards IPC pour l'industrie Electronique/Electrique
              </p>
            </div>

            {/* Formations */}
            <div>
              <h4 className="text-white mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                Formations IPC
              </h4>
              <ul className="space-y-2">
                <li><Link to="/formations" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">IPC-A-610</Link></li>
                <li><Link to="/formations" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">IPC J-STD-001</Link></li>
                <li><Link to="/formations" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">IPC-7711/7721</Link></li>
                <li><Link to="/formations" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">IPC/WHMA-A-620</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                Services
              </h4>
              <ul className="space-y-2">
                <li><Link to="/a-propos" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">Import matériel</Link></li>
                <li><Link to="/contact" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">Travaux d'installation et qualification d'ateliers et espaces de travail électronique et électrique</Link></li>
                <li><Link to="/a-propos" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">Qualification espaces électronique et électrique</Link></li>
                <li><Link to="/contact" className="text-[#8892a6] hover:text-[#00e5b0] transition-colors text-sm">Conseil & expertise</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#8892a6] text-sm">
                  <Mail className="w-4 h-4 text-[#00a8ff]" />
                  trainer@2e-training.com
                </li>
                <li className="flex items-center gap-2 text-[#8892a6] text-sm">
                  <Phone className="w-4 h-4 text-[#00a8ff]" />
                  +212 6 00 00 00 00
                </li>
                <li className="flex items-center gap-2 text-[#8892a6] text-sm">
                  <MapPin className="w-4 h-4 text-[#00a8ff]" />
                  Tanger, Maroc
                </li>
              </ul>

              <div className="flex gap-3 mt-6">
                <a href="#" className="w-10 h-10 bg-[#00a8ff]/10 rounded-lg flex items-center justify-center hover:bg-[#00a8ff]/20 transition-all">
                  <Linkedin className="w-5 h-5 text-[#00a8ff]" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#00a8ff]/10 rounded-lg flex items-center justify-center hover:bg-[#00a8ff]/20 transition-all">
                  <Twitter className="w-5 h-5 text-[#00a8ff]" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#00a8ff]/10 rounded-lg flex items-center justify-center hover:bg-[#00a8ff]/20 transition-all">
                  <Facebook className="w-5 h-5 text-[#00a8ff]" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#00a8ff]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8892a6]">
            <div>
              © 2026 2E Training. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00e5b0] transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-[#00e5b0] transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#00e5b0] transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}