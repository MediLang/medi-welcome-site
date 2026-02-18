
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The <span className="text-tolvex">Programming Language</span> for Healthcare
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Transform medical analytics with unparalleled ease, speed, and security.
            Purpose-built for healthcare professionals and developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-tolvex hover:bg-tolvex-dark py-6 px-6 text-lg flex items-center gap-2">
              <Code size={20} />
              <span>Join Development</span>
            </Button>
            <Button variant="outline" className="py-6 px-6 text-lg flex items-center gap-2 border-gray-300">
              <BookOpen size={20} />
              <span>Read the Docs</span>
            </Button>
          </div>
          
          <div className="mt-12 bg-gray-800 text-white p-6 rounded-lg mx-auto max-w-2xl overflow-hidden text-left shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Vision: Our planned syntax</p>
              <span className="px-2 py-1 bg-tolvex/20 text-tolvex-light text-xs rounded">In Development</span>
            </div>
            <pre className="font-mono text-sm">
              <code>
                <span className="text-green-400">// A simple Tolvex program for health data analysis</span>{'\n'}
                <span className="text-blue-400">fn</span> <span className="text-yellow-400">analyze_patient_data</span>(patient_id: <span className="text-purple-400">String</span>) {'{'}
                {'\n'}{'  '}<span className="text-blue-400">let</span> data = <span className="text-yellow-400">fetch_patient_records</span>(patient_id);
                {'\n'}{'  '}<span className="text-blue-400">let</span> risk_score = <span className="text-yellow-400">calculate_risk</span>(data);
                {'\n'}{'  '}
                {'\n'}{'  '}<span className="text-green-400">// HIPAA compliant by default</span>
                {'\n'}{'  '}<span className="text-blue-400">securely_store</span>(patient_id, risk_score);
                {'\n'}{'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
