import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Guarantee = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: '0.02'
        }} 
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-2xl mb-6">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Estamos comprometidos con tu éxito
            </h2>
            <p className="text-lg text-gray-400">
              Si no estás 100% satisfecho con el curso, te devolvemos tu dinero
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-800/50">
              {/* Left Side - Features */}
              <div className="p-10">
                <motion.div 
                  className="space-y-8"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: Clock,
                      title: "30 días de garantía",
                      description: "Tiempo suficiente para explorar todo el contenido y verificar la calidad del curso."
                    },
                    {
                      icon: CheckCircle,
                      title: "Sin condiciones",
                      description: "No hacemos preguntas. Si no estás satisfecho, te devolvemos tu dinero al instante."
                    },
                    {
                      icon: Shield,
                      title: "Proceso simple",
                      description: "Un email es suficiente para solicitar tu reembolso. Sin complicaciones."
                    }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-4"
                      variants={itemVariants}
                    >
                      <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-xl">
                        <feature.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Process */}
              <div className="p-10">
                <motion.h3 
                  className="text-lg font-medium text-white mb-8"
                  variants={itemVariants}
                >
                  Cómo funciona la garantía
                </motion.h3>
                
                <motion.div 
                  className="space-y-12"
                  variants={containerVariants}
                >
                  {[
                    {
                      step: "01",
                      title: "Inscríbete con confianza",
                      desc: "Accede inmediatamente a todo el contenido del curso."
                    },
                    {
                      step: "02",
                      title: "Explora el contenido",
                      desc: "Toma 30 días para revisar las lecciones y materiales."
                    },
                    {
                      step: "03",
                      title: "Decide si te quedas",
                      desc: "Si no estás satisfecho, solicita tu reembolso."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-12"
                      variants={itemVariants}
                    >
                      <div className="absolute left-0 top-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10">
                        <span className="text-sm font-medium text-blue-500">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                      {index < 2 && (
                        <div className="absolute left-4 top-12 h-12 w-px bg-gray-800" />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Bottom Banner */}
            <motion.div 
              className="px-10 py-6 bg-blue-500/5 border-t border-gray-800/50"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-gray-400">
                  Más de 2,000 estudiantes confían en nosotros
                </p>
                <a href="/Checkout">
                <button className="inline-flex items-center justify-center px-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg">
  Comenzar Ahora
</button>
</a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;