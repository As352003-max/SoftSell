import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [showChat, setShowChat] = useState(false);

  const exampleQuestions = [
    'How do I sell my license?',
    'What types of licenses can I sell?',
    'How long does the process take?'
  ];

  const mockResponse = {
    'How do I sell my license?': 'Just click “Get a Quote” and fill out the form. We’ll take care of the rest.',
    'What types of licenses can I sell?': 'You can sell most enterprise software licenses including Microsoft, Adobe, etc.',
    'How long does the process take?': 'On average, it takes 3–5 business days from submission to payment.'
  };

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 to-transparent"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
        >
          Unlock Value from Unused Software
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          SoftSell helps businesses turn dormant licenses into real revenue—quickly, securely, and effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center">
            Get a Quote <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <a href="#contact" className="text-white border border-gray-400 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
            Contact Sales
          </a>
        </motion.div>
      </div>

      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        aria-label="Chat with us"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-white text-black rounded-xl shadow-lg p-4 z-50">
          <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
          <ul className="space-y-2 mb-4">
            {exampleQuestions.map((q) => (
              <li key={q}>
                <button
                  onClick={() => setSelectedQuestion(q)}
                  className="text-left w-full text-sm hover:bg-gray-100 p-2 rounded"
                >
                  {q}
                </button>
              </li>
            ))}
          </ul>
          {selectedQuestion && (
            <div className="text-sm bg-gray-100 p-3 rounded">
              <strong>Q:</strong> {selectedQuestion}<br />
              <strong>A:</strong> {mockResponse[selectedQuestion]}
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
