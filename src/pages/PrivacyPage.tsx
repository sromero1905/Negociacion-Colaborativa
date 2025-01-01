import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Database, 
  Eye, 
  Share2, 
  Key, 
  Cookie, 
  Globe, 
  MessageSquare,
  AlertTriangle,
  Server
} from 'lucide-react';

const PrivacyPage = () => {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-400 mb-6">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="p-4 bg-blue-500/10 rounded-xl text-sm text-gray-300">
              En Negociación Colaborativa, tu privacidad es una prioridad. Esta política describe cómo recopilamos, 
              usamos y protegemos tu información personal.
            </div>
          </div>
        </motion.div>

        {/* Section Blocks */}
        <motion.div variants={containerVariants} className="space-y-12">
          {/* 1. Information We Collect */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Database className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                1. Información que Recopilamos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">1.1 Información Personal</h3>
                <p className="mb-4">
                  Recopilamos la siguiente información cuando te registras y utilizas nuestra plataforma:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Información de facturación</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Foto de perfil (opcional)</li>
                  <li>Información profesional relevante</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">1.2 Datos de Uso</h3>
                <p className="mb-4">
                  También recopilamos información sobre cómo interactúas con la plataforma:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Progreso en los cursos</li>
                  <li>Tiempo dedicado a cada lección</li>
                  <li>Interacciones con otros usuarios</li>
                  <li>Dispositivos y navegadores utilizados</li>
                  <li>Dirección IP y ubicación aproximada</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 2. How We Use Your Information */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                2. Cómo Utilizamos tu Información
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">2.1 Propósitos Principales</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Proporcionar acceso a los cursos y materiales</li>
                  <li>Procesar pagos y gestionar tu suscripción</li>
                  <li>Enviar actualizaciones importantes sobre el curso</li>
                  <li>Mejorar la experiencia de usuario</li>
                  <li>Proporcionar soporte técnico</li>
                  <li>Generar certificados de finalización</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">2.2 Comunicaciones</h3>
                <p className="mb-4">
                  Podemos contactarte a través de:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Correos electrónicos sobre el curso</li>
                  <li>Notificaciones de la plataforma</li>
                  <li>Actualizaciones de servicio importantes</li>
                  <li>Boletines informativos (opcional)</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 3. Data Protection */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                3. Protección de Datos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">3.1 Medidas de Seguridad</h3>
                <p className="mb-4">
                  Implementamos las siguientes medidas para proteger tu información:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encriptación SSL/TLS para todas las transmisiones de datos</li>
                  <li>Almacenamiento seguro en servidores protegidos</li>
                  <li>Acceso restringido al personal autorizado</li>
                  <li>Monitoreo continuo de seguridad</li>
                  <li>Copias de seguridad regulares</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">3.2 Retención de Datos</h3>
                <p>
                  Mantenemos tu información personal mientras:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Tu cuenta esté activa</li>
                  <li>Sea necesario para proporcionar nuestros servicios</li>
                  <li>Lo requiera la ley aplicable</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 4. Cookies and Tracking */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Cookie className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                4. Cookies y Seguimiento
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">4.1 Uso de Cookies</h3>
                <p className="mb-4">
                  Utilizamos cookies para:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mantener tu sesión activa</li>
                  <li>Recordar tus preferencias</li>
                  <li>Analizar el uso de la plataforma</li>
                  <li>Mejorar la navegación</li>
                  <li>Personalizar el contenido</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">4.2 Control de Cookies</h3>
                <p>
                  Puedes gestionar las cookies a través de:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Configuración del navegador</li>
                  <li>Panel de preferencias de la plataforma</li>
                  <li>Herramientas de gestión de consentimiento</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 5. Your Rights */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Key className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                5. Tus Derechos
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="mb-4">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Solicitar correcciones de datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Exportar tus datos en un formato portátil</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </div>
          </motion.section>

          {/* 6. International Data Transfers */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Globe className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                6. Transferencias Internacionales
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="mb-4">
                Tus datos pueden ser transferidos y procesados en servidores ubicados fuera de tu país. 
                Tomamos medidas para garantizar que estas transferencias cumplan con las leyes de 
                protección de datos aplicables:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cláusulas contractuales estándar</li>
                <li>Acuerdos de transferencia de datos</li>
                <li>Certificaciones de privacidad</li>
                <li>Evaluaciones de impacto en la privacidad</li>
              </ul>
            </div>
          </motion.section>

          {/* 7. Changes to Privacy Policy */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                7. Cambios en la Política
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad periódicamente. 
                Te notificaremos sobre cambios significativos a través de:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Correo electrónico</li>
                <li>Notificación en la plataforma</li>
                <li>Anuncio en nuestra página web</li>
              </ul>
            </div>
          </motion.section>

          {/* 8. Contact Information */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                8. Contacto
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p>
                Para cualquier pregunta sobre esta política de privacidad o tus datos personales, 
                puedes contactarnos a través de:
              </p>
              <ul className="list-disc pl-5 space-y-2">
              <li>Email: privacy@negociacioncolaborativa.com</li>
                <li>Formulario web: negociacioncolaborativa.com/privacidad</li>
                <li>Dirección postal: [Dirección de la empresa]</li>
                <li>Delegado de Protección de Datos: dpo@negociacioncolaborativa.com</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-500/10 rounded-xl">
                <p className="text-sm">
                  <strong className="text-blue-400">Nota importante:</strong> Para consultas relacionadas con tus datos personales, 
                  te pediremos verificar tu identidad antes de proporcionar cualquier información.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 9. Data Security Measures */}
          <motion.section variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
            <div className="flex items-center space-x-4 mb-6">
              <Server className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">
                9. Medidas de Seguridad Adicionales
              </h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-medium text-white mb-2">9.1 Protección de Datos en Reposo</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Encriptación AES-256 para datos almacenados</li>
                  <li>Segregación de datos sensibles</li>
                  <li>Controles de acceso basados en roles</li>
                  <li>Auditorías regulares de seguridad</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">9.2 Seguridad en la Transmisión</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Protocolos TLS 1.3</li>
                  <li>Certificados SSL verificados</li>
                  <li>Monitoreo de tráfico en tiempo real</li>
                  <li>Protección contra ataques MITM</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">9.3 Respuesta a Incidentes</h3>
                <p>
                  Contamos con un plan de respuesta a incidentes que incluye:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Notificación inmediata de brechas de seguridad</li>
                  <li>Procedimientos de recuperación de datos</li>
                  <li>Evaluación y mitigación de riesgos</li>
                  <li>Comunicación transparente con usuarios afectados</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              Tu privacidad es importante para nosotros. Si tienes alguna pregunta o inquietud, 
              no dudes en contactarnos.
            </p>
            <div className="flex justify-center space-x-4">
              
              <button className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl transition-colors backdrop-blur-sm">
              Contactar Soporte
              </button>
            </div>
          </motion.div>

          {/* Last Update Note */}
          <motion.div variants={itemVariants} className="mt-8 text-center text-sm text-gray-500">
            <p>
              Esta política de privacidad fue actualizada por última vez el {new Date().toLocaleDateString()}.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPage;