import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                alt="Consultório Terapêutico"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-lg hidden md:block">
              <p className="text-primary font-serif font-bold text-2xl italic">"O acolhimento é o primeiro passo para a cura."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Sobre Rosângela</h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Sou psicóloga clínica com anos de experiência dedicada ao atendimento de mulheres em São José do Rio Preto. Minha missão é oferecer um espaço de escuta ética, sensível e profissional.
              </p>
              <p>
                Acredito que a terapia é um processo de construção de autonomia e fortalecimento emocional. No meu consultório, cada paciente é vista em sua singularidade, respeitando seu tempo e sua história.
              </p>
              <p>
                Especializada em demandas femininas, trabalho com foco no suporte emocional e estrutural, auxiliando no enfrentamento de crises, transições de vida e na busca por uma existência mais plena e consciente.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-4">
                <p className="text-3xl font-serif font-bold text-primary">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Anos de Experiência</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="text-3xl font-serif font-bold text-primary">500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Vidas Transformadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
