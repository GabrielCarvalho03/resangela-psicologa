import React from 'react';
import { Instagram, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Rosângela</h2>
            <p className="text-white/70 max-w-xs mx-auto md:mx-0">
              Psicologia clínica com foco no universo feminino e suporte emocional em São José do Rio Preto.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
          </div>

          <div className="md:text-right">
            <p className="text-white/70 mb-2">CRP 06/123456</p>
            <p className="text-white/70">© {new Date().getFullYear()} Rosângela Psicóloga. Todos os direitos reservados.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50 flex items-center justify-center gap-2">
          Feito com <Heart size={14} className="text-accent fill-accent" /> para o seu bem-estar.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
