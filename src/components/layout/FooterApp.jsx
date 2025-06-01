
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const FooterApp = () => {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/2162f455-1db9-431b-b7ea-f75fd3708b72/26d0d9ef3ed03b4de26b9ee6f8e5b61d.png";

  return (
    <footer className="py-10 bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
             <img src={logoUrl} alt="FOL & CON Logo" className="h-10 mb-3 mx-auto md:mx-0" />
            <p className="text-muted-foreground max-w-sm">FOL & CON - Simplificando o CRM para o sucesso do seu pequeno negócio.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
             <h4 className="font-semibold mb-2 text-foreground">Contato</h4>
             <div className="flex items-center gap-2 text-muted-foreground">
               <Mail className="h-5 w-5"/> 
               <a href="mailto:contato@folcon.com" className="hover:text-primary transition-colors">contato@folcon.com</a>
             </div>
              <div className="flex items-center gap-2 text-muted-foreground">
               <Phone className="h-5 w-5"/> 
               <a href="tel:+55XXXXXXXXXXX" className="hover:text-primary transition-colors">(XX) XXXX-XXXX</a> 
             </div>
          </div>
           <div className="flex flex-col items-center md:items-start gap-2">
             <h4 className="font-semibold mb-2 text-foreground">Legal</h4>
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FOL & CON. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
  