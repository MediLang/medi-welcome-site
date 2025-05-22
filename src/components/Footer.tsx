
import React from 'react';
import { Github, BookOpen } from 'lucide-react';

const DiscordIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12h.01M15 12h.01M8.5 19.5h7c1.4 0 2.1 0 2.63-.27.47-.24.83-.6 1.07-1.07.27-.53.27-1.23.27-2.63v-5.06c0-1.4 0-2.1-.27-2.63-.24-.47-.6-.83-1.07-1.07C17.6 6.5 16.9 6.5 15.5 6.5h-7c-1.4 0-2.1 0-2.63.27-.47.24-.83.6-1.07 1.07C4.5 8.37 4.5 9.07 4.5 10.47v5.06c0 1.4 0 2.1.27 2.63.24.47.6.83 1.07 1.07.53.27 1.23.27 2.63.27ZM11.2 19.5v-4"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/6c4096a6-c8d2-4f53-adf6-b0a0b910076b.png" 
                alt="Medi Logo" 
                className="h-7 w-auto" 
              />
              <span className="text-xl font-bold text-medi">Medi</span>
            </div>
            <p className="text-gray-600 mb-4">
              The programming language purpose-built for healthcare.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/MediLang/medi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-medi transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://discord.gg/JxE6dD285R" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-medi transition-colors"
              >
                <DiscordIcon />
              </a>
              <a 
                href="https://x.com/MediLangHQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-medi transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a 
                href="https://www.linkedin.com/groups/14694015/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-medi transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://medilang.github.io/medi/" 
                  className="text-gray-600 hover:text-medi transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/MediLang/medi" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/JxE6dD285R" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/MediLangHQ" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/groups/14694015/" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  LinkedIn Group
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  License
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-medi transition-colors"
                >
                  Contributors
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Medi Language. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
