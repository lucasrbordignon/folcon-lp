
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroApp = () => {
  const appImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2162f455-1db9-431b-b7ea-f75fd3708b72/26d0d9ef3ed03b4de26b9ee6f8e5b61d.png"; // Use the provided image

  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              O <span className="text-primary">CRM Simples</span> que Impulsiona Pequenos Negócios
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Gerencie seus contatos, acompanhe leads e feche mais vendas com o FOL & CON. A ferramenta ideal para organizar e escalar seu negócio sem complicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <Button asChild size="lg" className="button-primary px-8 py-3 font-semibold text-base shadow-lg hover:shadow-primary/40">
                <a href="#download">
                  Baixar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="button-outline px-8 py-3 font-semibold text-base">
                 <a href="#funcionalidades">Ver Funcionalidades</a>
              </Button>
            </div>
             <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-muted-foreground">
                <span className="inline-flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-primary/80"/> Fácil de Usar</span>
                <span className="inline-flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-primary/80"/> Foco em Resultados</span>
                <span className="inline-flex items-center"><CheckCircle className="h-4 w-4 mr-1 text-primary/80"/> Ideal para Pequenos Negócios</span>
            </div>
          </motion.div>
          
          {/* Image Content */}
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone Mockup - Simple version */}
             <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform -rotate-3"></div>
                 <img 
                    src={appImageUrl} 
                    alt="Interface do aplicativo FOL & CON CRM" 
                    className="relative rounded-2xl shadow-2xl border-4 border-background w-full" 
                 />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroApp;
  