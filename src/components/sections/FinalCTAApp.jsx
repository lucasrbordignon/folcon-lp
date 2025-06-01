
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const FinalCTAApp = () => {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Pronto para Simplificar seu CRM e Vender Mais?
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Não espere mais para organizar seus contatos e otimizar seu funil de vendas. Baixe o FOL & CON e veja a diferença!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" variant="secondary" className="button-secondary font-semibold px-10 py-3 text-base shadow-lg hover:bg-white/90 hover:text-primary">
            <a href="#download">
              Baixar o Aplicativo <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTAApp;
   