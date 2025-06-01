
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart, Clock, Zap } from 'lucide-react';

const BenefitItem = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div 
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </motion.div>
    );
};

const BenefitsApp = () => {
    const benefits = [
        { icon: DollarSign, title: "Aumente suas Vendas", description: "Organize seu processo comercial e feche mais negócios com acompanhamento eficaz.", delay: 0.1 },
        { icon: BarChart, title: "Melhore o Controle", description: "Tenha uma visão clara de todos os seus contatos, leads e oportunidades.", delay: 0.2 },
        { icon: Clock, title: "Economize Tempo", description: "Automatize tarefas e centralize informações para focar no que realmente importa.", delay: 0.3 },
        { icon: Zap, title: "Tome Decisões Melhores", description: "Utilize dados e insights para direcionar suas estratégias de vendas e marketing.", delay: 0.4 },
    ];

    return (
        <section id="benefícios" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Transforme seu Negócio com <span className="text-primary">FOL & CON</span>
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {benefits.map(benefit => (
                        <BenefitItem key={benefit.title} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsApp;
  