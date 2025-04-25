import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Paintbrush, Ruler, Lightbulb, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Full-service interior design tailored to your lifestyle, preferences, and budget.',
    icon: Paintbrush,
  },
  {
    id: 2,
    title: 'Space Planning',
    description: 'Optimize your space for functionality, flow, and aesthetic balance.',
    icon: Ruler,
  },
  {
    id: 3,
    title: 'Concept Development',
    description: 'Creative direction and concept boards that bring your vision to life.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'Material Selection',
    description: 'Curated selection of finishes, fabrics, and materials that elevate your space.',
    icon: Palette,
  },
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 lg:py-28"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-neutral-500">Services</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">What I Offer</h2>
          <p className="text-neutral-700">
            Comprehensive interior design services for residential and commercial spaces,
            tailored to your unique needs and vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group bg-white border border-neutral-200 p-8 lg:p-10 transition-all duration-700 hover:shadow-md delay-${index * 100} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-6 text-neutral-500 group-hover:text-[#d6ccc2] transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="font-serif text-xl mb-4">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <a 
                  href="#contact" 
                  className="inline-block text-sm font-medium text-neutral-800 hover:text-[#d6ccc2] transition-colors duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 lg:mt-24 bg-[#f8f5f2] p-8 lg:p-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">Ready to transform your space?</h3>
              <p className="text-neutral-700">
                Let's collaborate to create an interior that reflects your personal style and meets your functional needs.
              </p>
            </div>
            <div className="lg:w-1/3 lg:text-right">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;