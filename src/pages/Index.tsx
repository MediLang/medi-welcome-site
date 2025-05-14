
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodeExample from '@/components/CodeExample';
import Community from '@/components/Community';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CodeExample />
        <Community />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
