import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-accent/40 text-primary rounded-full text-sm font-semibold mb-6 tracking-wider uppercase">
              Psicóloga em São José do Rio Preto
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight mb-6">
              Cuidado emocional para o seu <span className="italic">florescer</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Um espaço terapêutico dedicado ao acolhimento feminino, focado no suporte emocional e estrutural que você precisa para sua jornada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transition-all gap-2"
              >
                Agende sua primeira consulta
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-all"
              >
                Conheça os serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                alt="Psicóloga Rosângela"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
