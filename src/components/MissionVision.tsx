import React, { useRef, useState, useEffect } from 'react';
import { Target, Globe } from 'lucide-react';

const MissionVision = () => {
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

  return (
    <section className="relative bg-neutral-950 py-24 overflow-hidden mt-10" ref={sectionRef}>
      {/* Delicate Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Subtle Geometric Accent */}
      <div
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2
          bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20
          rounded-full blur-3xl opacity-10"
      ></div>

      <div className="container mx-auto relative z-10 px-6">
        <h2 
          className={`
            text-4xl md:text-5xl font-light text-center mb-16
            text-neutral-200 tracking-tight
            transform transition-all duration-700 ease-out
            ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          Misión <span className="font-extralight text-neutral-400">y</span> Visión
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div 
            className={`
              bg-neutral-950/80
              rounded-3xl
              p-10
              border border-neutral-800
              shadow-xl
              shadow-black/40
              relative
              overflow-hidden
              transition-all
              duration-500
              group
              hover:shadow-2xl
              hover:border-neutral-700
              transform
              ${hasAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
            `}
            style={{ transitionDelay: hasAnimated ? '200ms' : '0ms' }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="flex items-center mb-8">
              <Target
                className="
                  w-12 h-12
                  text-indigo-400
                  mr-6
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-light text-neutral-200 tracking-tight">Misión</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Empoderar profesionales mediante una formación especializada en negociación estratégica, desarrollando competencias que transformen desafíos complejos en oportunidades de colaboración significativa y crecimiento mutuo.
            </p>
          </div>

          {/* Visión */}
          <div 
            className={`
              bg-neutral-950/80
              rounded-3xl
              p-10
              border border-neutral-800
              shadow-xl
              shadow-black/40
              relative
              overflow-hidden
              transition-all
              duration-500
              group
              hover:shadow-2xl
              hover:border-neutral-700
              transform
              ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
            `}
            style={{ transitionDelay: hasAnimated ? '400ms' : '0ms' }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-black opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="flex items-center mb-8">
              <Globe
                className="
                  w-12 h-12
                   text-red-400
                  mr-6
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-light text-neutral-200 tracking-tight">Visión</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Establecernos como el referente internacional en formación online de negociación estratégica, generando un impacto transformador que redefina la manera en que los profesionales abordan la resolución de conflictos y la construcción de acuerdos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;