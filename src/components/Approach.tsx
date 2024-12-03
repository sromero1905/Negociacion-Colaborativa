import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Compare } from "./ui/compare";
import styles from "./ui/CompareDemo.module.css"; // Importa tus estilos si es necesario

export function CompareDemo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // La animación se activará cuando el 10% del componente sea visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }} // Cambiar a `scale` para una animación más suave
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.95, // Animar el tamaño para suavidad
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Duración más larga y transición más suave
      className="relative p-4 mt-20"
    >
      {/* Título minimalista, oculto en móviles tanto en vertical como horizontal */}
      <h2 className="hidden lg:block text-4xl font-bold text-gray-100 text-center mb-8">
        Visualiza la Transformación
      </h2>

      {/* Contenedor de comparación con fondo negro y borde grisáceo */}
      <div className="relative bg-black p-4 border rounded-3xl border-gray-600 hidden sm:block">
        <div className="flex gap-60 overflow-hidden">
          <div className="bg-black p-2 rounded-lg">
            <Compare
              firstImage="alvearConstr.jpg"
              secondImage="alvear.jpg"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
          <div className="bg-black p-2 rounded-lg">
            <Compare
              firstImage="./maderoConstruccion.jpeg"
              secondImage="./madero.jpeg"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
