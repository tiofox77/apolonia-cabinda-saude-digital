
import { Stethoscope, Heart, UserCheck } from "lucide-react";

export const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6 animate-fade-in">
            <Stethoscope className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in">
            Nossos <span className="text-blue-600">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Oferecemos uma ampla gama de serviços médicos especializados, 
            equipados com tecnologia de ponta e profissionais altamente qualificados 
            para cuidar da sua saúde com excelência.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Heart className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cuidados Especializados</h3>
              <p className="text-gray-600 text-sm">Atendimento médico especializado em diversas áreas</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <UserCheck className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Profissionais Qualificados</h3>
              <p className="text-gray-600 text-sm">Equipe médica experiente e dedicada</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Stethoscope className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tecnologia Avançada</h3>
              <p className="text-gray-600 text-sm">Equipamentos modernos para diagnósticos precisos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
