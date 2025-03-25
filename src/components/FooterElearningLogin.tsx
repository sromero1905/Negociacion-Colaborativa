"use client";
import { Linkedin, Instagram } from 'lucide-react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function FooterElearningLogin() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 20 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <motion.div
        className="container mx-auto flex flex-col px-4 sm:flex-row sm:justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Links */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:mr-auto">
          <motion.a
            href="/terms"
            className="hover:text-white text-sm px-2 py-1 hover:underline hover:underline-offset-4 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Términos y Condiciones
          </motion.a>
          <motion.a
            href="/privacy"
            className="hover:text-white text-sm px-2 py-1 hover:underline hover:underline-offset-4 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Política de Privacidad
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-0">
          <p className="text-sm">
            Copyright &copy; 2024{" "}
            <motion.a
              href="/"
              className="hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Negociación Colaborativa
            </motion.a>
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <motion.a
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <div className="h-10 w-10 rounded-full border border-blue-700 hover:border-blue-400 hover:bg-blue-800 transition-all duration-300 flex items-center justify-center">
              <Linkedin size={20} className="hover:text-white transition-colors" />
            </div>
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <div className="h-10 w-10 rounded-full border border-blue-700 hover:border-blue-400 hover:bg-blue-800 transition-all duration-300 flex items-center justify-center">
              <Instagram size={20} className="hover:text-white transition-colors" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}