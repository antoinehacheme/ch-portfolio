import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };
  
  return (
    <section 
      id="Parle Moi" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-[#f4ede4]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8">Parlons-en</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <p className="text-2xl mb-4">Merci a vous !</p>
                <p className="text-neutral-700">Je reviens vers vous au plus vite.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-400 py-4 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b-2 border-neutral-400 py-4 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Votre Idée"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-neutral-400 py-4 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 text-lg hover:text-neutral-600 transition-colors disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Envoyer'}</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;