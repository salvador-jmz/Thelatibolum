import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const section = href.replace('#', '');
    setActiveSection(section);
    setIsMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-lg md:rounded-xl px-4 py-2 md:px-6 md:py-3 shadow-neumorphic">
              <h1 className="text-lg md:text-2xl font-bold text-gray-700">
                <span className="text-blue-500">The</span>Latibulum
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-blue-500 bg-gray-100 shadow-neumorphic-inset'
                    : 'text-gray-600 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/salvadorjmz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:contact@thelatibulum.com"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden lg:hidden w-10 h-10 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <div className="bg-gray-100 rounded-xl shadow-neumorphic-inset p-4">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 text-left ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-blue-500 bg-gray-100 shadow-neumorphic-inset'
                        : 'text-gray-600 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
              <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
                <a
                  href="https://www.linkedin.com/in/salvadorjmz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href="mailto:contact@thelatibulum.com"
                  className="w-10 h-10 rounded-lg bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
