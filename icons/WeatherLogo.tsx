'use client'

import { motion } from 'framer-motion';

const WeatherLogo = () => {
  const sunVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const cloudVariants = {
    animate: {
      x: [0, 10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-32 h-32">
      <motion.circle 
        cx="32" 
        cy="32" 
        r="10" 
        fill="none" 
        stroke="#FFC107" 
        strokeWidth="2"
        variants={sunVariants}
        animate="animate"
      />
      <motion.path 
        d="M20 40c-6.6 0-12 5.4-12 12h48c0-6.6-5.4-12-12-12H20z" 
        fill="#90CAF9" 
        stroke="#2196F3" 
        strokeWidth="2"
        variants={cloudVariants}
        animate="animate"
      />
    </motion.svg>
  );
};

export default WeatherLogo;
