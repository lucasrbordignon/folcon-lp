
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const HeaderApp = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2162f455-1db9-431b-b7ea-f75fd3708b72/26d0d9ef3ed03b4de26b9ee6f8e5b61d.png";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Funcionalidades', 'Demonstração', 'Benefícios', 'Download'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logoUrl} alt="FOL & CON Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-foreground">FOL & CON</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`}
              className="text-foreground hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

         {/* CTA Button (Desktop) */}
         <div className="hidden md:block">
           <Button asChild className="button-primary font-semibold">
             <a href="#download">Baixar App</a>
           </Button>
         </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 border-t border-border"
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c').replace('ã', 'a')}`}
              className="text-foreground hover:text-primary transition-colors font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button asChild className="button-primary font-semibold w-full max-w-xs mt-4">
             <a href="#download" onClick={() => setIsMenuOpen(false)}>Baixar App</a>
           </Button>
        </nav>
      </motion.div>
    </header>
  );
};

export default HeaderApp;
  