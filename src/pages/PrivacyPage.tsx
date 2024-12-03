import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useRouter
import Footer from '../components/Footer';

const PrivacyPage = () => {
  const navigate = useNavigate(); // Crea la instancia de navigate

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <header className="py-8 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Política de Privacidad</h1>
          <button
            onClick={() => navigate(-1)} // Usa navigate(-1) para volver a la página anterior
            className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Volver
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Introducción</h2>
        <p className="mb-6">
          Esta Política de Privacidad describe cómo Conexión Constructiva S.A.
          recopila, utiliza y protege la información personal que usted nos
          proporciona a través de nuestro sitio web. Al utilizar nuestro sitio
          web, usted acepta las prácticas descritas en esta Política de
          Privacidad.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Información que Recopilamos
        </h2>
        <p className="mb-6">
          Podemos recopilar información personal que usted nos proporciona
          directamente a través de formularios de contacto. Esta información
          puede incluir su nombre, dirección de correo electrónico y cualquier
          otra información que usted decida compartir con nosotros.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Uso de la Información</h2>
        <p className="mb-6">
          Utilizamos la información recopilada para responder a sus consultas y
          mejorar nuestros servicios. No compartimos su información personal con
          terceros, salvo que sea necesario para cumplir con la ley o proteger
          nuestros derechos.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Protección de la Información
        </h2>
        <p className="mb-6">
          Implementamos medidas de seguridad razonables para proteger su
          información personal. Sin embargo, no podemos garantizar la seguridad
          absoluta de la información transmitida a través de Internet.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Enlaces a Terceros</h2>
        <p className="mb-6">
          Nuestro sitio web puede contener enlaces a sitios web de terceros que
          no son operados ni controlados por nosotros. No asumimos ninguna
          responsabilidad por el contenido, las políticas de privacidad o las
          prácticas de estos sitios web de terceros. Le recomendamos que lea los
          términos y condiciones y las políticas de privacidad de cualquier
          sitio web de terceros que visite.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Cambios en la Política de Privacidad
        </h2>
        <p className="mb-6">
          Podemos actualizar esta Política de Privacidad de vez en cuando para
          reflejar cambios en nuestras prácticas. Publicaremos la versión
          actualizada en nuestro sitio web.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
        <p className="mb-6">
          Si tiene alguna pregunta sobre esta Política de Privacidad, por favor,
          contáctenos a través del siguiente correo electrónico:{" "}
          <a
            href="mailto:info@conexionconstructiva.com.ar"
            className="text-blue-400 hover:underline"
          >
            info@conexionconstructiva.com.ar
          </a>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
