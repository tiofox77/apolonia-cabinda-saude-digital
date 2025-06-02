
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { useContactModal } from "@/hooks/useContactModal";

export const Footer = () => {
  const {
    isContactOpen,
    isScheduleOpen,
    openContact,
    closeContact,
    openSchedule,
    closeSchedule,
  } = useContactModal();

  const handleScheduleClick = () => {
    openSchedule();
  };

  const handleContactClick = () => {
    openContact();
  };

  return (
    <>
      <footer id="contato" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/0253370c-49c9-46f5-b2c1-444c8c2a12d7.png" 
                  alt="Clínica Apolonia" 
                  className="h-12 w-auto bg-white p-2 rounded"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Clínica Apolonia - Cuidando da sua saúde com excelência, ética e profissionalismo em Cabinda, Angola.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-300">Província de Cabinda</p>
                    <p className="text-gray-300">Angola</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400 flex-shrink-0" size={20} />
                  <p className="text-gray-300">+244 XXX XXX XXX</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400 flex-shrink-0" size={20} />
                  <p className="text-gray-300">contato@clinicaapolonia.ao</p>
                </div>
                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleScheduleClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Agendar Consulta
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Entre em Contato
                  </button>
                </div>
              </div>
            </div>
            
            {/* Working hours */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Horários</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-300">Segunda - Sexta</p>
                    <p className="text-gray-400 text-sm">07:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-300">Sábado</p>
                    <p className="text-gray-400 text-sm">07:00 - 13:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-gray-500 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-400">Domingo</p>
                    <p className="text-gray-500 text-sm">Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Links Rápidos</h3>
              <div className="space-y-3">
                <a href="#inicio" className="block text-gray-300 hover:text-blue-400 transition-colors">Início</a>
                <a href="#quem-somos" className="block text-gray-300 hover:text-blue-400 transition-colors">Quem Somos</a>
                <a href="#missao" className="block text-gray-300 hover:text-blue-400 transition-colors">Missão & Visão</a>
                <a href="#cultura" className="block text-gray-300 hover:text-blue-400 transition-colors">Cultura de Atendimento</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Especialidades</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Emergências</a>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Clínica Apolonia. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Política de Privacidade</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        type="contact"
      />
      <ContactModal
        isOpen={isScheduleOpen}
        onClose={closeSchedule}
        type="schedule"
      />
    </>
  );
};
