
import { Heart, Shield, Users, Award } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Cuidando da sua <span className="text-blue-600">saúde</span> com excelência
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Localizada em Cabinda, Angola, somos uma clínica dedicada à prestação de serviços 
              de saúde e bem-estar físico e mental com profissionais qualificados e experientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                Agendar Consulta
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-semibold">
                Nossos Serviços
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600" 
                alt="Equipe médica" 
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-blue-600">
              <div className="flex items-center space-x-3">
                <Heart className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Cuidado Humanizado</p>
                  <p className="text-sm text-gray-600">Atendimento com excelência</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border-l-4 border-sky-500">
              <div className="flex items-center space-x-3">
                <Shield className="text-sky-500" size={24} />
                <div>
                  <p className="font-semibold text-gray-800">Tecnologia Avançada</p>
                  <p className="text-sm text-gray-600">Equipamentos modernos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <Users className="text-blue-600 mx-auto mb-4" size={48} />
            <p className="text-3xl font-bold text-gray-800">500+</p>
            <p className="text-gray-600">Pacientes Atendidos</p>
          </div>
          <div className="text-center">
            <Heart className="text-blue-600 mx-auto mb-4" size={48} />
            <p className="text-3xl font-bold text-gray-800">15+</p>
            <p className="text-gray-600">Especialidades</p>
          </div>
          <div className="text-center">
            <Shield className="text-blue-600 mx-auto mb-4" size={48} />
            <p className="text-3xl font-bold text-gray-800">10+</p>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <Award className="text-blue-600 mx-auto mb-4" size={48} />
            <p className="text-3xl font-bold text-gray-800">98%</p>
            <p className="text-gray-600">Satisfação dos Pacientes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
