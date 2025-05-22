
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Star, BookOpen, MessageSquare, Users } from 'lucide-react';

const DiscordIcon = ({ size = 40, className }: { size?: number; className?: string }) => (
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

const Community = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Medi Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medi is built by healthcare professionals and developers working together to create better healthcare software.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <a 
            href="https://github.com/MediLang/medi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-gray-100 hover:border-medi hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <Github size={40} className="text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 mb-4">
              Explore the source code, contribute to the project, and help shape the future.
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              <span className="text-gray-700 font-medium">Star on GitHub</span>
            </div>
          </a>
          
          <a 
            href="https://discord.gg/JxE6dD285R" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-gray-100 hover:border-medi hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <DiscordIcon className="text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discord</h3>
            <p className="text-gray-600 mb-4">
              Join our Discord community to chat, ask questions, and collaborate.
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2">
              <MessageSquare size={16} className="text-indigo-500" />
              <span className="text-gray-700 font-medium">Join Discord</span>
            </div>
          </a>
          
          <a 
            href="https://x.com/MediLangHQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-gray-100 hover:border-medi hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            <h3 className="text-xl font-semibold mb-2">Twitter</h3>
            <p className="text-gray-600 mb-4">
              Follow @MediLangHQ for the latest updates, tips, and community highlights.
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2">
              <MessageSquare size={16} className="text-blue-500" />
              <span className="text-gray-700 font-medium">Join the conversation</span>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/groups/14694015/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-gray-100 hover:border-medi hover:shadow-md transition-all flex flex-col items-center text-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 mb-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">
              Connect with healthcare developers and professionals in the Medi LinkedIn group.
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2">
              <Users size={16} className="text-blue-700" />
              <span className="text-gray-700 font-medium">Join the group</span>
            </div>
          </a>
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://medilang.github.io/medi/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white border border-gray-300 hover:border-medi text-gray-800 hover:text-medi transition-colors py-6 px-8 text-lg flex items-center gap-2">
              <BookOpen size={20} />
              <span>Read the Documentation</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
