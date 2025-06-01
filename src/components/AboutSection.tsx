
import { Stethoscope, Users, Heart, Award, CheckCircle, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-blue-600 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-sky-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-6 animate-scale-in">
            <Stethoscope className="text-blue-600" size={32} />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8 animate-fade-in">
            Quem <span className="text-blue-600">Somos</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Conheça nossa história de dedicação e excelência no cuidado à saúde
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Essência</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Somos uma empresa dedicada à prestação de serviços e atividades relacionadas à 
                    <strong className="text-blue-600"> saúde e bem-estar físico e mental</strong>. 
                    Nossa equipe é composta por profissionais qualificados e experientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sky-600 p-3 rounded-xl flex-shrink-0">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Nossa Abordagem</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Utilizamos <strong className="text-blue-600">abordagens inovadoras e personalizadas</strong>, 
                    combinadas com as mais recentes técnicas e equipamentos, para garantir os melhores 
                    resultados em cada serviço que oferecemos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-xl flex-shrink-0">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Nosso Compromisso</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nosso objetivo é ser um <strong className="text-blue-600">parceiro confiável</strong> em 
                    sua jornada de saúde e bem-estar, proporcionando cuidados abrangentes e de alta qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&h=600" 
                alt="Equipe médica da Clínica Apolonia" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl group-hover:from-blue-900/50 transition-all duration-500"></div>
              
              {/* Overlay stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">500+</p>
                      <p className="text-sm text-gray-600">Pacientes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">19+</p>
                      <p className="text-sm text-gray-600">Serviços</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">10+</p>
                      <p className="text-sm text-gray-600">Anos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features grid with improved design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border border-blue-200">
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 w-fit mx-auto">
              <Stethoscope className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Profissionais Qualificados</h3>
            <p className="text-gray-600 leading-relaxed">Equipe experiente e comprometida com a excelência</p>
          </div>
          
          <div className="group bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border border-sky-200">
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 w-fit mx-auto">
              <Heart className="text-sky-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Cuidados Excepcionais</h3>
            <p className="text-gray-600 leading-relaxed">Atendimento humanizado e personalizado</p>
          </div>
          
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border border-blue-200">
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 w-fit mx-auto">
              <Users className="text-blue-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Abordagem Inovadora</h3>
            <p className="text-gray-600 leading-relaxed">Técnicas modernas e equipamentos avançados</p>
          </div>
          
          <div className="group bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in border border-sky-200">
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 w-fit mx-auto">
              <Award className="text-sky-600" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Alta Qualidade</h3>
            <p className="text-gray-600 leading-relaxed">Comprometimento com os melhores resultados</p>
          </div>
        </div>
      </div>
    </section>
  );
};
