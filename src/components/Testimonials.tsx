import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Richardson',
    role: 'Homeowner',
    quote: 'Working with this design studio was a dream. They transformed our home into a beautiful, functional space that perfectly captures our style while addressing all of our needs.',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Daniel Martinez',
    role: 'Restaurant Owner',
    quote: 'The attention to detail and understanding of our brand was impressive. Our restaurant space not only looks amazing but functions perfectly for our staff and customers.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Office Manager',
    quote: 'Our office redesign has completely transformed our work environment. The team created a space that enhances productivity while reflecting our company culture.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-neutral-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-neutral-400">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">Client Experiences</h2>
          <p className="text-neutral-300">
            Don't just take my word for it. Here's what clients have to say about 
            their experience and the transformations of their spaces.
          </p>
        </div>
        
        <div 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-neutral-800 p-8 lg:p-12">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <svg className="w-12 h-12 text-neutral-700 mb-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.2.234l-.964.153c.29-.88.57-1.91.772-2.49.224-.65.455-1.237.69-1.76.234-.522.362-.863.385-1.024.025-.16.025-.26 0-.31-.023-.05-.142-.08-.354-.09-.21-.01-.464.14-.76.42C5.636 8.24 5.17 8.82 4.74 9.58c-.41.76-.795 1.76-1.146 3.006-.35 1.254-.596 2.45-.74 3.58-.112.9-.16 1.485-.16 1.756 0 .746.24 1.345.74 1.796.494.45 1.18.674 2.05.674.865 0 1.716-.226 2.534-.677.82-.45 1.537-1.042 2.14-1.77.605-.726 1.08-1.538 1.426-2.434.345-.895.518-1.733.518-2.515zm11.63 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.82-.57-.12-1.09-.12-1.566-.01-.16.04-.52.12-1.2.24l-.87.14c.29-.88.54-1.835.756-2.43.215-.597.448-1.18.7-1.76.252-.583.38-.934.38-1.054.026-.16.026-.26 0-.31-.024-.05-.142-.08-.354-.09-.21-.01-.464.14-.76.42-.295.28-.76.86-1.19 1.62-.43.76-.826 1.76-1.19 3.006-.36 1.247-.615 2.442-.87 3.58-.112.9-.16 1.485-.16 1.756 0 .746.24 1.345.74 1.796.494.45 1.18.674 2.05.674.864 0 1.716-.226 2.534-.677.82-.45 1.537-1.042 2.14-1.77.604-.726 1.08-1.538 1.425-2.434.346-.895.52-1.733.52-2.515z" />
                        </svg>
                        <p className="text-lg text-neutral-300 italic mb-8">
                          {testimonial.quote}
                        </p>
                        <div>
                          <h4 className="font-serif text-xl">{testimonial.name}</h4>
                          <p className="text-neutral-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 w-10 h-10 bg-white text-neutral-800 flex items-center justify-center hover:bg-neutral-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 w-10 h-10 bg-white text-neutral-800 flex items-center justify-center hover:bg-neutral-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;