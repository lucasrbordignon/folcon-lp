
import React from 'react';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react'; // Assuming Play Store icon might be generic Smartphone

const DownloadApp = () => {
  // Replace with your actual App Store and Play Store URLs
  const appStoreUrl = "https://apps.apple.com/br/app/seu-app-id"; 
  const playStoreUrl = "https://play.google.com/store/apps/details?id=seu.app.package";

  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Baixe o <span className="text-primary">FOL & CON</span> Agora!
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Comece a organizar seus contatos e a impulsionar suas vendas hoje mesmo. Disponível para iOS e Android.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
          {/* App Store */}
          <motion.div 
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">iOS (App Store)</h3>
            <div className="qr-code-container mb-6">
              <QRCode value={appStoreUrl} size={160} level="H" />
            </div>
            <Button asChild size="lg" className="button-primary w-full max-w-[200px]">
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Apple className="mr-2 h-5 w-5" /> App Store
              </a>
            </Button>
             <img  class="h-12 mt-4" alt="Available on the App Store badge" src="https://images.unsplash.com/photo-1587573578335-9672da4d0292" />
          </motion.div>

          {/* Play Store */}
          <motion.div 
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">Android (Play Store)</h3>
            <div className="qr-code-container mb-6">
              <QRCode value={playStoreUrl} size={160} level="H" />
            </div>
            <Button asChild size="lg" className="button-primary w-full max-w-[200px]">
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" /> Play Store 
              </a>
            </Button>
             <img  class="h-12 mt-4" alt="Get it on Google Play badge" src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
  