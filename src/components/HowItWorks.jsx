import React from 'react';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <Upload size={32} />, title: 'Upload License', description: 'Submit your unused software licenses.' },
  { icon: <DollarSign size={32} />, title: 'Get Valuation', description: 'We evaluate your licenses instantly.' },
  { icon: <CheckCircle size={32} />, title: 'Get Paid', description: 'Receive payment securely and quickly.' }
];

const HowItWorks = () => (
  <section className="py-16 bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-8">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      {steps.map((step, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg w-64 text-white">
          <div className="mb-4 flex justify-center">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-sm text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;