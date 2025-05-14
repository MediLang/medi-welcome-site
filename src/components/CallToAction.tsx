
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-medi text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Healthcare Programming?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join the growing community of healthcare developers building the future of medical software with Medi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-medi hover:bg-gray-100 py-6 px-6 text-lg flex items-center gap-2">
              <Code size={20} />
              <span>Get Started</span>
            </Button>
            
            <Button variant="outline" className="text-white border-white hover:bg-white/10 py-6 px-6 text-lg flex items-center gap-2 group">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn More</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
