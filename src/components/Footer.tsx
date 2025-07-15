import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                <span className="text-blue-500">The</span>Latibulum
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                Personal website and blog of Salvador J. Martinez. 
                Sharing insights about software development and technology.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <a
                  href="https://www.linkedin.com/in/salvadorjmz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-200 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-200 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
                >
                  <Github size={16} />
                </a>
                <a
                  href="mailto:contact@thelatibulum.com"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-200 shadow-neumorphic hover:shadow-neumorphic-hover flex items-center justify-center text-gray-600 hover:text-blue-500 transition-all duration-200"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Experience
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Categories</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors text-sm md:text-base">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="bg-gray-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic-inset text-center">
            <p className="text-gray-600 flex flex-col sm:flex-row items-center justify-center text-sm md:text-base">
              <span className="flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500" /> by Salvador J. Martinez
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="mt-1 sm:mt-0">© 2025 TheLatibulum.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
