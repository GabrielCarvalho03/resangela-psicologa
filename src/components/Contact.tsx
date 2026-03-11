import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Entre em Contato</h2>
            <p className="text-gray-600 text-lg mb-10">
              Estou à disposição para tirar suas dúvidas e agendar sua primeira sessão. Sinta-se à vontade para entrar em contato pelos canais abaixo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary">Endereço</h3>
                  <p className="text-gray-600">Av. Alberto Andaló, 1234 - Centro<br />São José do Rio Preto, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary">Telefone / WhatsApp</h3>
                  <p className="text-gray-600">(17) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary">E-mail</h3>
                  <p className="text-gray-600">contato@rosangelapsicologa.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://wa.me/5517999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:shadow-lg transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] text-white rounded-full hover:shadow-lg transition-all"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-inner border border-gray-100"
          >
            {/* Placeholder for Google Maps - In a real app, use an iframe or Google Maps API */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.876543210!2d-49.3789012345!3d-20.8123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad123456789%3A0x123456789abcdef!2sAv.%20Alberto%20Andal%C3%B3%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
