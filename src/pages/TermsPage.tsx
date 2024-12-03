import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom
import Footer from '../components/Footer';

const TermsPage = () => {
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <header className="py-8 bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Términos y Condiciones</h1>
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
          Estos Términos y Condiciones (&quot;Términos&quot;) describen las
          reglas y regulaciones para el uso de nuestro sitio web y servicios
          proporcionados por Conexión Constructiva S.A. Al acceder a este sitio
          web, usted acepta estar sujeto a estos Términos. Si no está de acuerdo
          con alguno de los términos aquí expuestos, le pedimos que no utilice
          nuestro sitio web.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Uso del Sitio</h2>
        <p className="mb-6">
          Al utilizar este sitio web, usted acepta que lo hará únicamente con
          fines legales y de acuerdo con todas las leyes y regulaciones
          aplicables. No deberá utilizar el sitio para ningún propósito ilegal o
          prohibido por estos Términos. Usted acepta que no intentará interferir
          o interrumpir el funcionamiento del sitio web y que no cargará ni
          transmitirá ningún material que sea dañino o que pueda afectar
          negativamente la experiencia de otros usuarios.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Registro de Usuario</h2>
        <p className="mb-6">
          En algunas secciones del sitio web, se le puede solicitar que se
          registre y proporcione información personal. Usted acepta proporcionar
          información precisa y completa y actualizarla cuando sea necesario
          para mantener su exactitud. Es su responsabilidad mantener la
          confidencialidad de su información de inicio de sesión y de las
          actividades realizadas bajo su cuenta.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Propiedad Intelectual</h2>
        <p className="mb-6">
          Todo el contenido del sitio web, incluyendo pero no limitado a textos,
          gráficos, logotipos, íconos y software, es propiedad de Conexión
          Constructiva S.A. o de sus proveedores de contenido y está protegido
          por leyes de propiedad intelectual. Usted no puede reproducir,
          distribuir, modificar, mostrar públicamente ni utilizar de ninguna
          otra manera el contenido del sitio web sin nuestro permiso previo por
          escrito.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Modificaciones de los Términos
        </h2>
        <p className="mb-6">
          Podemos actualizar estos Términos de vez en cuando para reflejar
          cambios en nuestras prácticas. Le notificaremos sobre cualquier cambio
          importante y publicaremos la versión actualizada en nuestro sitio web.
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

        <h2 className="text-2xl font-semibold mb-6">Responsabilidad</h2>
        <p className="mb-6">
          En la medida máxima permitida por la ley, Conexión Constructiva S.A.
          no será responsable por ningún daño directo, indirecto, incidental,
          especial o consecuente que surja del uso o incapacidad para usar
          nuestro sitio web, incluso si hemos sido informados de la posibilidad
          de dichos daños. Su uso del sitio web es bajo su propio riesgo.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
        <p className="mb-6">
          Si tiene alguna pregunta sobre estos Términos y Condiciones, por
          favor, contáctenos a través del siguiente correo electrónico:{" "}
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

export default TermsPage;
