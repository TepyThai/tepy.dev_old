import React, { useEffect } from 'react';
import { motion, AnimatePresence, usePresence } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

function Logo({ loadingType, ...rest }) {
  return (
    <AnimatePresence initial="hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        {...rest}
      >
        <motion.path fill="#fff" d="M0 0H24V24H0z"></motion.path>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          stroke="#08BDBA"
          strokeWidth="3"
          d="M5 8l-1.026-.513A.785.785 0 013.77 6.23v0A.785.785 0 014.325 6H8m0 0h3.349c.36 0 .651-.292.651-.651v0a.651.651 0 00-.29-.542L10.5 4M8 6v14m5-10v0a2.7 2.7 0 01-.146-2.06l.005-.018c.094-.28.231-.542.408-.778l.408-.544A3.252 3.252 0 0115.87 5.33v0c1.523-.19 2.98.72 3.465 2.175v0c.11.329.165.672.165 1.019v.406a5 5 0 01-1.465 3.535l-5.224 5.225a1.06 1.06 0 00-.311.75v0c0 .586.475 1.061 1.06 1.061H20"
        ></motion.path>
      </motion.svg>
    </AnimatePresence>
  );
}

export default Logo;
