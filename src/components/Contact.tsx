import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // La animación se activará cuando el 10% del componente sea visible
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name) errors.name = "El nombre es obligatorio";
    if (!formData.email) errors.email = "El correo electrónico es obligatorio";
    if (!formData.message) errors.message = "El mensaje es obligatorio";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSending(true);
      setErrors({});
      try {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
          {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          } as Record<string, unknown>,
          process.env.REACT_APP_EMAILJS_USER_ID || ""
        );
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setErrors({ submit: "Error al enviar el mensaje. Intenta de nuevo más tarde." });
      } finally {
        setIsSending(false);
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-6">
      <h1 className="heading mb-8 text-white underline">Contáctanos</h1>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[var(--ultra-dark-gray)] rounded-lg shadow-lg p-8"
      >
        {isSubmitted && (
          <motion.div
            className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </motion.div>
        )}
        {errors.submit && (
          <motion.div
            className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {errors.submit}
          </motion.div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block text-lg font-medium mb-2 text-white"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 resize-none transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isSending
                ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300"
              }`}
            disabled={isSending}
          >
            {isSending
              ? "Enviando..."
              : isSubmitted
                ? "Enviado ✔"
                : "Enviar Mensaje"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
