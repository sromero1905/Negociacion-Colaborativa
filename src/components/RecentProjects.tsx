import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { GlobeAltIcon, AcademicCapIcon, ChartBarIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-black-900 text-gray-200 rounded-xl border border-gray-300 border-opacity-60 2xl:mt-18 2xl:mb-22">
      <div 
        ref={ref}
        className="relative isolate overflow-hidden bg-black-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 rounded-xl"
      >
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600"
            style={{
              maskImage:
                "radial-gradient(circle, rgba(31,41,55,1) 0%, transparent 100%)",
            }}
          >
            {/* SVG content */}
          </svg>
        </motion.div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 rounded-xl">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <motion.p
                  className="text-base font-semibold leading-7 text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Optimiza tu inversión
                </motion.p>

                <motion.h1
                  className="mt-2 text-3xl font-bold tracking-tight text-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Transformación Inmobiliaria
                </motion.h1>

                <div className="relative hidden md:block">
                  <motion.p
                    className="absolute top-4 text-lg leading-8 text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    En Conexión Constructiva, combinamos coaching ontológico y estrategias de PNL para transformar empresas inmobiliarias y constructoras, ayudando a cada organización a alcanzar metas desafiantes con una dirección emocional efectiva.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <img
              alt=""
              src="/maderonew.jpg"
              className="w-full max-w-[24rem] md:max-w-[28rem] lg:w-[32rem] lg:max-w-none rounded-xl bg-gray-600 shadow-xl ring-1 ring-gray-500"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
                <motion.ul
                  role="list"
                  className="mt-6 space-y-8 text-gray-400"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex gap-x-3">
                    <GlobeAltIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-gray-300"
                    />
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Enfoque Integral.
                      </strong>{" "}
                        Integramos coaching ontológico y PNL con el mercado inmobiliario para un enfoque único.
                    </span>
                  </motion.li>
                  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex gap-x-3">
                    <AcademicCapIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-gray-300"
                    />
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Experiencia Especializada.
                      </strong>{" "}
                        Contamos con profesionales en habilidades sociales y expertos en el mercado inmobiliario.
                    </span>
                  </motion.li>
                  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex gap-x-3">
                    <ChartBarIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-gray-300"
                    />
                    <span>
                      <strong className="font-semibold text-gray-100">
                        Resultados Tangibles.
                      </strong>{" "}
                        Transformamos organizaciones y generamos un impacto positivo en el sector.
                    </span>
                  </motion.li>
                </motion.ul>

                <motion.p
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                >
                  Nuestro equipo está comprometido en brindarte un servicio de calidad, asegurando que cada etapa se maneje con profesionalismo y eficacia.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
