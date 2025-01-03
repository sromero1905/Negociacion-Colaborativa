import React, { useState } from 'react';
import { User, Mail, Phone, Building2, FileText, MapPin, Globe, Shield, CreditCard, Lock } from 'lucide-react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    pais: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos de facturación:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header con Logo y Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <img src="/api/placeholder/180/60" alt="Logo" className="h-8" />
            </div>
          </div>
          
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">1</span>
              </div>
              <span className="ml-3 text-blue-600 font-medium">Datos de Facturación</span>
            </div>
            <div className="w-32 h-1 bg-blue-600 mx-4" />
            <div className="flex items-center opacity-40">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold">2</span>
              </div>
              <span className="ml-3 text-gray-600 font-medium">Pago Seguro</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información Personal */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Información Personal</h2>
                    <p className="text-sm text-gray-500 mt-1">Complete sus datos personales</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="nombre"
                          className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onChange={handleChange}
                          value={formData.nombre}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="apellido"
                          className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onChange={handleChange}
                          value={formData.apellido}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">DNI</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="dni"
                          className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onChange={handleChange}
                          value={formData.dni}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onChange={handleChange}
                          value={formData.email}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Dirección de Facturación</h2>
                    <p className="text-sm text-gray-500 mt-1">Ingrese los datos de facturación</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                  <input
                    type="text"
                    name="direccion"
                    className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    onChange={handleChange}
                    value={formData.direccion}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                    <input
                      type="text"
                      name="ciudad"
                      className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      onChange={handleChange}
                      value={formData.ciudad}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">País</label>
                    <input
                      type="text"
                      name="pais"
                      className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      onChange={handleChange}
                      value={formData.pais}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      onChange={handleChange}
                      value={formData.codigoPostal}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Continuar al Pago Seguro</span>
                  <Lock className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm sticky top-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">Resumen del Pedido</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">Curso Negociación Individual</h3>
                      <p className="text-sm text-gray-500 mt-1">Acceso completo al curso</p>
                      <div className="flex items-center mt-2">
                        <Shield className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">Garantía de 30 días</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800 font-medium">$100.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">IVA (21%)</span>
                      <span className="text-gray-800 font-medium">$21.00</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-blue-600">$121.00</span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Pago seguro con cifrado SSL
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
                    <img src="/api/placeholder/40/25" alt="Mastercard" className="h-6" />
                    <img src="/api/placeholder/40/25" alt="American Express" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con información de seguridad */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Lock className="h-4 w-4" />
            <span>Pago 100% seguro</span>
            <span>•</span>
            <span>Cifrado SSL</span>
            <span>•</span>
            <span>Garantía de satisfacción</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;