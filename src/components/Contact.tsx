import React, { useEffect, useState } from 'react';
import { Mail, Phone, Globe, ExternalLink } from 'lucide-react';

const AccessContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="contact" className="bg-[#0A0A0A] py-32 mt-15">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-6">
            Contacto
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarte. No dudes en contactarnos a través de cualquiera de estos canales.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Email Card */}
          <div className={`group rounded-lg bg-[#111111] border border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#141414] transition-all duration-500 p-8 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-[#1A1A1A] rounded-xl group-hover:scale-105 group-hover:bg-[#202020] transition-all duration-300">
                <Mail className="w-8 h-8 text-white/90" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-2">Email</h3>
                <a 
                  href="mailto:info@negociacioncolaborativa.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  info@negociacioncolaborativa.com
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className={`group rounded-lg bg-[#111111] border border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#141414] transition-all duration-500 p-8 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-[#1A1A1A] rounded-xl group-hover:scale-105 group-hover:bg-[#202020] transition-all duration-300">
                <Phone className="w-8 h-8 text-white/90" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-2">Teléfono</h3>
                <a 
                  href="tel:+541112345678" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  +54 11 1234 5678
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className={`group rounded-lg bg-[#111111] border border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#141414] transition-all duration-500 p-8 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-[#1A1A1A] rounded-xl group-hover:scale-105 group-hover:bg-[#202020] transition-all duration-300">
                <Globe className="w-8 h-8 text-white/90" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-2">Ubicación</h3>
                <p className="text-gray-400">
                  Programa 100% online,<br />
                  disponible a nivel global
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`rounded-lg bg-[#111111] border border-[#1A1A1A] p-8 max-w-2xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-lg font-semibold text-white/90 mb-1">
            Horario de atención
          </h3>
          <p className="text-gray-400">
            Lunes a Viernes: 9:00 - 18:00 (GMT-3)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccessContact;