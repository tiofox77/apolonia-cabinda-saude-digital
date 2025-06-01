
import { useState } from "react";
import { Clock, Stethoscope, Heart, Activity, Eye, FileText, Pill, Bed, FlaskConical, UserCheck, Scissors, Briefcase, Zap, Dumbbell } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Atendimento Permanente",
    icon: Clock,
    description: "Atendimento médico 24 horas para emergências e consultas urgentes",
    category: "emergencia"
  },
  {
    id: 2,
    name: "Audiometria",
    icon: Activity,
    description: "Exames para avaliação da capacidade auditiva",
    category: "exames"
  },
  {
    id: 3,
    name: "Clínica Geral",
    icon: Stethoscope,
    description: "Consultas médicas gerais e acompanhamento de saúde",
    category: "consultas"
  },
  {
    id: 4,
    name: "Análises Clínicas",
    icon: FlaskConical,
    description: "Exames laboratoriais completos para diagnósticos precisos",
    category: "laboratorio"
  },
  {
    id: 5,
    name: "Consulta",
    icon: UserCheck,
    description: "Consultas médicas especializadas em diversas áreas",
    category: "consultas"
  },
  {
    id: 6,
    name: "Ecografia",
    icon: Activity,
    description: "Exames de ultrassom para diagnósticos por imagem",
    category: "exames"
  },
  {
    id: 7,
    name: "Eletrocardiograma",
    icon: Activity,
    description: "Exames cardiológicos para avaliação do coração",
    category: "exames"
  },
  {
    id: 8,
    name: "Emergências Médicas",
    icon: Heart,
    description: "Atendimento imediato para situações de emergência",
    category: "emergencia"
  },
  {
    id: 9,
    name: "Enfermagem",
    icon: UserCheck,
    description: "Cuidados de enfermagem especializados",
    category: "cuidados"
  },
  {
    id: 10,
    name: "Espirometria",
    icon: Activity,
    description: "Exames para avaliação da função pulmonar",
    category: "exames"
  },
  {
    id: 11,
    name: "Exâmes Complementares",
    icon: FileText,
    description: "Diversos exames complementares para diagnósticos",
    category: "exames"
  },
  {
    id: 12,
    name: "Farmácia",
    icon: Pill,
    description: "Medicamentos e produtos farmacêuticos",
    category: "farmacia"
  },
  {
    id: 13,
    name: "Internamento",
    icon: Bed,
    description: "Serviços de internação hospitalar",
    category: "internacao"
  },
  {
    id: 14,
    name: "Laboratório de Análises Clínica",
    icon: FlaskConical,
    description: "Laboratório completo para análises clínicas",
    category: "laboratorio"
  },
  {
    id: 15,
    name: "Medicina Interna",
    icon: Stethoscope,
    description: "Especialidade em medicina interna",
    category: "consultas"
  },
  {
    id: 16,
    name: "Pequena Cirurgia",
    icon: Scissors,
    description: "Procedimentos cirúrgicos ambulatoriais",
    category: "cirurgia"
  },
  {
    id: 17,
    name: "Saúde Ocupacional",
    icon: Briefcase,
    description: "Medicina do trabalho e saúde ocupacional",
    category: "ocupacional"
  },
  {
    id: 18,
    name: "Cirurgias Maxilofaciais",
    icon: Scissors,
    description: "Cirurgias especializadas da face e mandíbula",
    category: "cirurgia"
  },
  {
    id: 19,
    name: "Fisioterapia Adulto e Infantil",
    icon: Dumbbell,
    description: "Reabilitação física para adultos e crianças",
    category: "reabilitacao"
  }
];

const categories = [
  { id: "todos", name: "Todos os Serviços", color: "bg-blue-600" },
  { id: "emergencia", name: "Emergência", color: "bg-red-500" },
  { id: "consultas", name: "Consultas", color: "bg-green-500" },
  { id: "exames", name: "Exames", color: "bg-purple-500" },
  { id: "laboratorio", name: "Laboratório", color: "bg-orange-500" },
  { id: "cirurgia", name: "Cirurgia", color: "bg-indigo-500" },
  { id: "cuidados", name: "Cuidados", color: "bg-pink-500" },
];

export const ServicesList = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === "todos" || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Explore Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-medium text-sm group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum serviço encontrado para "{searchTerm}"</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Precisa de atendimento?</h3>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco para agendar sua consulta ou tirar dúvidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
