import React from 'react'

// Animation variants
// Dummy data for testimonials
const testimonials = [
    {
      name: 'Alice Smith',
      role: 'CTO',
      company: 'TechCorp Solutions',
      quote:
        'SoftSell made selling our surplus licenses a breeze. The process was transparent, and we got a great return.',
    },
    {
      name: 'Bob Johnson',
      role: 'IT Manager',
      company: 'Global Innovations Inc.',
      quote:
        'I was impressed with SoftSell\'s professionalism and efficiency.  A reliable partner for license management.',
    },
  ];
  
  
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

const CustomerTestimonials = () => (
  <section className="bg-gray-950 py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center">
        Customer Testimonials
      </h2>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md"
          >
            <Quote className="w-10 h-10 text-purple-400 mb-4" />
            <p className="text-gray-300 italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-gray-400" />
              <div>
                <h4 className="font-semibold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CustomerTestimonials
