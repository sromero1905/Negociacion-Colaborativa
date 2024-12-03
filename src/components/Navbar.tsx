import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#mission", label: "Misión" },
    { href: "#program", label: "Programa" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.98,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={navVariants}
      className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center 
          bg-gray-950/90 
          backdrop-blur-xl rounded-3xl 
          px-4 sm:px-6 lg:px-8 py-3 
          border border-gray-800/30 
          shadow-xl 
          transition-all duration-500 
          hover:shadow-2xl
          hover:scale-[1.005]">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "tween", 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="flex items-center space-x-2"
          >
            <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            <h1 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              <span className="font-semibold text-white/90">
                Negociación
              </span> Colaborativa
            </h1>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={toggleMenu}
              className="text-white/80 hover:text-white 
              focus:outline-none 
              hover:bg-white/10 p-2 rounded-full 
              transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8 items-center">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "tween", 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#ffffff"
                  }}
                  className="text-gray-400 text-sm font-medium tracking-tight 
                    relative group
                    transition-colors duration-300 
                    transform origin-center
                    after:absolute after:bottom-[-5px] after:left-0 
                    after:w-0 after:h-[2px] after:bg-white 
                    hover:after:w-full 
                    after:transition-all after:duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "tween", 
                duration: 0.4, 
                delay: 0.3,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium tracking-tight 
                bg-white/5 text-white 
                px-5 py-2.5 
                rounded-xl 
                border border-white/10 
                hover:bg-white/10
                transition-all duration-300 
                shadow-md hover:shadow-lg"
            >
              Contacto
            </motion.a>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="lg:hidden absolute top-full left-0 w-full 
                bg-gray-950/95 
                backdrop-blur-xl mt-4 rounded-2xl 
                shadow-xl overflow-hidden"
              >
                <div className="flex flex-col space-y-4 p-6">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={index}
                      href={link.href} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        type: "tween", 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white/80 text-base font-medium tracking-tight 
                        py-3 border-b border-gray-800/30 last:border-b-0 
                        hover:text-white
                        transition-all duration-300 
                        ease-in-out"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.a 
                    href="#contact"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "tween", 
                      duration: 0.4, 
                      delay: 0.3,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-base font-medium tracking-tight 
                      bg-white/5 text-white 
                      px-4 py-3 
                      rounded-xl 
                      text-center
                      border border-white/10 
                      hover:bg-white/10
                      transition-all duration-300
                      shadow-md hover:shadow-lg"
                    onClick={toggleMenu}
                  >
                    Contacto
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;