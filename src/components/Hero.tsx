import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="Maison" 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
      style={{ 
        backgroundImage: `
          radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255,255,255,0.1) 0%,
            transparent 50%
          )
        `
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('../../public/images/project3/img8.png')] bg-cover bg-center opacity-50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-4xl md:text-7xl font-light mb-6 tracking-tight">
        Des espaces pensés<br />pour vivre pleinement
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
        Intérieurs réfléchis, où l’élégance rencontre la fonctionnalité
        </p>
        
        <a 
          href="#Moi"
          className="absolute bottom-12 text-white opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;