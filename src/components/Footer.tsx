"use client";
import { Linkedin, Instagram } from 'lucide-react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Footer() {
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
    handleScroll(); // Trigger scroll event to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <footer className="w-full bg-black-900 text-gray-400 py-8 mt-12 mb-10 rounded-lg">
      <motion.div
        className="container mx-auto flex flex-col px-4 sm:flex-row sm:justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 sm:mr-auto">
          <motion.a
            href="/terms"
            className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05, color: "#f3f4f6" }}
          >
            Términos y Condiciones
          </motion.a>
          <motion.a
            href="/privacy"
            className="hover:text-gray-100 text-sm px-2 py-1 hover:underline hover:underline-offset-4 hover:decoration-gray-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05, color: "#f3f4f6" }}
          >
            Política de Privacidad
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-0">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2024{" "}
            <motion.a
              href="/"
              className="hover:text-gray-100 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05, color: "#f3f4f6" }}
            >
              Negociación Colaborativa
            </motion.a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <motion.a
            href="https://www.linkedin.com"
            className="hover:text-gray-100 transition duration-500 ease-in-out"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <div className="h-10 w-10 rounded-full border border-gray-700 hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
              <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors duration-300" />
            </div>
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            className="hover:text-gray-100 transition duration-500 ease-in-out"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <div className="h-10 w-10 rounded-full border border-gray-700 hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
              <Instagram size={20} className="text-gray-400 hover:text-white transition-colors duration-300" />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}