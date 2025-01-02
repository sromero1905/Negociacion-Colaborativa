import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, ArrowRight, Clock, Users, Target, ChevronRight, Bookmark, 
  X, CheckCircle2, FileText, Medal, ArrowUpRight, Presentation,
  Download, LucideIcon, Play, Laptop, BarChart, GraduationCap
} from 'lucide-react';

interface ModalContent {
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

const ModalOpen = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Modal Content Configuration
  const modalContent: ModalContent[] = [
    {
      title: "Evaluaciones",
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-blue-400/90 transition-colors">Examen Práctico</h4>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Duración: 45min</span>
                <span>10 ejercicios</span>
              </div>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Presentation className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-blue-400/90 transition-colors">Simulaciones</h4>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>En vivo</span>
                <span>4 escenarios</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-white">Progreso General</h4>
              <span className="text-xs text-blue-400">85%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div className="bg-blue-500/50 h-1.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400/80" />
                <span className="text-gray-400">Módulo 1 completado</span>
              </div>
              <span className="text-gray-500">100%</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4 text-blue-400/80" />
                <span className="text-gray-400">Módulo 2 en progreso</span>
              </div>
              <span className="text-gray-500">65%</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Material Descargable",
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-blue-400/90 transition-colors">Guía PDF</h4>
              </div>
              <p className="text-xs text-gray-500 mb-3">Manual completo de técnicas de negociación</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">12.5 MB</span>
                <span className="text-blue-400/80">Descargar</span>
              </div>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-blue-400/90 transition-colors">Video Curso</h4>
              </div>
              <p className="text-xs text-gray-500 mb-3">Sesiones grabadas y ejemplos prácticos</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">8 videos</span>
                <span className="text-blue-400/80">Ver ahora</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.1] transition-all group cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Laptop className="w-4 h-4 text-blue-400" />
              </div>
              <h4 className="text-sm font-medium text-white group-hover:text-blue-400/90 transition-colors">Recursos Digitales</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Plantillas de negociación</span>
                <Download className="w-4 h-4 text-blue-400/80" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Hojas de trabajo</span>
                <Download className="w-4 h-4 text-blue-400/80" />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Casos de estudio</span>
                <Download className="w-4 h-4 text-blue-400/80" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Certificación",
      icon: GraduationCap,
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-white/[0.02] rounded-xl border border-white/[0.05] text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Certificado Profesional</h4>
            <p className="text-sm text-gray-500 mb-4">
              Avalado por expertos en negociación y resolución de conflictos
            </p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">36h</div>
                <div className="text-xs text-gray-500">Duración</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">7</div>
                <div className="text-xs text-gray-500">Módulos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-gray-500">Online</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
              <h5 className="text-sm font-medium text-white mb-3">Requisitos</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-400/80" />
                  <span>Completar todos los módulos</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-400/80" />
                  <span>Aprobar evaluación final</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-blue-400/80" />
                  <span>Realizar proyecto práctico</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
              <h5 className="text-sm font-medium text-white mb-3">Beneficios</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <Medal className="w-4 h-4 text-blue-400/80" />
                  <span>Reconocimiento profesional</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <Users className="w-4 h-4 text-blue-400/80" />
                  <span>Acceso a comunidad</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-500">
                  <ArrowUpRight className="w-4 h-4 text-blue-400/80" />
                  <span>Oportunidades laborales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Evaluaciones",
      desc: "Tests y ejercicios para medir tu progreso"
    },
    {
      icon: Users,
      title: "Material Descargable",
      desc: "Recursos adicionales para cada módulo"
    },
    {
      icon: Book,
      title: "Certificación",
      desc: "Obtén tu certificado al completar el programa"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] overflow-hidden mt-26 mb-40">
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03),transparent_70%)]" 
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_70%)]"
        />
      </div>

      {/* Features Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            onClick={() => setSelectedFeature(index)}
          >
            <div className="relative p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.08] transition-all cursor-pointer hover:bg-white/[0.03]">
              <div className="flex items-start gap-4">
                <div className="relative w-10 h-10 bg-white/[0.03] rounded-lg flex items-center justify-center border border-white/[0.08] group-hover:bg-blue-500/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-blue-400/80" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white/90 mb-1 group-hover:text-blue-400/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-3 md:px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
            />
            
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gray-900/90 rounded-2xl border border-white/[0.08] p-4 md:p-6 w-[95%] md:w-full max-w-2xl backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    {selectedFeature !== null && React.createElement(modalContent[selectedFeature].icon, {
                      className: "w-4 h-4 md:w-5 md:h-5 text-blue-400"
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-white">
                    {selectedFeature !== null && modalContent[selectedFeature].title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="w-7 h-7 md:w-8 md:h-8 bg-white/[0.05] rounded-full flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[60vh] md:max-h-[70vh]">
                {selectedFeature !== null && modalContent[selectedFeature].content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalOpen;