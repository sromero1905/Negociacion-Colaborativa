import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Target, 
  Users, 
  Award 
} from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    { text: "Metodología probada", icon: Target },
    { text: "Casos prácticos", icon: GraduationCap },
    { text: "Mentores expertos", icon: Users },
    { text: "Certificación profesional", icon: Award }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex items-center mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%), radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 container mx-auto px-6 py-20 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div variants={containerVariants} className="space-y-10">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5"
            >
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Próximo curso inicia en Marzo 2024</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Domina el Arte de la
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Negociación
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-400 leading-relaxed max-w-2xl">
                Desarrolla habilidades avanzadas de negociación y comunicación estratégica para transformar cada interacción en una oportunidad de éxito.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
              {features.map(({ text, icon: Icon }, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 bg-blue-500/5 rounded-xl p-4 sm:p-5 border border-blue-400/10 hover:bg-blue-500/10 hover:border-blue-400/20 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <span className="text-neutral-200 font-medium text-sm sm:text-base">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto">
                <a
                  href="/pricing"
                  className="group w-full px-8 py-4 rounded-xl font-medium
                  border border-emerald-500/30
                  bg-emerald-500/5 hover:bg-emerald-500/10
                  text-emerald-400 hover:text-emerald-300
                  transition-all duration-200
                  ring-1 ring-emerald-500/20 hover:ring-emerald-500/40
                  inline-block text-center no-underline"
                >
                  Iniciar Programa
                </a>
              </button>
              <button className="w-full sm:w-auto">
                <a
                  href="/mas-info"
                  className="group w-full px-8 py-4 rounded-xl font-medium
                  border border-blue-500/20
                  bg-blue-500/10 hover:bg-blue-500/20
                  text-blue-300 hover:text-blue-200
                  transition-all duration-200
                  shadow-lg shadow-black/20
                  inline-block text-center no-underline"
                >
                  Explorar Contenido
                </a>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element with Image */}
          <motion.div
            variants={imageVariants}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            <div className="relative w-full max-w-xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10" />
                
                {/* Image */}
                <img
                  src="../hero.jpg"
                  alt="Negociación estratégica"
                  className="w-full h-[750px] object-cover object-center opacity-80"
                />

                {/* Static overlay */}
                <div
                  className="absolute inset-0 opacity-40 z-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 50%)',
                    backgroundSize: '100% 100%'
                  }}
                />

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400/70" />
                      <div className="w-2 h-2 rounded-full bg-purple-400/70" />
                      <div className="w-2 h-2 rounded-full bg-pink-400/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;