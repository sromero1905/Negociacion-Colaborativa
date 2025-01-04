import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus('sending');
    
    try {
      // Simulated async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        topic: '', 
        message: '' 
      });
      setFormStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const topicOptions = [
    "Información de Cursos",
    "Soporte Académico",
    "Certificaciones",
    "Desarrollo Profesional",
    "Otro"
  ];

  return (
    <div className="bg-gray-950 py-8 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gray-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
            border border-gray-800/30 
            shadow-xl shadow-black/10 
            overflow-hidden w-full"
        >
          <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <MessageCircle 
                  className="text-indigo-500/70" 
                  size={32} 
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4">
                <span className="font-semibold">Contacta</span> Nuestro Equipo
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                Estamos listos para guiarte en tu journey de desarrollo profesional. 
                Comparte tus dudas o inquietudes y nos pondremos en contacto contigo.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formStatus !== 'success' ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-white/70 text-sm ml-1 block">Nombre Completo</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        disabled={formStatus === 'sending'}
                        className="w-full bg-gray-800/40 border border-gray-700/20 rounded-xl px-4 py-3 text-white 
                          focus:outline-none focus:ring-2 focus:ring-blue-500/40 
                          transition-all duration-300 placeholder-gray-500
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-white/70 text-sm ml-1 block">Correo Electrónico</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Tu correo electrónico"
                        required
                        disabled={formStatus === 'sending'}
                        className="w-full bg-gray-800/40 border border-gray-700/20 rounded-xl px-4 py-3 text-white 
                          focus:outline-none focus:ring-2 focus:ring-blue-500/40 
                          transition-all duration-300 placeholder-gray-500
                          disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-white/70 text-sm ml-1 block">Tema de Consulta</label>
                    <select 
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'sending'}
                      className="w-full bg-gray-800/40 border border-gray-700/20 rounded-xl px-4 py-3 text-white 
                        focus:outline-none focus:ring-2 focus:ring-blue-500/40 
                        transition-all duration-300
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" disabled>Selecciona un tema</option>
                      {topicOptions.map((topic, index) => (
                        <option key={index} value={topic} className="bg-gray-900">{topic}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-white/70 text-sm ml-1 block">Mensaje</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu consulta o necesidad"
                      required
                      rows={5}
                      disabled={formStatus === 'sending'}
                      className="w-full bg-gray-800/40 border border-gray-700/20 rounded-xl px-4 py-3 text-white 
                        focus:outline-none focus:ring-2 focus:ring-blue-500/40 
                        transition-all duration-300 placeholder-gray-500 resize-none
                        disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    whileHover={{ 
                      scale: formStatus !== 'sending' ? 1.03 : 1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: formStatus !== 'sending' ? 0.97 : 1,
                      transition: { duration: 0.1 }
                    }}
                    className={`w-full py-3 sm:py-4 rounded-xl 
                      transition-all duration-300 
                      flex items-center justify-center space-x-3
                      focus:outline-none focus:ring-2 focus:ring-indigo-500/40
                      disabled:opacity-50 disabled:cursor-not-allowed
                      ${formStatus !== 'sending' 
                        ? 'bg-white/90 text-gray-900 hover:bg-white shadow-md hover:shadow-xl' 
                        : 'bg-gray-800/50 text-white'
                      }`}
                  >
                    {formStatus === 'sending' ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <>
                        <Send size={20} className="opacity-80" />
                        <span>Enviar Consulta</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-4 sm:space-y-6"
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="bg-indigo-500/20 p-4 sm:p-6 rounded-full">
                      <Check className="w-10 h-10 sm:w-14 sm:h-14 text-indigo-500" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-light text-white mb-3 sm:mb-4">
                    Consulta <span className="font-semibold">Enviada</span>
                  </h2>
                  <p className="text-gray-400 max-w-md mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
                    Hemos recibido tu mensaje. Nuestro equipo lo revisará 
                    y se pondrá en contacto contigo pronto.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;