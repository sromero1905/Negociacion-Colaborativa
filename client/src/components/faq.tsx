import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const faqs = [
    {
      question: "¿Qué incluye exactamente el curso?",
      answer: "El curso incluye acceso completo a todas las lecciones, recursos descargables, plantillas de negociación, ejercicios prácticos y acceso a nuestra comunidad privada. Además, recibirás actualizaciones gratuitas cuando agreguemos nuevo contenido."
    },
    {
      question: "¿Por cuánto tiempo tengo acceso al curso?",
      answer: "Tienes acceso de por vida al curso y todos sus materiales. Una vez que te inscribas, podrás acceder al contenido cuando quieras y las veces que desees. Esto incluye también todas las actualizaciones futuras del contenido."
    },
    {
      question: "¿Cómo funciona la garantía de devolución?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si por alguna razón no estás completamente satisfecho con el curso, puedes solicitar un reembolso completo dentro de los primeros 30 días después de tu compra."
    },
    {
      question: "¿El certificado tiene algún valor oficial?",
      answer: "El certificado demuestra que has completado exitosamente nuestro programa de negociación. Si bien no es un título universitario, es reconocido en el ámbito profesional y puede ser una valiosa adición a tu CV y perfil de LinkedIn."
    },
    {
      question: "¿Hay opciones de pago en cuotas?",
      answer: "Sí, ofrecemos la posibilidad de pagar en cuotas a través de varios métodos de pago. Puedes elegir entre pago único con descuento o dividir el pago en 3, 6 o 12 cuotas mensuales."
    },
    {
      question: "¿Qué soporte recibo después de la compra?",
      answer: "Tendrás acceso a soporte por email con respuesta garantizada en 24 horas, acceso a nuestra comunidad privada donde podrás hacer preguntas y networking, y sesiones mensuales de Q&A en grupo con nuestros instructores."
    }
  ];

  return (
    <section className="py-24">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400">
            Todo lo que necesitas saber sobre el curso y el proceso de inscripción
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              {/* FAQ Item */}
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-800/50"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-blue-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-blue-400" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <div className="border-t border-gray-800 pt-6">
                      <p className="text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a href="/contact">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl transition-colors backdrop-blur-sm">
            Contáctanos
          </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;