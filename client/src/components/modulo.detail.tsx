import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { modulesinfo } from "../data/index";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  ChevronLeft, 
  BookMarked, 
  Target, 
  Users, 
  CheckCircle, 
  Clock 
} from "lucide-react";

// Subtle parallax scroll effect hook
const useSoftParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance / 2, distance / 2]);
};

const ModuleDetail: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = modulesinfo.find((mod) => mod.path === moduleId);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { scrollYProgress } = useScroll();

  // Softer parallax values
  const y1 = useSoftParallax(scrollYProgress, 30);
  const y2 = useSoftParallax(scrollYProgress, 50);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!module) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-neutral-50 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-neutral-900/10 opacity-50" />
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Módulo no encontrado
        </h2>
        <Link
          to="/"
          className="text-neutral-400 hover:text-neutral-50 transition-all duration-300 ease-in-out flex items-center space-x-2 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Volver al inicio</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-neutral-950 text-neutral-50 relative overflow-hidden"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeInOut"
      }}
    >
      {/* Soft Background Effects */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"
        />
      </motion.div>

      <div className="relative container max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-16">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: "easeOut"
          }}
          className="w-full z-10 relative"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-neutral-400 hover:text-neutral-50 
              transition-all duration-300 ease-in-out group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Volver al inicio</span>
          </Link>
        </motion.nav>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.3,
            ease: "easeOut"
          }}
          className="grid md:grid-cols-2 gap-8 items-center relative z-10"
        >
          <motion.div 
            style={{ y: y1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-100">
              {module.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Clock, label: "4 semanas", color: "blue" },
                { icon: BookMarked, label: "8 sesiones", color: "purple" },
                { icon: CheckCircle, label: "Certificado", color: "emerald" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex items-center space-x-2 bg-neutral-800/40 px-3 py-1.5 rounded-full 
                    border border-neutral-700/30 hover:bg-neutral-800/60 
                    transition-all duration-300 ease-in-out"
                >
                  <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                  <span className="text-xs text-neutral-300">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-neutral-400 max-w-xl leading-relaxed">
              {module.details.detail1.mobile}
            </p>
          </motion.div>
          <motion.div 
            style={{ y: y2 }}
            className="relative"
          >
            <motion.div 
              initial={{ 
                opacity: 0, 
                scale: 0.98,
                boxShadow: "0 0 0 rgba(0,0,0,0)"
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
              }}
              transition={{ 
                duration: 0.7, 
                delay: 0.5,
                ease: "easeOut"
              }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={module.image}
                alt={module.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { 
              icon: BookMarked, 
              title: "Contenido Estratégico", 
              description: "Material diseñado para impacto profesional y desarrollo de competencias avanzadas" 
            },
            { 
              icon: Target, 
              title: "Objetivos Precisos", 
              description: "Metas claras con metodología de evaluación y seguimiento personalizado" 
            },
            { 
              icon: Users, 
              title: "Networking Profesional", 
              description: "Conexión con expertos y profesionales de alto nivel en tu industria" 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              className="bg-neutral-800/30 border border-neutral-700/30 rounded-xl p-6 space-y-4 
                hover:bg-neutral-800/50 transition-all duration-300 ease-in-out 
                group cursor-pointer hover:border-neutral-600/40"
            >
              <feature.icon className="w-8 h-8 text-blue-400 
                group-hover:text-blue-300 transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-neutral-100">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Module Details */}
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            { 
              title: "Contenido del Módulo", 
              content: isMobile ? module.details.detail2.mobile : module.details.detail2.full 
            },
            { 
              title: "Objetivos de Aprendizaje", 
              content: isMobile ? module.details.detail3.mobile : module.details.detail3.full 
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-neutral-100">
                {section.title}
              </h2>
              <div className="bg-neutral-800/30 border border-neutral-700/30 rounded-xl p-6 
                hover:bg-neutral-800/40 transition-all duration-300 ease-in-out">
                <p className="text-neutral-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          className="text-center py-16 space-y-8"
        >
          <h2 className="text-4xl font-bold tracking-tight text-neutral-100">
            Impulsa tu Desarrollo Profesional
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Transforma tu trayectoria profesional con un módulo diseñado para profesionales ambiciosos. Desarrolla habilidades estratégicas y expande tu red de contactos.
          </p>
          
          <div className="flex justify-center items-center space-x-6 pt-8">
            <motion.button 
              initial={{ 
                backgroundImage: "linear-gradient(to right, rgb(15, 40, 85), rgb(15, 40, 95))",
                opacity: 0.9
              }}
              whileHover={{ 
                backgroundImage: "linear-gradient(to right, rgb(20, 50, 110), rgb(25, 60, 130))",
                opacity: 1,
                transition: { 
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}
              whileTap={{ scale: 0.99 }}
              className="relative px-10 py-3.5 text-neutral-100 font-medium rounded-xl 
                overflow-hidden
                transition-all duration-500 ease-in-out 
                bg-[rgb(15,40,85)]
                border border-neutral-800/50
                focus:outline-none focus:ring-2 focus:ring-neutral-700/40 focus:ring-offset-2 focus:ring-offset-neutral-950 
                shadow-xl shadow-neutral-900/30 hover:shadow-2xl hover:shadow-neutral-900/40
                transform hover:-translate-y-0.5"
            >
              <a href="/pricing">
              <span className="relative z-10 tracking-tight">
                Comenzar
              </span>
              </a>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-neutral-900/20 to-neutral-900/30 
                  opacity-0 group-hover:opacity-10 
                  transition-opacity duration-300 ease-in-out"
              />
            </motion.button>
            <Link
              to="/"
              className="text-neutral-400 hover:text-neutral-50 
                transition-all duration-300 ease-in-out
                underline underline-offset-4 font-medium"
            >
              Explorar Programas
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModuleDetail;