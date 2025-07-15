import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = React.useState('about');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16 md:pt-20">
        <AboutSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
