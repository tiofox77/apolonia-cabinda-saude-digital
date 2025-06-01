
import { Stethoscope, Heart, UserCheck, Calendar, Phone, MapPin } from "lucide-react";

export const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 opacity-20 animate-float">
          <Stethoscope size={40} className="text-white" />
        </div>
        <div className="absolute top-1/3 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={36} className="text-white" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <UserCheck size={32} className="text-white" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 animate-fade-in">
            <Stethoscope className="text-white" size={40} />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Nossos <span className="text-sky-200">Serviços</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90 animate-slide-up">
            Oferecemos uma ampla gama de serviços médicos especializados, 
            equipados com tecnologia de ponta e profissionais altamente qualificados 
            para cuidar da sua saúde com excelência.
          </p>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-fade-in group">
              <Heart className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-2xl font-bold text-white mb-3">19+</h3>
              <p className="text-sky-100 text-lg">Serviços Especializados</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <UserCheck className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-2xl font-bold text-white mb-3">24/7</h3>
              <p className="text-sky-100 text-lg">Atendimento Permanente</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
              <Stethoscope className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-2xl font-bold text-white mb-3">100%</h3>
              <p className="text-sky-100 text-lg">Profissionais Qualificados</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
              <Calendar size={24} />
              Agendar Consulta
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-bold hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
              <Phone size={24} />
              Entrar em Contato
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 text-sky-100">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+244 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Cabinda, Angola</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
