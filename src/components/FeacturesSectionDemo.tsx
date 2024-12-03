import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  IconAdjustmentsBolt,
  IconMessageCircle,
  IconUsers,
  IconShieldCheck,
  IconRouteAltLeft,
  IconTools,
} from "@tabler/icons-react";
import Feature from "./ui/Feacture";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Estrategias de Comercialización",
      description: "Diseñamos estrategias basadas en la comprensión emocional del mercado y potenciamos tu visión comercial.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Mejora Comunicacional",
      description: "Entrenamos en habilidades comunicativas y creamos un lenguaje organizacional coherente.",
      icon: <IconMessageCircle />,
    },
    {
      title: "Relaciones Comerciales",
      description: "Fortalecemos relaciones con proveedores y clientes y generamos colaboraciones duraderas.",
      icon: <IconUsers />,
    },
    {
      title: "Condiciones de Satisfacción",
      description: "Analizamos la satisfacción y diseñamos condiciones para relaciones sostenibles.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Desarrollo Estratégico",
      description: "Creamos estrategias personalizadas para destacar en el mercado.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Optimización de Procesos Internos",
      description: "Mejoramos la eficiencia de tus procesos para maximizar el rendimiento.",
      icon: <IconTools />,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto mt-10"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Feature {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  );
}
