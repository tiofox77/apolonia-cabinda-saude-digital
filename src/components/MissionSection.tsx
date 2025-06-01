
import { Target, Eye, Heart, CheckCircle, Star, Sparkles } from "lucide-react";

export const MissionSection = () => {
  return (
    <section id="missao" className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl mb-6 animate-scale-in">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            Nossa <span className="text-blue-600">Essência</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conheça os pilares que guiam nossa atuação e nosso compromisso com a excelência no cuidado à saúde
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Missão */}
          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:scale-105 animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Nossa Missão</h3>
            <div className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                Cuidar bem do <strong className="text-blue-600">Paciente</strong>, 
                sua <strong className="text-blue-600">família</strong>, 
                nossos <strong className="text-blue-600">colaboradores</strong> e 
                <strong className="text-blue-600"> profissionais</strong>.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Visão */}
          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:scale-105 animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Eye className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Nossa Visão</h3>
            <div className="text-center space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                Tornar-se <strong className="text-sky-600">referência a nível nacional</strong> e 
                reconhecida por todos como uma clínica médica de 
                <strong className="text-sky-600"> excelência e qualidade</strong> em todas as 
                especialidades e serviços prestados.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Valores principais */}
          <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:scale-105 animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Valores Centrais</h3>
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-lg">
                  <Star className="text-blue-600 fill-current" size={20} />
                  <span className="font-bold text-blue-600">Ética</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg">
                  <Star className="text-sky-600 fill-current" size={20} />
                  <span className="font-bold text-sky-600">Credibilidade</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-lg">
                  <Star className="text-blue-600 fill-current" size={20} />
                  <span className="font-bold text-blue-600">Confiança</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valores detalhados com design melhorado */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nossos Valores em Ação</h3>
            <p className="text-xl text-gray-600">Como aplicamos nossos princípios no dia a dia</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                <CheckCircle className="text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Foco no Paciente</h4>
              <p className="text-gray-600 leading-relaxed">Melhores práticas e soluções médicas centradas no paciente e sua família</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-sky-100 to-sky-200 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                <Sparkles className="text-sky-600 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Inovação e Excelência</h4>
              <p className="text-gray-600 leading-relaxed">Busca constante pela melhoria e atualização tecnológica</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 p-6 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                <Heart className="text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Disciplina e Colaboração</h4>
              <p className="text-gray-600 leading-relaxed">Trabalho em equipe com responsabilidade e dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
