import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe } from 'lucide-react';

const MissionVision: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0.0, 0.2, 1],
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <section className="relative bg-neutral-900 py-24 overflow-hidden">
      {/* Delicate Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* Subtle Geometric Accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [0.8, 1, 0.9]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 
        bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 
        rounded-full blur-3xl"
      ></motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="container mx-auto relative z-10 px-6"
      >
        <motion.h2 
          variants={cardVariants}
          className="
            text-4xl md:text-5xl font-light text-center mb-16
            text-neutral-200
            tracking-tight
          "
        >
          Misión <span className="font-extralight text-neutral-400">y</span> Visión
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            variants={cardVariants}
            className="
              bg-neutral-800 
              rounded-3xl 
              p-10 
              border border-neutral-700
              shadow-xl
              shadow-black/40
              relative
              overflow-hidden
              transition-all 
              duration-500
              group
              hover:shadow-2xl
              hover:border-neutral-600
            "
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
                  transition-opacity
                "
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-light text-neutral-200 tracking-tight">Misión</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Empoderar profesionales mediante una formación especializada en negociación estratégica, desarrollando competencias que transformen desafíos complejos en oportunidades de colaboración significativa y crecimiento mutuo.
            </p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="
              bg-neutral-800 
              rounded-3xl 
              p-10 
              border border-neutral-700
              shadow-xl
              shadow-black/40
              relative
              overflow-hidden
              transition-all 
              duration-500
              group
              hover:shadow-2xl
              hover:border-neutral-600
            "
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="flex items-center mb-8">
              <Globe 
                className="
                  w-12 h-12 
                  text-purple-400 
                  mr-6 
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity
                "
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-light text-neutral-200 tracking-tight">Visión</h3>
            </div>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Establecernos como el referente internacional en formación online de negociación estratégica, generando un impacto transformador que redefina la manera en que los profesionales abordan la resolución de conflictos y la construcción de acuerdos.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionVision;