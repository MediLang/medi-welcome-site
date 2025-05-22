
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, Github, ExternalLink } from 'lucide-react';

const DiscordIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
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

const Navbar = () => {
  return (
    <header className="border-b border-gray-100 py-4 backdrop-blur-md bg-white/80 fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/6c4096a6-c8d2-4f53-adf6-b0a0b910076b.png" 
            alt="Medi Logo" 
            className="h-7 w-auto" 
          />
          <span className="text-xl font-bold text-medi">Medi</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="https://medilang.github.io/medi/" className="text-gray-700 hover:text-medi transition-colors flex items-center gap-1">
            <BookOpen size={16} />
            <span>Docs</span>
          </a>
          <a href="https://github.com/MediLang/medi" className="text-gray-700 hover:text-medi transition-colors flex items-center gap-1">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://discord.gg/JxE6dD285R" className="text-gray-700 hover:text-medi transition-colors flex items-center gap-1">
            <DiscordIcon />
            <span>Discord</span>
          </a>
          <a href="https://x.com/MediLangHQ" className="text-gray-700 hover:text-medi transition-colors flex items-center gap-1">
            <ExternalLink size={16} />
            <span>Twitter</span>
          </a>
          <a href="https://www.linkedin.com/groups/14694015/" className="text-gray-700 hover:text-medi transition-colors flex items-center gap-1">
            <ExternalLink size={16} />
            <span>LinkedIn</span>
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-medi hover:bg-medi-dark flex items-center gap-2">
            <Code size={16} />
            <span>Join Development</span>
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="p-1">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
