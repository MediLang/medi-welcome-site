
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, ArrowRight, Github } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-medi text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Build the Future of Healthcare Programming
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join our growing community of healthcare developers contributing to the Medi language. We're in early development and your expertise can help shape the future of medical software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-medi hover:bg-gray-100 py-6 px-6 text-lg flex items-center gap-2" asChild>
              <a href="https://github.com/MediLang/medi">
                <Github size={20} />
                <span>Contribute on GitHub</span>
              </a>
            </Button>
            
            <Button variant="outline" className="border-white text-medi bg-white hover:bg-transparent hover:text-white py-6 px-6 text-lg flex items-center gap-2" asChild>
              <a href="https://medilang.github.io/medi/">
                <span>View Roadmap</span>
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
