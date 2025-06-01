
import { Brain, Heart, Eye, Baby, Bone, Microscope, Shield, Zap } from "lucide-react";

export const SpecialtiesHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating medical symbols */}
        <div className="absolute top-20 left-20 opacity-10 animate-float">
          <div className="w-16 h-48 bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
          <div className="w-48 h-16 bg-gradient-to-r from-blue-400 to-transparent rounded-full -mt-32 ml-4"></div>
        </div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 right-20 w-64 h-64 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-32 w-48 h-48 border border-indigo-300/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-400/20 rounded-full animate-pulse-slow"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/3 left-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Brain size={60} className="text-blue-300" />
        </div>
        <div className="absolute bottom-1/3 right-24 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Heart size={50} className="text-red-300" />
        </div>
        <div className="absolute top-1/2 right-16 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Eye size={45} className="text-green-300" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* Floating badge */}
          <div className="inline-flex items-center justify-center p-6 bg-white/10 backdrop-blur-xl rounded-3xl mb-12 animate-fade-in border border-white/20 shadow-2xl">
            <div className="flex space-x-4">
              <Microscope className="text-blue-300 animate-pulse" size={32} />
              <Heart className="text-red-300 animate-pulse" size={32} style={{ animationDelay: '0.5s' }} />
              <Brain className="text-purple-300 animate-pulse" size={32} style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Especialidades
            </span>
            <span className="block text-4xl lg:text-5xl font-normal text-blue-200 mt-6 animate-slide-up">
              Médicas Avançadas
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-16 max-w-5xl mx-auto leading-relaxed text-blue-100/90 animate-slide-up">
            Nossa equipe multidisciplinar oferece especialidades médicas de excelência, 
            equipadas com tecnologia de última geração para diagnósticos precisos e 
            tratamentos personalizados que transformam vidas.
          </p>
          
          {/* Interactive stats grid */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 animate-fade-in border border-white/10 hover:border-blue-400/50 shadow-2xl cursor-pointer">
              <div className="relative">
                <Brain className="text-blue-300 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:text-blue-200" size={56} />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-500">15+</h3>
              <p className="text-blue-200 text-lg group-hover:text-blue-100 transition-colors duration-500">Especialidades</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 animate-fade-in border border-white/10 hover:border-red-400/50 shadow-2xl cursor-pointer" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <Heart className="text-red-300 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:text-red-200" size={56} />
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:bg-red-400/30 transition-all duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-500">24/7</h3>
              <p className="text-blue-200 text-lg group-hover:text-red-100 transition-colors duration-500">Disponibilidade</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 animate-fade-in border border-white/10 hover:border-green-400/50 shadow-2xl cursor-pointer" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Shield className="text-green-300 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:text-green-200" size={56} />
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-400/30 transition-all duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors duration-500">100%</h3>
              <p className="text-blue-200 text-lg group-hover:text-green-100 transition-colors duration-500">Qualificados</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-110 animate-fade-in border border-white/10 hover:border-purple-400/50 shadow-2xl cursor-pointer" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <Zap className="text-purple-300 mx-auto mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:text-purple-200" size={56} />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-400/30 transition-all duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-500">98%</h3>
              <p className="text-blue-200 text-lg group-hover:text-purple-100 transition-colors duration-500">Satisfação</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-20">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative flex items-center justify-center gap-3">
                <Heart size={24} className="group-hover:scale-110 transition-transform duration-300" />
                Agendar Consulta
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
            </button>
            
            <button className="group border-2 border-white/30 backdrop-blur-xl text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/50 shadow-2xl">
              <span className="flex items-center justify-center gap-3">
                <Eye size={24} className="group-hover:scale-110 transition-transform duration-300" />
                Ver Todas as Especialidades
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave with gradient */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#3730a3" />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#waveGradient)"></path>
        </svg>
      </div>
    </section>
  );
};
