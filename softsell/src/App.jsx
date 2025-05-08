import React, { useState } from 'react';
import HeroSection from './components/herosection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactForm from './components/ContactForm';




import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Briefcase,
  CheckCircle,
  ChevronRight,
  Headset,
  LayoutDashboard,
  Percent,
  Quote,
  Upload,
  Users,
  Mail,
  Building2,
  File,
  MessageCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';




const SoftSellWebsite = () => {
  return (
    <div className="bg-gray-950">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <CustomerTestimonials />
      <ContactForm />
    </div>
  );
};

export default SoftSellWebsite;
