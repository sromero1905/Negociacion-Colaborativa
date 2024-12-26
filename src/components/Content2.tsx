import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Brain, Target, Workflow, ArrowRight, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { modules } from '../data/index';

interface Module {
  id: number;
  title: string;
  description: string;
  status: string;
  image: string;
  path: string;
  items: string[];
}

const ModernLearningSection: React.FC = () => {
  const navigate = useNavigate();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpStagger = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleExploreModule = (path: string): void => {
    navigate(`/modulo/${path}`);
  };

  const getIcon = (moduleId: number): LucideIcon => {
    switch (moduleId) {
      case 1:
        return Brain;
      case 2:
        return Workflow;
      case 3:
        return Target;
      default:
        return Brain;
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradientes de fondo animados */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(29,78,216,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(29,78,216,0.05),transparent_70%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-32 relative">
        {/* Header animado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpStagger}
          className="max-w-xl mx-auto text-center mb-24"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
            <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Programa Estructurado</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl font-medium tracking-tight text-white mb-6">
            Domina el Arte de la Negociación
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
            Un camino cuidadosamente diseñado para transformar la manera en que negocias y resuelves conflictos.
          </motion.p>
        </motion.div>

        {/* Cards con animación */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpStagger}
          className="grid lg:grid-cols-3 gap-8 mb-32"
        >
          {modules.map((module: Module) => {
            const Icon = getIcon(module.id);
            return (
              <motion.div
                key={module.id}
                variants={scaleIn}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                <div className="relative p-8 bg-white/[0.01] rounded-2xl border border-white/[0.05] hover:border-white/[0.08] transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-[1.02]">
                  {/* Header del card */}
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-white/[0.03] rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/[0.05] transition-colors">
                      <Icon className="w-6 h-6 text-blue-400/80" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400/90 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {module.description}
                    </p>
                  </div>

                  {/* Lista de items */}
                  <ul className="space-y-4">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="relative mt-1">
                          <div className="absolute inset-0 bg-blue-400/20 blur-sm rounded-full" />
                          <Check className="w-4 h-4 text-blue-400/80 relative" />
                        </div>
                        <span className="text-gray-400 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer con hover effect */}
                  <div className="mt-8 pt-6 border-t border-white/[0.05]">
                    <button 
                      onClick={() => handleExploreModule(module.path)}
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/90 transition-colors"
                    >
                      <span>Explorar módulo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats con animación */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpStagger}
          className="grid md:grid-cols-4 gap-8 mb-32"
        >
          {[
            { value: "24h", label: "De contenido" },
            { value: "28", label: "Lecciones" },
            { value: "15", label: "Ejercicios" },
            { value: "+1000", label: "Graduados" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
              <div className="relative p-8 bg-white/[0.01] rounded-2xl border border-white/[0.05] hover:border-white/[0.08] transition-all hover:transform hover:scale-[1.05]">
                <div className="text-4xl font-medium bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA con animación */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpStagger}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-blue-500/[0.03] blur-3xl" />
          <div className="relative">
            <motion.h3 variants={fadeInUp} className="text-3xl font-medium text-white mb-6">
              ¿Listo para transformar tu manera de negociar?
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-gray-400 mb-8">
              Únete a nuestro programa y desarrolla las habilidades que necesitas para destacar en el arte de la negociación.
            </motion.p>
            <motion.button 
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/10 text-white rounded-xl font-medium hover:bg-blue-500/20 transition-all border border-blue-500/20 hover:border-blue-500/30"
            >
              <span>Comenzar ahora</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernLearningSection;