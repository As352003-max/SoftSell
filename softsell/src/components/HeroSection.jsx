import React from 'react'

// 1. Hero Section
const HeroSection = () => (
  <section
    className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 md:py-32"
  >
    <div className="container mx-auto px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Maximize Your Software ROI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto"
      >
        The platform for businesses to sell unused software licenses
        and recover capital.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Get a Quote
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
