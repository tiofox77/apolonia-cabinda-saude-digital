
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";
import { useContactModal } from "@/hooks/useContactModal";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile, isTablet } = useDeviceDetection();
  const {
    isContactOpen,
    isScheduleOpen,
    openContact,
    closeContact,
    openSchedule,
    closeSchedule,
  } = useContactModal();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContact();
    setIsMenuOpen(false);
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openSchedule();
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top contact bar - Hidden on mobile, visible on tablet+ */}
      <div className={`bg-blue-900 text-white py-2 ${isMobile ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+244 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Cabinda, Angola</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span className={isTablet ? 'hidden lg:block' : ''}>Seg-Sex: 7h-18h | Sáb: 7h-13h</span>
              </div>
              <button
                onClick={handleScheduleClick}
                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs transition-colors touch-manipulation"
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0253370c-49c9-46f5-b2c1-444c8c2a12d7.png" 
                alt="Clínica Apolonia" 
                className={`${isMobile ? 'h-10' : 'h-12'} w-auto`}
              />
              {!isMobile && (
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-blue-900">Clínica Apolonia</h1>
                  <p className="text-xs text-gray-600">Saúde com Excelência</p>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</Link>
              <a href="#quem-somos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Quem Somos</a>
              <Link to="/servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</Link>
              <Link to="/especialidades" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Especialidades</Link>
              <a href="#missao" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Missão & Visão</a>
              <a href="#cultura" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Atendimento</a>
              <button 
                onClick={handleScheduleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium mr-2 touch-manipulation"
              >
                Agendar
              </button>
              <button 
                onClick={handleContactClick}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium touch-manipulation"
              >
                Contato
              </button>
            </nav>

            {/* Mobile/Tablet menu button and quick actions */}
            <div className="flex items-center space-x-3 lg:hidden">
              {isMobile && (
                <button
                  onClick={handleScheduleClick}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium touch-manipulation"
                >
                  Agendar
                </button>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 touch-manipulation p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <a 
                href="#quem-somos" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </a>
              <Link 
                to="/servicos" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/especialidades" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Especialidades
              </Link>
              <a 
                href="#missao" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Missão & Visão
              </a>
              <a 
                href="#cultura" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-3 border-b border-gray-100 touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Atendimento
              </a>
              
              {/* Mobile action buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                {!isMobile && (
                  <button 
                    onClick={handleScheduleClick}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center touch-manipulation"
                  >
                    Agendar Consulta
                  </button>
                )}
                <button 
                  onClick={handleContactClick}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center touch-manipulation"
                >
                  Entre em Contato
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

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
