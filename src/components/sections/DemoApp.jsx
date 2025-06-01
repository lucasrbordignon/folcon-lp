
import React from 'react';
import { motion } from 'framer-motion';

const DemoApp = () => {
  const appScreenshotUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2162f455-1db9-431b-b7ea-f75fd3708b72/26d0d9ef3ed03b4de26b9ee6f8e5b61d.png"; // Use the provided screenshot

  return (
    <section id="demonstração" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Veja o FOL & CON em <span className="text-primary">Ação</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Interface intuitiva e funcionalidades poderosas projetadas para facilitar o seu dia a dia e maximizar seus resultados.
        </motion.p>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
           <img 
              src={appScreenshotUrl} 
              alt="Demonstração da interface do aplicativo FOL & CON CRM" 
              className="rounded-lg shadow-xl border border-border max-w-3xl w-full" 
           />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoApp;
  