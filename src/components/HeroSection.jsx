import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-black py-20 md:py-32 text-center">
    <div className="container mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Maximize Your Software ROI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        The platform for businesses to sell unused software licenses and recover capital.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full shadow-md">
          Get a Quote
        </button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
