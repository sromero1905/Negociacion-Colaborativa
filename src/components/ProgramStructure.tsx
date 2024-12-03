import React, { useState } from "react";
import { LucideIcon, BookOpen, CheckCircle, Target, Clock, ChevronRight } from 'lucide-react';

const ProgramStructure = () => {
  // Especifica el tipo del estado
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
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

  return (
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2
          className="text-4xl md:text-5xl font-light text-center mb-16 
          bg-clip-text text-transparent 
          bg-gradient-to-br from-neutral-300 to-white"
        >
          Estructura del Programa
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Module List */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(activeModule === index ? null : index)}
                className={`cursor-pointer rounded-xl transition-all duration-300 
                  ${
                    activeModule === index
                      ? "bg-neutral-800 ring-2 ring-neutral-700"
                      : "bg-neutral-900/50 hover:bg-neutral-800/50"
                  }`}
              >
                <div className="flex items-center p-4 space-x-4">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
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
                    className={`w-5 h-5 transition-transform 
                      ${activeModule === index ? "rotate-90 text-white" : "text-neutral-600"}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Module Details */}
          <div
            className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-8 
            min-h-[400px] flex items-center justify-center"
          >
            {activeModule !== null ? (
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                    {React.createElement(modules[activeModule].icon, {
                      className: "w-8 h-8 text-white",
                      strokeWidth: 1.5,
                    })}
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
        className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 
        opacity-100 pointer-events-none z-0"
      />
    </section>
  );
};

export default ProgramStructure;
