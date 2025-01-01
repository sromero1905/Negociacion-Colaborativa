import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, ArrowRight, Clock, Users, Target, ChevronRight, Bookmark } from 'lucide-react';

const ContentSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  return (
    <div className="bg-[#0A0A0A] overflow-hidden mt-[170px]"> {/* Reducido de mt-20 */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03),transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03),transparent_70%)]"
        />
      </div>
      
      <motion.div
        className="relative max-w-7xl mx-auto px-4 py-6" // Manteniendo un padding adecuado
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-full border border-white/[0.08]"
            >
              <Bookmark className="w-4 h-4 text-blue-400/80" />
              <span className="text-sm text-gray-400">Programa Completo</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h2 className="text-3xl font-medium text-white/90">
                Estructura del Programa
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                Nuestro programa de negociación colaborativa está estructurado en 7 módulos
                diseñados para desarrollar tus habilidades de manera progresiva.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]"
            >
              {[
                { icon: Clock, value: "24h", label: "De contenido" },
                { icon: Book, value: "28", label: "Lecciones" },
                { icon: Target, value: "15", label: "Ejercicios" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-4 h-4 text-blue-400/80" />
                    <div className="text-xl font-medium text-white/90">{stat.value}</div>
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Module Cards */}
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Target,
                title: "Los Conflictos y la Negociación",
                desc: "Fundamentos y marcos teóricos esenciales",
                duration: "3.5h",
                lessons: "8 lecciones"
              },
              {
                icon: Users,
                title: "5 Etapas de una Negociación",
                desc: "Metodología paso a paso",
                duration: "4h",
                lessons: "10 lecciones"
              },
              {
                icon: Book,
                title: "Las Personas y el Conflicto",
                desc: "Psicología y dinámica interpersonal",
                duration: "3h",
                lessons: "7 lecciones"
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                custom={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.03] to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : ''}`}
                />
                <div className="relative p-4 bg-white/[0.02] rounded-xl border border-white/[0.05] hover:border-white/[0.08] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-10 h-10 bg-white/[0.03] rounded-lg flex items-center justify-center border border-white/[0.08]">
                        <module.icon className="w-5 h-5 text-blue-400/80" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base font-medium text-white/90 mb-1 group-hover:text-blue-400/90 transition-colors truncate">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">{module.desc}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Book className="w-3.5 h-3.5" />
                          <span>{module.lessons}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 bg-white/[0.02] rounded-full flex items-center justify-center group-hover:bg-blue-500/[0.05] transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400/80 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.button
              variants={fadeInVariants}
              className="w-full py-3 text-center text-sm text-gray-500 hover:text-white/90 transition-colors"
            >
              
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentSection;
