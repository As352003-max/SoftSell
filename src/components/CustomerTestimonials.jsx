import React from 'react';

const testimonials = [
  {
    name: 'Alex Morgan',
    role: 'CTO',
    company: 'TechNova',
    quote: 'SoftSell helped us unlock thousands in unused software investments. Seamless process!'
  },
  {
    name: 'Priya Desai',
    role: 'Procurement Lead',
    company: 'InnoSoft',
    quote: 'An amazing platform for recovering capital. Highly recommended!'
  }
];

const CustomerTestimonials = () => (
  <section className="py-16 bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-8">Customer Testimonials</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded-lg max-w-sm mx-auto">
          <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
          <h4 className="font-semibold">{t.name}</h4>
          <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CustomerTestimonials;

