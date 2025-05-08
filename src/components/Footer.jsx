import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-center py-8 mt-16 border-t border-gray-800">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
        <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
        <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
      </div>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;