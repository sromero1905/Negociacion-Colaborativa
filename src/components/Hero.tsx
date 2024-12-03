
import { FlipWords } from './ui/FlipWords';


const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative mb-60 mt-10 2xl:mb-80"> {/* Ajustar márgenes en pantallas grandes */}
      {/* Background Video for Desktop */}
      <div
        className="hidden md:block h-[85vh] w-full absolute top-0 left-0 rounded-2xl overflow-hidden"
        style={{ background: "black", overflow: "hidden" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with Filter */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
      </div>

      {/* Background Image for Mobile */}
      <div
        className="md:hidden h-[85vh] w-full absolute top-0 left-0 rounded-2xl overflow-hidden"
        style={{ background: "black", overflow: "hidden" }}
      >

        <img
          className="w-full h-full object-cover"
          src="/backgroundMobile.jpg"
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Overlay with Filter */}
        <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
      </div>

      <div className="flex justify-center relative mt-40 z-10">
        <div className="max-w-[90vw] md:max-w-3xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-100 mb-3" >
            Conexión Constructiva
          </p>

          <FlipWords
            words={[
              "Experiencia",
              "Confianza",
              "Crecimiento",
              "Asesoramiento",
              "Eficiencia",
              "Liderazgo",
            ]}
            duration={2000}
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4 text-white"
          />
          <p className="text-center md:tracking-wider mt-4 mb-3 text-base md:text-lg lg:text-xl text-white">
            Potenciamos el éxito inmobiliario con estrategias emocionales y de venta.
          </p>


        </div>
      </div>
    </div>
  );
};

export default Hero;
