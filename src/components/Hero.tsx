import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const abstractImageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 opacity-100"></div>
      
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      ></div>

      {/* Geometric Accent */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-1/2 -right-1/2 w-full h-full 
        bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 
        rounded-full blur-3xl opacity-20"
      ></motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 container mx-auto px-6 max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="
                text-5xl md:text-6xl font-bold 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-neutral-100 to-neutral-400
                leading-tight tracking-tight
              "
            >
              Negociación
              <br />
              Estratégica
            </motion.h1>

            {/* Description */}
            <motion.div 
              variants={itemVariants}
              className="
                text-xl text-neutral-300 
                leading-relaxed 
                relative
                pl-6
                before:absolute before:left-0 before:top-0 before:bottom-0 
                before:w-1 before:bg-gradient-to-b before:from-blue-600 before:to-purple-600
              "
            >
              <p>
                Transforma desafíos en oportunidades con técnicas de comunicación avanzadas y estrategias de resolución de conflictos de alto impacto.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  px-10 py-4 
                  bg-gradient-to-r from-blue-600 to-purple-700
                  text-white 
                  font-semibold 
                  rounded-xl 
                  hover:from-blue-700 hover:to-purple-800
                  transition-all duration-300 
                  shadow-xl 
                  hover:shadow-blue-500/40
                "
              >
                Comenzar Programa
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  px-10 py-4 
                  border border-neutral-700 
                  text-neutral-300 
                  rounded-xl 
                  bg-transparent
                  hover:bg-neutral-800/50 
                  hover:border-neutral-600
                  transition-all duration-300 
                  shadow-md
                "
              >
                Más Información
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Abstract Visual Element */}
          <motion.div 
            variants={abstractImageVariants}
            className="hidden md:flex items-center justify-center relative"
          >
            <div className="
              absolute 
              -inset-12 
              bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 
              rounded-[3rem] 
              blur-3xl 
              opacity-50
            "></div>

            <div className="
              relative 
              w-[480px] 
              h-[480px] 
              bg-neutral-900/30 
              border border-neutral-700/30 
              rounded-[2.5rem] 
              backdrop-blur-lg 
              flex items-center justify-center
              overflow-hidden
              shadow-2xl
            ">
              <motion.div 
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="
                  w-72 h-72 
                  bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                  rounded-full 
                  blur-md
                "
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;