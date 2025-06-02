
import { Heart, Shield, Users, Award, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";
import { useContactModal } from "@/hooks/useContactModal";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";

export const HeroSection = () => {
  const { isMobile, isTablet } = useDeviceDetection();
  const {
    isScheduleOpen,
    openSchedule,
    closeSchedule,
  } = useContactModal();

  const handleScheduleClick = () => {
    openSchedule();
  };

  return (
    <>
      <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 overflow-hidden">
        {/* Background Pattern - Reduced on mobile */}
        <div className={`absolute inset-0 ${isMobile ? 'opacity-5' : 'opacity-10'}`}>
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-48 h-48 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Floating medical elements - Hidden on small mobile */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-10 opacity-20 animate-float">
              <div className="w-8 h-24 bg-white rounded-full"></div>
              <div className="w-24 h-8 bg-white rounded-full -mt-16 ml-2"></div>
            </div>
            <div className="absolute top-1/3 right-16 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
              <Heart size={40} className="text-white" />
            </div>
            <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
              <Shield size={36} className="text-white" />
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8 lg:gap-16 items-center w-full`}>
            <div className="text-white animate-fade-in">
              <div className="mb-4 lg:mb-6">
                <span className={`inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full ${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-4 animate-scale-in`}>
                  🏥 Clínica de Excelência em Cabinda
                </span>
              </div>
              
              <h1 className={`${isMobile ? 'text-3xl' : isTablet ? 'text-4xl lg:text-6xl' : 'text-5xl lg:text-7xl'} font-bold mb-6 lg:mb-8 leading-tight`}>
                Cuidando da sua 
                <span className="text-sky-300 block">saúde</span>
                <span className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} font-normal text-sky-200 block mt-2 lg:mt-4`}>
                  com excelência e humanização
                </span>
              </h1>
              
              <p className={`${isMobile ? 'text-base mb-6' : isTablet ? 'text-lg mb-8' : 'text-xl lg:text-2xl mb-10'} leading-relaxed text-blue-100 max-w-2xl`}>
                Localizada em Cabinda, Angola, somos uma clínica dedicada à prestação de serviços 
                de saúde e bem-estar físico e mental com profissionais qualificados e experientes.
              </p>
              
              <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-col sm:flex-row gap-6'} mb-8 lg:mb-12`}>
                <button 
                  onClick={handleScheduleClick}
                  className={`group bg-white text-blue-900 ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-2xl hover:bg-blue-50 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 touch-manipulation`}
                >
                  <Heart className="group-hover:scale-110 transition-transform duration-300" size={isMobile ? 20 : 24} />
                  {isMobile ? 'Agendar' : 'Agendar Consulta'}
                  <div className="w-2 h-2 bg-blue-900 rounded-full animate-pulse"></div>
                </button>
                <Link 
                  to="/servicos"
                  className={`group border-2 border-white text-white ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-center hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 touch-manipulation`}
                >
                  <Shield className="group-hover:scale-110 transition-transform duration-300" size={isMobile ? 20 : 24} />
                  {isMobile ? 'Serviços' : 'Nossos Serviços'}
                </Link>
              </div>

              {/* Trust indicators - Stacked on mobile */}
              <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center gap-4 lg:gap-8'} text-sky-200`}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={isMobile ? 14 : 16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className={isMobile ? 'text-xs' : 'text-sm'}>98% Satisfação</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={isMobile ? 14 : 16} />
                  <span className={isMobile ? 'text-xs' : 'text-sm'}>500+ Pacientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={isMobile ? 14 : 16} />
                  <span className={isMobile ? 'text-xs' : 'text-sm'}>10+ Anos</span>
                </div>
              </div>
            </div>
            
            {/* Image section - Hidden on mobile, adapted for tablet */}
            {!isMobile && (
              <div className="relative animate-fade-in">
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-3xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600" 
                      alt="Equipe médica" 
                      className={`w-full ${isTablet ? 'h-64' : 'h-96'} object-cover rounded-2xl`}
                    />
                    
                    {/* Video play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white/90 backdrop-blur-sm rounded-full p-4 lg:p-6 shadow-2xl hover:scale-110 transition-all duration-300 group touch-manipulation">
                        <Play className="text-blue-900 ml-1 group-hover:scale-110 transition-transform duration-300" size={isTablet ? 24 : 32} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating stats cards - Smaller on tablet */}
                  <div className={`absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 border-l-4 border-blue-600 hover:scale-105 transition-all duration-300 glass`}>
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="bg-blue-100 p-2 lg:p-3 rounded-xl">
                        <Heart className="text-blue-600" size={isTablet ? 20 : 28} />
                      </div>
                      <div>
                        <p className={`font-bold text-gray-800 ${isTablet ? 'text-base' : 'text-lg'}`}>Cuidado Humanizado</p>
                        <p className={`${isTablet ? 'text-xs' : 'text-sm'} text-gray-600`}>Atendimento com excelência</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 border-l-4 border-sky-500 hover:scale-105 transition-all duration-300 glass`}>
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="bg-sky-100 p-2 lg:p-3 rounded-xl">
                        <Shield className="text-sky-500" size={isTablet ? 20 : 28} />
                      </div>
                      <div>
                        <p className={`font-bold text-gray-800 ${isTablet ? 'text-base' : 'text-lg'}`}>Tecnologia Avançada</p>
                        <p className={`${isTablet ? 'text-xs' : 'text-sm'} text-gray-600`}>Equipamentos modernos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={`w-full ${isMobile ? 'h-12' : 'h-20'} fill-white`}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Modal */}
      <ContactModal
        isOpen={isScheduleOpen}
        onClose={closeSchedule}
        type="schedule"
      />
    </>
  );
};
