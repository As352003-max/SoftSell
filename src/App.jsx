import React from 'react';
import HeroSection from './components/herosection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <main className="font-sans bg-gray-950 text-white">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
    </main>
  );
};

export default App;

