import React, { useEffect, useRef, useState } from 'react';
import { Shield, Zap, Star, Clock, Users, Award, ChevronRight } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';


const Benefits = () => {
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState<typeof benefits[number] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      benefitCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const benefits = [
    {
      category: 'Aprendizaje',
      mainBenefit: 'Metodología Elite',
      description: 'Sistema de aprendizaje práctico diseñado por expertos para maximizar tu desarrollo profesional',
      icon: Zap,
      features: [
        'Contenido premium actualizado semanalmente',
        'Proyectos basados en casos reales',
        'Recursos y herramientas profesionales'
      ],
      highlight: '98% efectividad'
    },
    {
      category: 'Mentoría',
      mainBenefit: 'Soporte Premium',
      description: 'Acompañamiento personalizado por expertos reconocidos internacionalmente en la industria',
      icon: Users,
      features: [
        'Mentores certificados internacionalmente',
        'Sesiones personalizadas ilimitadas',
        'Feedback y seguimiento continuo'
      ],
      highlight: '+15 años exp.'
    },
    {
      category: 'Certificación',
      mainBenefit: 'Validación Global',
      description: 'Obtén credenciales con reconocimiento internacional que potenciarán tu perfil profesional',
      icon: Award,
      features: [
        'Certificación con aval internacional',
        'Portfolio profesional certificado',
        'Acreditación profesional reconocida'
      ],
      highlight: 'ISO 9001'
    }
  ];

  const handleCardClick = (benefit: typeof benefits[number]) => {
    setCurrentBenefit(benefit);
    setIsPopupOpen(true);
  };

  return (
    <section className="bg-neutral-950 py-24 mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Beneficios del Programa
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Descubre por qué nuestro programa marca la diferencia en el desarrollo profesional de más de 2,500 graduados
          </p>
        </div>

        {/* Benefits Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100 group relative bg-neutral-900/80 rounded-2xl overflow-hidden border border-neutral-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => handleCardClick(benefit)}
            >
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent"></div>
              
              {/* Main Content */}
              <div className="p-8">
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium tracking-wider bg-emerald-400/10 text-emerald-400 px-3 py-1 rounded-full">
                    {benefit.category.toUpperCase()}
                  </span>
                  <div className="p-3 rounded-xl bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 group-hover:border-emerald-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                    <benefit.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Main Benefit */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-200 group-hover:to-emerald-400 transition-colors duration-300">
                  {benefit.mainBenefit}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start group/item bg-neutral-950/20 rounded-lg p-3 hover:bg-neutral-950/40 transition-colors duration-300">
                      <ChevronRight className="w-5 h-5 text-emerald-400 mr-2 transform group-hover/item:translate-x-1 transition-transform duration-300 mt-0.5" />
                      <span className="text-sm text-gray-300 group-hover/item:text-emerald-200 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlight */}
                <div className="flex items-center justify-end">
                  <div className="px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                    <span className="text-xs font-medium text-emerald-400">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16">
          {[
            { icon: Clock, text: 'Acceso 24/7' },
            { icon: Shield, text: 'Garantía de Calidad' },
            { icon: Star, text: 'Soporte Premium' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 px-5 py-2.5 rounded-full hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <stat.icon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-gray-300">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Dialog */}
      <Transition appear show={isPopupOpen} as={Fragment}>
  <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => setIsPopupOpen(false)}>
    <div className="min-h-screen px-4 text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Reemplazamos <Dialog.Overlay> */}
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity" />
      </Transition.Child>
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-900 shadow-xl rounded-2xl">
          <Dialog.Title as="h3" className="text-2xl font-bold text-white mb-4">
            {currentBenefit?.mainBenefit}
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-400">
              {currentBenefit?.description}
            </p>
            <div className="mt-4 space-y-3">
              {currentBenefit?.features?.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-emerald-400 bg-neutral-900/50 border border-emerald-500/20 rounded-md hover:bg-neutral-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              onClick={() => setIsPopupOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition>

    </section>
  );
};

export default Benefits;