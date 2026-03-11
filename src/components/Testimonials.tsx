import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula R.',
    text: 'A Rosângela me ajudou a encontrar um equilíbrio que eu não achava possível. O espaço é extremamente acolhedor e me sinto segura para ser quem sou.',
    role: 'Paciente há 1 ano',
  },
  {
    name: 'Mariana Silva',
    text: 'Profissional de excelência. O foco no público feminino faz toda a diferença na compreensão das nossas questões diárias e pressões sociais.',
    role: 'Paciente há 6 meses',
  },
  {
    name: 'Carla Mendes',
    text: 'Atendimento humano, ético e transformador. Recomendo a todas as mulheres que buscam autoconhecimento e um suporte emocional de qualidade.',
    role: 'Paciente há 2 anos',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Relatos de Pacientes</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm relative"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Quote size={20} />
              </div>
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <p className="font-serif font-bold text-primary text-lg">{item.name}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
