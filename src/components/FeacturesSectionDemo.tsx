import React, { useState, useRef, useEffect } from 'react';
import { Target, ArrowRight, Scale } from 'lucide-react';

const Objectives = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const objectives = [
    {
      icon: Target,
      text: "Brindar herramientas prácticas para transformar conflictos en acuerdos colaborativos.",
    },
    {
      icon: Scale,
      text: "Capacitar en métodos funcionales y pacíficos de negociación.",
    },
    {
      icon: ArrowRight,
      text: "Fortalecer habilidades interpersonales clave como la comunicación y el liderazgo.",
    },
    {
      icon: Target,
      text: "Facilitar la creación de acuerdos sostenibles orientados al beneficio mutuo.",
    }
  ];

  return (
    <section
      id="objectives"
      className="bg-neutral-950 text-white py-24 overflow-hidden mt-10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div 
            className={`relative group transform transition-all duration-1000 ease-out
              ${hasAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            <div className="aspect-square w-full overflow-hidden rounded-3xl">
              <img
                src="./negotation.jpg"
                alt="Objetivos del Programa"
                className="w-full h-full object-cover transform transition-transform duration-500
                  group-hover:scale-105 group-hover:rotate-2 opacity-90 group-hover:opacity-100"
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                rounded-3xl pointer-events-none"
            />
          </div>

          {/* Objectives Section */}
          <div 
            className={`transform transition-all duration-1000 ease-out
              ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 
              className={`text-5xl font-light tracking-tight mb-16
                bg-gradient-to-r from-neutral-300 to-white bg-clip-text text-transparent
                transform transition-all duration-700 ease-out
                ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Objetivos del Programa
            </h2>
            <div className="space-y-8">
              {objectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div
                    key={index}
                    className={`bg-neutral-950/80 backdrop-blur-sm border border-neutral-800
                      rounded-3xl p-8 flex items-start space-x-8 transition-all duration-300
                      hover:bg-neutral-900/90 hover:scale-[1.02] hover:shadow-2xl group
                      transform transition-all duration-700 ease-out
                      ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                    style={{ transitionDelay: hasAnimated ? `${600 + index * 100}ms` : '0ms' }}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent
                        className="w-14 h-14 text-neutral-500
                          group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-xl font-light text-neutral-300
                        group-hover:text-white transition-colors duration-300">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;