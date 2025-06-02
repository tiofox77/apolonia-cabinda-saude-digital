
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { useContactModal } from "@/hooks/useContactModal";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

export const Footer = () => {
  const { isMobile, isTablet } = useDeviceDetection();
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
      <footer id="contato" className={`bg-gray-900 text-white ${isTablet ? 'pb-16' : isMobile ? 'pb-4' : ''}`}>
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : isTablet ? 'grid-cols-2 gap-8' : 'lg:grid-cols-4 md:grid-cols-2 gap-8'}`}>
            {/* Logo and description */}
            <div className={isMobile ? 'text-center' : 'lg:col-span-1'}>
              <div className={`flex items-center ${isMobile ? 'justify-center' : ''} space-x-3 mb-4 lg:mb-6`}>
                <img 
                  src="/lovable-uploads/0253370c-49c9-46f5-b2c1-444c8c2a12d7.png" 
                  alt="Clínica Apolonia" 
                  className={`${isMobile ? 'h-10' : 'h-12'} w-auto bg-white p-2 rounded`}
                />
              </div>
              <p className={`text-gray-300 mb-4 lg:mb-6 leading-relaxed ${isMobile ? 'text-sm text-center' : ''}`}>
                Clínica Apolonia - Cuidando da sua saúde com excelência, ética e profissionalismo em Cabinda, Angola.
              </p>
              <div className={`flex space-x-4 ${isMobile ? 'justify-center' : ''}`}>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors touch-manipulation p-2">
                  <Facebook size={isMobile ? 20 : 24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors touch-manipulation p-2">
                  <Instagram size={isMobile ? 20 : 24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors touch-manipulation p-2">
                  <Linkedin size={isMobile ? 20 : 24} />
                </a>
              </div>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className={`${isMobile ? 'text-lg text-center' : 'text-xl'} font-bold mb-4 lg:mb-6 text-blue-400`}>Contato</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className={`flex items-start space-x-3 ${isMobile ? 'justify-center text-center' : ''}`}>
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <div>
                    <p className="text-gray-300">Província de Cabinda</p>
                    <p className="text-gray-300">Angola</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-3 ${isMobile ? 'justify-center' : ''}`}>
                  <Phone className="text-blue-400 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <p className="text-gray-300">+244 XXX XXX XXX</p>
                </div>
                <div className={`flex items-center space-x-3 ${isMobile ? 'justify-center' : ''}`}>
                  <Mail className="text-blue-400 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <p className="text-gray-300">contato@clinicaapolonia.ao</p>
                </div>
                <div className={`mt-4 lg:mt-6 space-y-3 ${isMobile ? 'flex flex-col items-center' : ''}`}>
                  <button
                    onClick={handleScheduleClick}
                    className={`${isMobile ? 'w-48' : 'w-full'} bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors touch-manipulation font-medium`}
                  >
                    Agendar Consulta
                  </button>
                  <button
                    onClick={handleContactClick}
                    className={`${isMobile ? 'w-48' : 'w-full'} bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors touch-manipulation font-medium`}
                  >
                    Entre em Contato
                  </button>
                </div>
              </div>
            </div>
            
            {/* Working hours */}
            <div>
              <h3 className={`${isMobile ? 'text-lg text-center' : 'text-xl'} font-bold mb-4 lg:mb-6 text-blue-400`}>Horários</h3>
              <div className="space-y-3">
                <div className={`flex items-center space-x-3 ${isMobile ? 'justify-center' : ''}`}>
                  <Clock className="text-blue-400 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <div>
                    <p className="text-gray-300">Segunda - Sexta</p>
                    <p className="text-gray-400 text-sm">07:00 - 18:00</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-3 ${isMobile ? 'justify-center' : ''}`}>
                  <Clock className="text-blue-400 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <div>
                    <p className="text-gray-300">Sábado</p>
                    <p className="text-gray-400 text-sm">07:00 - 13:00</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-3 ${isMobile ? 'justify-center' : ''}`}>
                  <Clock className="text-gray-500 flex-shrink-0" size={isMobile ? 16 : 20} />
                  <div>
                    <p className="text-gray-400">Domingo</p>
                    <p className="text-gray-500 text-sm">Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className={`${isMobile ? 'text-lg text-center' : 'text-xl'} font-bold mb-4 lg:mb-6 text-blue-400`}>Links Rápidos</h3>
              <div className={`space-y-3 ${isMobile ? 'text-center' : ''}`}>
                <a href="#inicio" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Início</a>
                <a href="#quem-somos" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Quem Somos</a>
                <a href="#missao" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Missão & Visão</a>
                <a href="#cultura" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Cultura de Atendimento</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Especialidades</a>
                <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors touch-manipulation py-1">Emergências</a>
              </div>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
            <div className={`flex ${isMobile ? 'flex-col space-y-4 text-center' : 'flex-col md:flex-row'} justify-between items-center`}>
              <p className="text-gray-400 text-sm">
                © 2024 Clínica Apolonia. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm touch-manipulation py-2">Política de Privacidade</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm touch-manipulation py-2">Termos de Uso</a>
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
