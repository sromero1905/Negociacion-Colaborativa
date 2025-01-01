import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Book, Scale, Lock, Users, FileText, MessageSquare, Zap, AlertTriangle, Award } from 'lucide-react';

const TermsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            opacity: '0.02'
          }} 
        />
      </div>

      <motion.div 
        className="relative max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-400 mb-6">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="p-4 bg-blue-500/10 rounded-xl text-sm text-gray-300">
              Por favor, lee detenidamente estos términos y condiciones antes de utilizar nuestros servicios. Al acceder o utilizar el curso de Negociación Colaborativa, aceptas estar legalmente vinculado por estos términos.
            </div>
          </div>
        </motion.div>

        {/* Section Blocks */}
        <motion.div variants={containerVariants} className="space-y-12">
          {/* 1. Introduction */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Book className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                1. Introducción y Definiciones
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">1.1 El Acuerdo</h3>
                <p>
                  Este documento constituye un acuerdo legal vinculante entre tú ("el Usuario", "el Estudiante" o "tú") y Negociación Colaborativa ("nosotros", "nuestro" o "la Plataforma"), que rige el uso de nuestro contenido educativo, plataforma de aprendizaje y servicios relacionados.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">1.2 Definiciones</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>"Contenido del Curso" se refiere a todos los materiales educativos, incluyendo pero no limitado a videos, documentos, presentaciones, ejercicios y recursos descargables.</li>
                  <li>"Plataforma" se refiere al sistema de gestión de aprendizaje donde se aloja el contenido del curso.</li>
                  <li>"Suscripción" se refiere al acceso pagado al contenido del curso.</li>
                  <li>"Certificado" se refiere al documento emitido tras la finalización exitosa del curso.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">1.3 Aceptación de los Términos</h3>
                <p>
                  Al registrarte en la plataforma, realizar un pago o acceder a cualquier parte del contenido del curso, confirmas que:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Has leído y comprendido estos términos y condiciones</li>
                  <li>Aceptas estar legalmente vinculado por ellos</li>
                  <li>Eres mayor de edad en tu jurisdicción</li>
                  <li>Tienes la capacidad legal para celebrar contratos vinculantes</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 2. Access and Usage */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Lock className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                2. Acceso y Uso del Contenido
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">2.1 Licencia de Uso</h3>
                <p>
                  Tras la compra exitosa del curso, se te otorga una licencia personal, no exclusiva, intransferible y limitada para:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Acceder y visualizar el contenido del curso para tu uso personal</li>
                  <li>Descargar los materiales designados como descargables</li>
                  <li>Participar en las actividades y ejercicios del curso</li>
                  <li>Acceder a la comunidad privada y foros de discusión</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">2.2 Restricciones de Uso</h3>
                <p>
                  Está estrictamente prohibido:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Compartir tu cuenta o credenciales de acceso con terceros</li>
                  <li>Copiar, reproducir, distribuir o modificar el contenido del curso</li>
                  <li>Grabar o capturar las sesiones en vivo o el contenido en video</li>
                  <li>Utilizar el contenido con fines comerciales</li>
                  <li>Intentar eludir las medidas de seguridad de la plataforma</li>
                  <li>Revender o sublicenciar el acceso al curso</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">2.3 Duración del Acceso</h3>
                <p>
                  El acceso al curso es de por vida, lo que significa que podrás acceder al contenido indefinidamente, siempre que:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Mantengas el cumplimiento de estos términos y condiciones</li>
                  <li>La plataforma continúe operando y ofreciendo el curso</li>
                  <li>No se realicen cambios tecnológicos que hagan imposible la provisión del servicio</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 3. Payments and Refunds */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Scale className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                3. Pagos y Reembolsos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">3.1 Pagos y Precios</h3>
                <p>
                  Los precios están sujetos a las siguientes condiciones:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Todos los precios se muestran en Pesos Argentinos (ARS)</li>
                  <li>Los precios pueden variar según promociones y ofertas especiales</li>
                  <li>Se respetará el precio mostrado al momento de la compra</li>
                  <li>Los impuestos aplicables se calcularán según tu ubicación</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">3.2 Métodos de Pago</h3>
                <p>
                  Aceptamos los siguientes métodos de pago:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Tarjetas de crédito/débito (Visa, Mastercard, American Express)</li>
                  <li>Transferencia bancaria (solo para planes empresariales)</li>
                  <li>Otros métodos de pago según disponibilidad en tu región</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">3.3 Política de Reembolso</h3>
                <p>
                  Ofrecemos una garantía de satisfacción de 30 días bajo las siguientes condiciones:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>La solicitud debe realizarse dentro de los primeros 30 días tras la compra</li>
                  <li>Debes haber completado menos del 30% del contenido del curso</li>
                  <li>El reembolso se procesará usando el método de pago original</li>
                  <li>El procesamiento puede tomar hasta 10 días hábiles</li>
                </ul>
                
                <div className="mt-4 p-4 bg-blue-500/10 rounded-xl">
                  <p className="text-sm">
                    <strong className="text-blue-400">Nota importante:</strong> Los reembolsos para planes empresariales están sujetos a términos específicos detallados en el contrato correspondiente.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 4. Intellectual Property */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <FileText className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                4. Propiedad Intelectual
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">4.1 Derechos de Autor</h3>
                <p>
                  Todo el contenido del curso está protegido por derechos de autor y otras leyes de propiedad intelectual. Esto incluye:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Videos y grabaciones</li>
                  <li>Materiales escritos y documentación</li>
                  <li>Ejercicios y casos de estudio</li>
                  <li>Logotipos y marcas registradas</li>
                  <li>Software y código fuente</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">4.2 Uso Autorizado</h3>
                <p>
                  Los estudiantes pueden usar el material únicamente para:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Aprendizaje personal</li>
                  <li>Referencia en su práctica profesional</li>
                  <li>Ejercicios y actividades del curso</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 5. User Conduct */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                5. Conducta del Usuario
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">5.1 Normas de la Comunidad</h3>
                <p>
                  Los usuarios deben mantener un comportamiento profesional y respetuoso en todas las interacciones, incluyendo:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Comentarios y discusiones en los foros</li>
                  <li>Sesiones grupales y workshops</li>
                  <li>Comunicación con otros estudiantes</li>
                  <li>Interacciones con los instructores</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">5.2 Comportamientos Prohibidos</h3>
                <p>
                  Los siguientes comportamientos están estrictamente prohibidos:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Acoso o intimidación a otros usuarios</li>
                  <li>Compartir contenido inapropiado o ilegal</li>
                  <li>Spam o publicidad no autorizada</li>
                  <li>Suplantación de identidad</li>
                  <li>Uso de lenguaje ofensivo o discriminatorio</li>
                  <li>Cualquier actividad que interrumpa la experiencia de aprendizaje</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">5.3 Consecuencias</h3>
                <p>
                  El incumplimiento de estas normas puede resultar en:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Advertencias por escrito</li>
                  <li>Suspensión temporal del acceso</li>
                  <li>Terminación permanente de la cuenta sin reembolso</li>
                  <li>Acciones legales en casos graves</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 6. Privacy and Data Protection */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                6. Privacidad y Protección de Datos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">6.1 Recopilación de Datos</h3>
                <p>
                  Recopilamos y procesamos los siguientes tipos de información:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Información de registro y perfil</li>
                  <li>Datos de progreso en el curso</li>
                  <li>Información de pago</li>
                  <li>Registros de actividad en la plataforma</li>
                  <li>Comunicaciones con el soporte técnico</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">6.2 Uso de la Información</h3>
                <p>
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Proporcionar acceso al curso y sus materiales</li>
                  <li>Personalizar tu experiencia de aprendizaje</li>
                  <li>Procesar pagos y reembolsos</li>
                  <li>Enviar actualizaciones importantes sobre el curso</li>
                  <li>Mejorar nuestros servicios y contenido</li>
                  <li>Generar certificados de finalización</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 7. Technical Requirements */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Zap className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                7. Requisitos Técnicos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">7.1 Requisitos Mínimos</h3>
                <p>
                  Para acceder al curso, necesitas:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Conexión a Internet estable (mínimo 5 Mbps)</li>
                  <li>Navegador web actualizado (Chrome, Firefox, Safari o Edge)</li>
                  <li>Dispositivo con capacidad de reproducción de video HD</li>
                  <li>Espacio de almacenamiento para materiales descargables</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">7.2 Responsabilidad Técnica</h3>
                <p>
                  El usuario es responsable de:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Mantener su equipo y software actualizado</li>
                  <li>Asegurar una conexión a Internet adecuada</li>
                  <li>Resolver problemas técnicos de su lado</li>
                  <li>Reportar problemas técnicos de la plataforma</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 8. Changes and Updates */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                8. Cambios y Actualizaciones
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">8.1 Modificaciones</h3>
                <p>
                  Nos reservamos el derecho de:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Actualizar estos términos y condiciones</li>
                  <li>Modificar el contenido del curso</li>
                  <li>Cambiar las características de la plataforma</li>
                  <li>Ajustar los precios de futuros estudiantes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">8.2 Notificaciones</h3>
                <p>
                  Te notificaremos sobre cambios importantes mediante:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Correo electrónico registrado</li>
                  <li>Anuncios en la plataforma</li>
                  <li>Notificaciones en el panel de usuario</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 9. Contact Information */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                9. Información de Contacto
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>
                Para cualquier consulta sobre estos términos, puedes contactarnos a través de:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email: soporte@negociacioncolaborativa.com</li>
                <li>Centro de ayuda: help.negociacioncolaborativa.com</li>
                <li>Horario de atención: Lunes a Viernes, 9:00 - 18:00 (GMT-5)</li>
              </ul>
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Al utilizar nuestros servicios, confirmas que has leído y aceptado estos términos y condiciones.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl transition-colors backdrop-blur-sm">
                Contactar Soporte
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsPage;