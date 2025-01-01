import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { BookOpen, CheckCircle, Target, Clock, ChevronRight, LucideIcon } from 'lucide-react';

interface Module {
  title: string;
  icon: LucideIcon;
  description: string;
}

const ProgramStructure: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
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

  const modules: Module[] = [
    {
      title: "5 etapas de una negociación colaborativa",
      icon: Target,
      description: "Aprende un método sistemático para abordar negociaciones de manera efectiva y constructiva.",
    },
    {
      title: "Las personas y el conflicto",
      icon: CheckCircle,
      description: "Comprende cómo diferentes personalidades interactúan en situaciones de conflicto.",
    },
    {
      title: "3 herramientas para comunicarte con éxito",
      icon: Clock,
      description: "Domina técnicas de comunicación que te permitirán gestionar conflictos con precisión y empatía.",
    },
    {
      title: "Generar posibilidades conjuntas",
      icon: BookOpen,
      description: "Desarrolla habilidades para crear soluciones innovadoras y colaborativas.",
    },
    {
      title: "Negociar sobre criterios y alternativas",
      icon: Target,
      description: "Aprende a establecer criterios objetivos y explorar múltiples alternativas en la negociación.",
    },
    {
      title: "Construyendo el acuerdo",
      icon: CheckCircle,
      description: "Estrategias finales para consolidar acuerdos satisfactorios para todas las partes.",
    },
  ];

  const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveModule(activeModule === index ? null : index);
    }
  };

  const handleClick = (index: number) => () => {
    setActiveModule(activeModule === index ? null : index);
  };

  const ActiveIcon = activeModule !== null ? modules[activeModule].icon : null;

  return (
    <section className="bg-neutral-950 text-white py-16 md:py-24 relative overflow-hidden mt-10" ref={sectionRef}>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2
          className={`transform transition-all duration-700 ease-out
            text-4xl md:text-5xl font-light text-center mb-16
            bg-clip-text text-transparent
            bg-gradient-to-br from-neutral-300 to-white
            ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Estructura del Programa
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Module List */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={handleClick(index)}
                className={`transform transition-all duration-500 ease-out cursor-pointer rounded-xl
                  ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
                  ${
                    activeModule === index
                      ? "bg-neutral-900 ring-2 ring-neutral-800"
                      : "bg-neutral-950/50 hover:bg-neutral-900/50"
                  }`}
                style={{ 
                  transitionDelay: hasAnimated ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="flex items-center p-4 space-x-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                    <module.icon
                      className={`w-6 h-6 transition-colors
                        ${activeModule === index ? "text-white" : "text-neutral-500"}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3
                      className={`text-lg font-medium transition-colors
                        ${activeModule === index ? "text-white" : "text-neutral-300"}`}
                    >
                      {`0${index + 1}. `}{module.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`hidden md:block w-5 h-5 transition-transform
                      ${activeModule === index ? "rotate-90 text-white" : "text-neutral-600"}`}
                  />
                </div>
                {/* Mostrar descripción en móvil directamente bajo cada módulo */}
                <div className="md:hidden px-4 pb-4">
                  <p className="text-neutral-400 text-sm">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Module Details - Solo visible en desktop */}
          <div
            className={`hidden md:flex transform transition-all duration-700 ease-out
              bg-neutral-950/50 rounded-xl border border-neutral-800 p-8
              min-h-[400px] items-center justify-center
              ${hasAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ transitionDelay: hasAnimated ? '300ms' : '0ms' }}
          >
            {activeModule !== null ? (
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center">
                    {ActiveIcon && (
                      <ActiveIcon
                        className="w-8 h-8 text-white"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {modules[activeModule].title}
                </h3>
                <p className="text-neutral-400 max-w-md mx-auto">
                  {modules[activeModule].description}
                </p>
              </div>
            ) : (
              <p className="text-neutral-500 text-center">
                Selecciona un módulo para ver más detalles
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle background effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950/95 to-neutral-950/90
          opacity-100 pointer-events-none z-0"
      />
    </section>
  );
};

export default ProgramStructure;