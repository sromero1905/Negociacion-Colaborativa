import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Clock, Shield } from 'lucide-react';

const ContactHero: React.FC = () => {
  const supportDetails = [
    {
      icon: <MessageSquare className="text-blue-400" size={24} />,
      title: "Respuesta Rápida",
      description: "Respondemos tus consultas en menos de 24 horas"
    },
    {
      icon: <Clock className="text-green-400" size={24} />,
      title: "Horario Extendido",
      description: "Soporte de lunes a viernes, 9:00 AM a 7:00 PM"
    },
    {
      icon: <Shield className="text-indigo-500" size={24} />,
      title: "Soporte Especializado",
      description: "Equipo certificado en resolución de dudas"
    }
  ];

  return (
    <div className="relative bg-gray-950 py-16 md:py-24 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <HelpCircle 
              className="text-blue-500/70 animate-pulse" 
              size={48} 
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Estamos <span className="font-semibold text-white">Aquí para Ayudarte</span>
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
            En Negociación Colaborativa, nos comprometemos a brindarte el mejor soporte 
            para tu desarrollo profesional. Nuestro equipo está dedicado a resolver tus 
            dudas y guiarte en cada paso de tu journey de aprendizaje.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {supportDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 
                  border border-gray-800/30 
                  hover:bg-gray-900/60 
                  transition-all duration-300 
                  transform hover:-translate-y-1"
              >
                <div className="mb-4">{detail.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{detail.title}</h3>
                <p className="text-gray-400 text-sm">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;