import React, { useState, useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const residentialProjects = [
  {
    id: 1,
    title: 'Un sombre éclaircie',
    image: '../../public/images/project1/img1.png',
  },
  {
    id: 2,
    title: '',
    image: '../../public/images/project1/img2.png',
  },
  {
    id: 3,
    title: '',
    image: '../../public/images/project1/img3.png',
  },
  {
    id: 4,
    title: '',
    image: '../../public/images/project1/img5.png',
  }
];

const commercialProjects = [
  {
    id: 1,
    title: "L'art du carraux",
    image: '../../public/images/project2/img9.png',
  },
  {
    id: 2,
    title: '',
    image: '../../public/images/project2/img8.png',
  },
  {
    id: 3,
    title: '',
    image: '../../public/images/project2/img7.png',
  },
  {
    id: 4,
    title: '',
    image: '../../public/images/project2/img6.png',
  }
];

const featuredImages = [
  '../../public/images/project1/img1.png',
  '../../public/images/project4/img2.png',
  '../../public/images/project3/img3.png',
  '../../public/images/project3/img4.png',
  '../../public/images/project2/img5.png',
  
];

const Projects = () => {
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setResidentialIndex((prev) => (prev + 1) % residentialProjects.length);
      setCommercialIndex((prev) => (prev + 1) % commercialProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = (type: 'residential' | 'commercial') => {
    if (type === 'residential') {
      setResidentialIndex((prev) => (prev + 1) % residentialProjects.length);
    } else {
      setCommercialIndex((prev) => (prev + 1) % commercialProjects.length);
    }
  };

  const prevSlide = (type: 'residential' | 'commercial') => {
    if (type === 'residential') {
      setResidentialIndex((prev) => 
        prev === 0 ? residentialProjects.length - 1 : prev - 1
      );
    } else {
      setCommercialIndex((prev) => 
        prev === 0 ? commercialProjects.length - 1 : prev - 1
      );
    }
  };

  return (
    <section 
      id="Je Fait" 
      ref={sectionRef}
      className="min-h-screen py-20 bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-light mb-16">Projects</h2>

        {/* Featured Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {featuredImages.map((image, index) => (
            <div 
              key={index}
              className={`relative aspect-square overflow-hidden transition-all duration-1000 delay-${index * 100} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <img 
                src={image} 
                alt={`Featured project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Residential Projects Slideshow */}
        <div className="mb-20">
          <h3 className="text-2xl font-light mb-8">Paris, France</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${residentialIndex * 100}%)` }}
              >
                {residentialProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="relative aspect-[16/9]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end">
                        <div className="p-8">
                          <h4 className="text-2xl">{project.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => prevSlide('residential')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => nextSlide('residential')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Commercial Projects Slideshow */}
        <div>
          <h3 className="text-2xl font-light mb-8">Nice, France</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${commercialIndex * 100}%)` }}
              >
                {commercialProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="relative aspect-[16/9]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end">
                        <div className="p-8">
                          <h4 className="text-2xl">{project.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => prevSlide('commercial')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => nextSlide('commercial')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;