import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="Moi" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-[#f4ede4]"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="../../public/images/project1/img.png" 
                  alt="Designer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8">L'Art des éspaces </h2>
            <p className="text-lg mb-6 text-neutral-700">
            Designer d’intérieur basée à Nice, je conçois des espaces qui allient élégance, fonctionnalité et caractère. Mon approche est centrée sur l’écoute et la transformation d’un lieu en un intérieur vivant, fidèle à vos usages et à votre personnalité. Chaque projet, du plus minimal au plus audacieux, est une collaboration où le détail fait la différence.
            </p>
            <p className="text-lg text-neutral-700">
            Passionnée par l’art de sublimer les espaces, je mets un point d’honneur à créer des ambiances qui reflètent vos aspirations et besoins. En alliant créativité et expertise technique, j’aspire à créer des lieux où chaque élément trouve sa place, apportant harmonie et bien-être au quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;