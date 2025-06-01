
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Target, Filter, TrendingUp, Search } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      className="feature-card bg-card rounded-lg border border-border p-6 text-center h-full shadow-sm hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const FeaturesApp = () => {
  const featuresData = [
    {
      icon: Users,
      title: "Gestão de Contatos",
      description: "Centralize todas as informações dos seus clientes e leads em um único lugar, acessível e organizado.",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Acompanhamento de Leads",
      description: "Nunca perca uma oportunidade. Monitore o status de cada lead e saiba o momento certo de agir.",
      delay: 0.2
    },
    {
      icon: Filter,
      title: "Funil de Vendas Visual",
      description: "Entenda o fluxo dos seus negócios com um funil de vendas claro e personalizável.",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Melhora no Fluxo",
      description: "Otimize seu processo de vendas, desde o primeiro contato até o fechamento do negócio.",
      delay: 0.4
    },
     {
      icon: Search,
      title: "Buscas e Demandas",
      description: "Registre e analise buscas e demandas para entender melhor seu mercado e identificar oportunidades.",
      delay: 0.5
    },
     {
      icon: TrendingUp, // Reusing icon, consider a different one if available
      title: "Controle de Ofertas",
      description: "Gerencie suas propostas e ofertas enviadas, acompanhando o progresso e aumentando suas chances de sucesso.",
      delay: 0.6
    }
  ];

  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Funcionalidades <span className="text-primary">Essenciais</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Tudo o que você precisa para gerenciar seus relacionamentos com clientes e impulsionar suas vendas, de forma simples e eficaz.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesApp;
  