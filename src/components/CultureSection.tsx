
import { Star, Users, Heart, Shield, Award, UserCheck } from "lucide-react";

export const CultureSection = () => {
  const principles = [
    { icon: Heart, title: "Humanismo", description: "Tratamento humano e empático" },
    { icon: Shield, title: "Ética", description: "Conduta profissional exemplar" },
    { icon: Award, title: "Profissionalismo", description: "Excelência em cada atendimento" },
    { icon: Users, title: "Respeito", description: "Valorização de cada pessoa" },
    { icon: Star, title: "Consideração", description: "Atenção às necessidades individuais" },
    { icon: UserCheck, title: "Valorização", description: "Reconhecimento da importância de cada cliente" }
  ];

  return (
    <section id="cultura" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Cultura de <span className="text-blue-600">Atendimento</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Para a nossa Instituição, o atendimento ao Cliente é por excelência nosso fator de diferenciação concorrencial
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                <Star className="mr-3" size={28} />
                "O Cliente é nosso Patrão"
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nossa cultura de atendimento define o Cliente como "nosso Patrão". 
                Parte do nosso foco é a satisfação do cliente, e nosso fim com o 
                atendimento é a <strong className="text-blue-600">fidelização do cliente</strong>.
              </p>
            </div>
            
            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-sky-600 mb-4">Nosso Compromisso</h3>
              <p className="text-gray-700 leading-relaxed">
                Procuramos sempre proporcionar aos nossos Clientes e todos stakeholders, 
                um atendimento e tratamento de <strong className="text-sky-600">Excelência</strong>, 
                caracterizado com elevado senso de humanismo, ética e profissionalismo.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600" 
              alt="Atendimento na Clínica Apolonia" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-sky-600/20 rounded-2xl"></div>
          </div>
        </div>
        
        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
                  <principle.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{principle.title}</h4>
              </div>
              <p className="text-gray-600">{principle.description}</p>
              <div className="w-8 h-1 bg-blue-600 mt-4"></div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Experimente a Diferença</h3>
            <p className="text-xl mb-6 opacity-90">
              Venha conhecer nosso atendimento de excelência e faça parte da nossa família de pacientes satisfeitos
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
