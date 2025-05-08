import React from 'react'

const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  

// 2. How It Works
const HowItWorks = () => (
  <section className="bg-gray-950 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
        How It Works
      </h2>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div variants={item} className="text-center">
          <Upload className="w-16 h-16 mx-auto text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            1. Upload License
          </h3>
          <p className="text-gray-400">
            Submit your unused software licenses.
          </p>
        </motion.div>
        <motion.div variants={item} className="text-center">
          <Percent className="w-16 h-16 mx-auto text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            2. Get Valuation
          </h3>
          <p className="text-gray-400">
            Receive a fair market value assessment.
          </p>
        </motion.div>
        <motion.div variants={item} className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">3. Get Paid</h3>
          <p className="text-gray-400">Securely receive payment for your sale.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);


export default HowItWorks
