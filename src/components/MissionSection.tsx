
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

export const MissionSection = () => {
  return (
    <section id="missao" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossa <span className="text-blue-600">Essência</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os pilares que guiam nossa atuação e nosso compromisso com a excelência
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Nossa Missão</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Cuidar bem do <strong className="text-blue-600">Paciente</strong>, 
              sua <strong className="text-blue-600">família</strong>, 
              nossos <strong className="text-blue-600">colaboradores</strong> e 
              <strong className="text-blue-600"> profissionais</strong>.
            </p>
          </div>
          
          {/* Visão */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 mx-auto">
              <Eye className="text-sky-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Nossa Visão</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Tornar-se <strong className="text-sky-600">referência a nível nacional</strong> e 
              reconhecida por todos como uma clínica médica de 
              <strong className="text-sky-600"> excelência e qualidade</strong> em todas as 
              especialidades e serviços prestados.
            </p>
          </div>
          
          {/* Valores principais */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Heart className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Valores Centrais</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold text-blue-600">Ética</span>
                <span className="text-gray-400">•</span>
                <span className="font-semibold text-blue-600">Credibilidade</span>
                <span className="text-gray-400">•</span>
                <span className="font-semibold text-blue-600">Confiança</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valores detalhados */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Nossos Valores em Ação</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Foco no Paciente</h4>
              <p className="text-gray-600 text-sm">Melhores práticas e soluções médicas centradas no paciente</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="text-sky-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Inovação e Excelência</h4>
              <p className="text-gray-600 text-sm">Busca constante pela melhoria e atualização tecnológica</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Disciplina e Colaboração</h4>
              <p className="text-gray-600 text-sm">Trabalho em equipe com responsabilidade e dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
