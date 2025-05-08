import React from 'react';
import { ShieldCheck, Rocket, Smile, Globe } from 'lucide-react';

const benefits = [
  { icon: <ShieldCheck />, title: 'Secure Transactions', description: 'All dealings are encrypted and protected.' },
  { icon: <Rocket />, title: 'Fast Payouts', description: 'Receive funds within 24 hours.' },
  { icon: <Smile />, title: 'Customer Satisfaction', description: '98% client satisfaction rate.' },
  { icon: <Globe />, title: 'Global Reach', description: 'Buyers and sellers worldwide.' }
];

const WhyChooseUs = () => (
  <section className="py-16 bg-gray-950 text-center">
    <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-xl text-left flex gap-4">
          <div className="text-purple-400">{benefit.icon}</div>
          <div>
            <h3 className="text-xl font-semibold">{benefit.title}</h3>
            <p className="text-sm text-gray-400">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;