import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { User, Mail, Phone, Building2, FileText, MapPin, Globe, Shield, CreditCard, Lock, AlertCircle, Check, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { EXCHANGE, PRICES } from '../config/pricing';
interface FormData {
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  pais: string;
  metodoPago: 'mercadopago';
}

interface FormErrors {
  [key: string]: string;
}

const CheckoutForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: '',
    metodoPago: 'mercadopago'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const publicKey = process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY;
    if (!publicKey) {
      console.error('REACT_APP_MERCADOPAGO_PUBLIC_KEY must be defined');
      return;
    }
    initMercadoPago(publicKey, {
      locale: "es-AR"
    });
  }, []);

  const redirectToPayment = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/create_preference", {
        title: "Curso Completo Pack Individual",
        quantity: 1,
        price: PRICES.COURSE_INDIVIDUAL,
        payer: {
          name: formData.nombre,
          surname: formData.apellido,
          email: formData.email,
          identification: {
            type: "DNI",
            number: formData.dni
          },
          address: {
            street_name: formData.direccion,
            street_number: "",
            zip_code: formData.codigoPostal
          }
        }
      });
      
      const { init_point } = response.data;
      if (init_point) {
        window.location.href = init_point;
      } else {
        alert('Error al procesar el pago. Por favor, intente nuevamente.');
      }
    } catch (error) {
      console.error('Error redirecting to payment:', error);
      alert('Error al procesar el pago. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    
    if (currentStep === 1) {
      if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
      if (!formData.apellido) newErrors.apellido = 'El apellido es requerido';
      if (!formData.email) newErrors.email = 'El email es requerido';
      if (!formData.dni) newErrors.dni = 'El DNI es requerido';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
    }

    if (currentStep === 2) {
      if (!formData.direccion) newErrors.direccion = 'La dirección es requerida';
      if (!formData.ciudad) newErrors.ciudad = 'La ciudad es requerida';
      if (!formData.codigoPostal) newErrors.codigoPostal = 'El código postal es requerido';
      if (!formData.pais) newErrors.pais = 'El país es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm(step)) {
      if (step < 2) {
        setStep(step + 1);
      } else {
        await redirectToPayment();
      }
    }
  };

  const renderFormError = (fieldName: keyof FormData) => {
    if (errors[fieldName]) {
      return (
        <span className="text-red-500 text-xs mt-1 flex items-center">
          <AlertCircle className="h-3 w-3 mr-1" />
          {errors[fieldName]}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header y Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-lg border border-gray-700/30">
              <img src="/api/placeholder/180/60" alt="Logo" className="h-10" />
            </div>
          </div>
          
          <div className="flex items-center justify-center max-w-3xl mx-auto bg-gray-800/30 p-6 rounded-2xl backdrop-blur-lg border border-gray-700/30">
            {[1, 2].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    step >= stepNumber ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30' : 'bg-gray-800'
                  }`}>
                    {step > stepNumber ? (
                      <Check className="h-6 w-6 text-white" />
                    ) : (
                      <span className="text-white font-semibold">{stepNumber}</span>
                    )}
                  </div>
                  <span className={`ml-4 ${
                    step >= stepNumber ? 'text-indigo-400' : 'text-gray-500'
                  } font-medium`}>
                    {stepNumber === 1 ? 'Datos Personales' : 'Dirección'}
                  </span>
                </div>
                {stepNumber < 2 && (
                  <div className={`w-32 h-0.5 mx-6 ${
                    step > stepNumber ? 'bg-indigo-600' : 'bg-gray-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario Principal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-gray-700/30">
              <div className="p-8 border-b border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-indigo-900/50 rounded-xl flex items-center justify-center backdrop-blur-lg border border-indigo-500/30">
                    {step === 1 ? <User className="h-5 w-5 text-indigo-400" /> :
                     <Building2 className="h-5 w-5 text-indigo-400" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {step === 1 ? 'Información Personal' : 'Dirección de Facturación'}
                    </h2>
                    <p className="text-sm text-gray-400 mt-2">
                      {step === 1 ? 'Complete sus datos personales' : 'Ingrese los datos de facturación'}
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8">
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Nombre</label>
                        <input
                          type="text"
                          name="nombre"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.nombre}
                        />
                        {renderFormError('nombre')}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Apellido</label>
                        <input
                          type="text"
                          name="apellido"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.apellido}
                        />
                        {renderFormError('apellido')}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">DNI</label>
                        <input
                          type="text"
                          name="dni"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.dni}
                        />
                        {renderFormError('dni')}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {renderFormError('email')}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Dirección</label>
                      <input
                        type="text"
                        name="direccion"
                        className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                        onChange={handleChange}
                        value={formData.direccion}
                      />
                      {renderFormError('direccion')}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Ciudad</label>
                        <input
                          type="text"
                          name="ciudad"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.ciudad}
                        />
                        {renderFormError('ciudad')}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">País</label>
                        <input
                          type="text"
                          name="pais"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.pais}
                        />
                        {renderFormError('pais')}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Código Postal</label>
                        <input
                          type="text"
                          name="codigoPostal"
                          className="w-full pl-4 pr-4 py-4 bg-gray-900/50 border border-gray-600/50 text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 backdrop-blur-lg"
                          onChange={handleChange}
                          value={formData.codigoPostal}
                        />
                        {renderFormError('codigoPostal')}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200 border border-gray-700/50"
                    >
                      Volver
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex items-center justify-center space-x-2 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/30 ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${step === 1 ? 'ml-auto' : ''}`}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{step === 2 ? 'Proceder al Pago' : 'Continuar'}</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-2xl shadow-xl sticky top-6 backdrop-blur-lg border border-gray-700/30">
              <div className="p-8 border-b border-gray-700/50">
                <h2 className="text-2xl font-semibold text-white">Resumen del Pedido</h2>
              </div>
              
              <div className="p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-lg border border-indigo-500/30">
                      <FileText className="h-8 w-8 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">Curso Negociación Individual</h3>
                      <p className="text-sm text-gray-400 mt-2">Acceso completo al curso</p>
                      <div className="flex items-center mt-3">
                        <Shield className="h-4 w-4 text-green-400 mr-1" />
                        <span className="text-xs text-green-400">Garantía de 30 días</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-700/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white font-medium">$ {PRICES.COURSE_INDIVIDUAL}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                    
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-gray-700/50">
                    <span className="text-lg font-semibold text-white">Total</span>
                    <span className="text-2xl font-bold text-indigo-400">${ PRICES.COURSE_INDIVIDUAL}</span>
                  </div>

                  <div className="bg-gray-900/30 rounded-xl p-4 backdrop-blur-lg border border-gray-700/30">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Lock className="h-5 w-5 text-indigo-400" />
                      </div>
                      <p className="text-sm text-gray-400">
                        Pago seguro procesado por MercadoPago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <img src="/MP_RGB_HANDSHAKE_color-blanco_vert.png" alt="MercadoPago" className="h-20 opacity-75 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con información de seguridad */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-400">
            <Lock className="h-4 w-4 text-indigo-400" />
            <span>Pago 100% seguro</span>
            <span>•</span>
            <span>Procesado por MercadoPago</span>
            <span>•</span>
            <span>Garantía de satisfacción</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;