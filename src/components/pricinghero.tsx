import React, { useState } from 'react';
import { Check, Building2, User, Shield, Clock, Award } from 'lucide-react';

const PricingHero = () => {
  const [planType, setPlanType] = useState('individual');

  return (
    <section className="relative py-24">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-300">
              Pricing Plans
            </span>
          </div>
          <h1 className="text-4xl font-semibold text-white tracking-tight">
            Selecciona el plan ideal para ti
          </h1>
        </div>

        {/* Plan Selector */}
        <div className="flex justify-center mb-16">
          <div className=" p-1.5 rounded-2xl backdrop-blur-sm">
            <div className="relative flex space-x-1">
              <button
                onClick={() => setPlanType('individual')}
                className={`relative px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  planType === 'individual'
                    ? 'text-gray-900 bg-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Individual</span>
                </div>
              </button>
              <button
                onClick={() => setPlanType('business')}
                className={`relative px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  planType === 'business'
                    ? 'text-gray-900 bg-white shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Empresas</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Plans Display */}
        <div className="max-w-5xl mx-auto">
          {planType === 'individual' ? (
            // Individual Plan
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                {/* Card Glow Effect */}
                <div className="absolute -inset-[0.5px] bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <div className="relative bg-gray-900 rounded-[20px] border border-gray-800">
                  {/* Top colored border */}
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-[20px]" />
                  
                  <div className="p-12">
                    {/* Plan Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Plan Individual
                        </h3>
                        <p className="text-gray-400">
                          Acceso completo al programa
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                        Más vendido
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-8 pb-8 border-b border-gray-800">
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-bold text-white">$497</span>
                        <span className="text-gray-400 ml-2">USD</span>
                      </div>
                      <p className="text-sm text-gray-400">Pago único - Sin cargos recurrentes</p>
                    </div>

                    {/* Key Benefits */}
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Acceso de por vida</h4>
                          <p className="text-sm text-gray-400">Sin límite de tiempo</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">Garantía</h4>
                          <p className="text-sm text-gray-400">30 días de garantía</p>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-5 mb-10">
                      {[
                        'Acceso completo a todo el contenido del curso',
                        'Recursos y plantillas descargables',
                        'Certificado de finalización verificado',
                        'Acceso a actualizaciones futuras',
                        'Comunidad privada de alumnos'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                          </div>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-xl transition-all duration-200 transform hover:translate-y-[-1px] hover:shadow-lg hover:shadow-blue-500/25">
                      Comenzar ahora
                    </button>
                  </div>

                  {/* Bottom Section */}
                  <div className="px-12 py-6 bg-gray-800/50 rounded-b-[20px] border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-gray-400">Satisfacción garantizada</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <img src="../visa-line.png" alt="Visa" className="h-6 opacity-50 hover:opacity-75 transition-opacity" />
                        <img src="../mastercard-line.png" alt="Mastercard" className="h-6 opacity-50 hover:opacity-75 transition-opacity" />
                        <img src="../bank-line.png" alt="Transferencia" className="h-6 opacity-50 hover:opacity-75 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Business Plans
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Plan */}
              <div className="relative group">
                <div className="absolute -inset-[0.5px] bg-gradient-to-r from-gray-500/50 to-gray-600/50 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-gray-900 rounded-[20px] border border-gray-800">
                  <div className="h-1.5 bg-gradient-to-r from-gray-400 to-gray-500" />
                  <div className="p-12">
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">Equipos</h3>
                      <p className="text-gray-400">Para equipos pequeños</p>
                      
                      <div className="mt-6">
                        <div className="flex items-baseline">
                          <span className="text-5xl font-bold text-white">$1,997</span>
                          <span className="text-gray-400 ml-2">USD</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Hasta 5 miembros</p>
                      </div>
                    </div>

                    <div className="space-y-5 mb-8">
                      {[
                        'Todo el contenido del curso',
                        'Dashboard de equipo',
                        'Reportes de progreso',
                        'Soporte prioritario',
                        'Sesiones grupales mensuales'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                          </div>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:translate-y-[-1px] hover:shadow-lg">
                      Contactar ventas
                    </button>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative group">
                <div className="absolute -inset-[0.5px] bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-gray-900 rounded-[20px] border border-gray-800">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  <div className="p-12">
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">Empresarial</h3>
                      <p className="text-gray-400">Solución personalizada</p>
                      
                      <div className="mt-6">
                        <div className="text-5xl font-bold text-white">Personalizado</div>
                        <p className="text-sm text-gray-400 mt-2">Contacta para más detalles</p>
                      </div>
                    </div>

                    <div className="space-y-5 mb-8">
                      {[
                        'Usuarios ilimitados',
                        'Contenido personalizado',
                        'Implementación dedicada',
                        'Soporte 24/7',
                        'Workshops exclusivos'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                          </div>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-xl transition-all duration-200 transform hover:translate-y-[-1px] hover:shadow-lg hover:shadow-blue-500/25">
                      Agendar llamada
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingHero;