import React from 'react'
const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Maximize Recovery',
      description: 'Get the best possible return on your unused licenses.',
      icon: <Percent className="w-6 h-6 text-blue-400" />,
    },
    {
      title: 'Trusted & Secure',
      description: 'Secure transactions and verified buyers.',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    },
    {
      title: 'Streamlined Process',
      description: 'Easy-to-use platform for quick sales.',
      icon: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
    },
    {
      title: 'Expert Support',
      description: 'Dedicated support team to assist you.',
      icon: <Headset className="w-6 h-6 text-yellow-400" />,
    },
  ];

  return (
    <section className="bg-gray-950 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
        Why Choose Us
      </h2>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default WhyChooseUs
