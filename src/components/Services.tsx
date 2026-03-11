import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Espaço Terapêutico para Mulheres',
    description: 'Um ambiente seguro e acolhedor focado nas demandas e desafios específicos do universo feminino.',
    icon: Heart,
  },
  {
    title: 'Suporte Emocional',
    description: 'Auxílio especializado para lidar com ansiedade, depressão, luto e outras questões emocionais complexas.',
    icon: ShieldCheck,
  },
  {
    title: 'Desenvolvimento Estrutural',
    description: 'Trabalho focado na organização interna, fortalecimento da autoestima e construção de limites saudáveis.',
    icon: Users,
  },
  {
    title: 'Autoconhecimento',
    description: 'Jornada profunda para compreender seus padrões, desejos e potencializar sua melhor versão.',
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Serviços Oferecidos</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Abordagem humanizada e ética para proporcionar o suporte necessário em cada fase da sua vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
