
import React from 'react';
import { Shield, Zap, Database, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-tolvex" />,
      title: "Security by Design",
      description: "Built with healthcare compliance at its core. HIPAA-ready with privacy features baked right into the language."
    },
    {
      icon: <Zap className="h-12 w-12 text-tolvex" />,
      title: "Blazing Fast Performance",
      description: "Optimized for medical data processing with performance that doesn't compromise on reliability or safety."
    },
    {
      icon: <Database className="h-12 w-12 text-tolvex" />,
      title: "Healthcare Data Integration",
      description: "Native connectors for healthcare systems and standards like HL7, FHIR, and DICOM with type-safe interfaces."
    },
    {
      icon: <Heart className="h-12 w-12 text-tolvex" />,
      title: "Domain-Specific Syntax",
      description: "Language constructs specifically designed for medical concepts, making code more intuitive for healthcare professionals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose-Built for Healthcare</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tolvex combines the power of modern programming with specialized features for healthcare applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
