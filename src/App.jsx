import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="font-sans bg-gray-950 text-white">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />


      <Footer />
    </main>
  );
};

export default App;

