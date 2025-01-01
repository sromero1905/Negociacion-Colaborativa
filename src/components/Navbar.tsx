import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isHovered) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHovered]);

  useEffect(() => {
    if (!isVisible) {
      setIsMenuOpen(false);
    }
  }, [isVisible]);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#mision", label: "Misión" },
    { href: "/mas-info", label: "Programa" },
    { href: "/contact", label: "Contacto" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { y: '-100%' },
        visible: { y: 0 }
      }}
      transition={{
        type: "tween",
        duration: 0.4,
        ease: "easeInOut"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed w-full top-0 z-50 px-3 py-3 sm:px-6 sm:py-6 lg:px-8 xl:px-16"
    >
      <div className="container mx-auto flex justify-center lg:justify-start xl:max-w-[1600px] 2xl:max-w-[1800px]">
        <div className="flex justify-start items-center
          bg-gray-950/90
          backdrop-blur-xl rounded-3xl
          px-6 sm:px-10 py-2.5 sm:py-4
          border border-gray-800/30
          shadow-xl
          transition-all duration-500
          hover:shadow-2xl
          hover:scale-[1.005]
          w-full
          max-w-4xl
          lg:ml-12 xl:ml-28 2xl:ml-40"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "tween",
              duration: 0.6,
              ease: "easeOut"
            }}
            className="flex items-center space-x-3"
          >
                    <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            <h1 className="text-xl sm:text-2xl font-light tracking-tight text-white">
              <a href="/" className="no-underline hover:opacity-80 transition-opacity duration-200">
                <span className="font-semibold text-white/90">
                  Negociación
                </span> Colaborativa
              </a>
            </h1>
          </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-auto">
            <div className="flex space-x-10 items-center">
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
                  onClick={handleLinkClick}
                  className="text-gray-400 text-base font-medium tracking-tight
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
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-white/80 hover:text-white p-2 rounded-full
                hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && isVisible && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="lg:hidden absolute top-full left-0 w-full
                  bg-gray-950/95 backdrop-blur-xl mt-4 rounded-2xl
                  shadow-xl overflow-hidden border border-gray-800/30"
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
                      onClick={handleLinkClick}
                      className="text-white/80 text-base font-medium tracking-tight
                        py-3 border-b border-gray-800/30 last:border-b-0
                        hover:text-white transition-all duration-300"
                    >
                      {link.label}
                    </motion.a>
                  ))}
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