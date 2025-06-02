import { useState } from "react";
import { Clock, Stethoscope, Heart, Activity, Eye, FileText, Pill, Bed, FlaskConical, UserCheck, Scissors, Briefcase, Zap, Dumbbell } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { ContactModal } from "./ContactModal";
import { DetailsModal } from "./DetailsModal";

const services = [
  {
    id: 1,
    name: "Atendimento Permanente",
    icon: Clock,
    description: "Atendimento médico 24 horas para emergências e consultas urgentes",
    category: "emergencia",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Audiometria",
    icon: Activity,
    description: "Exames para avaliação da capacidade auditiva",
    category: "exames",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Clínica Geral",
    icon: Stethoscope,
    description: "Consultas médicas gerais e acompanhamento de saúde",
    category: "consultas",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Análises Clínicas",
    icon: FlaskConical,
    description: "Exames laboratoriais completos para diagnósticos precisos",
    category: "laboratorio",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Consulta",
    icon: UserCheck,
    description: "Consultas médicas especializadas em diversas áreas",
    category: "consultas",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Ecografia",
    icon: Activity,
    description: "Exames de ultrassom para diagnósticos por imagem",
    category: "exames",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Eletrocardiograma",
    icon: Activity,
    description: "Exames cardiológicos para avaliação do coração",
    category: "exames",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Emergências Médicas",
    icon: Heart,
    description: "Atendimento imediato para situações de emergência",
    category: "emergencia",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    name: "Enfermagem",
    icon: UserCheck,
    description: "Cuidados de enfermagem especializados",
    category: "cuidados",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    name: "Espirometria",
    icon: Activity,
    description: "Exames para avaliação da função pulmonar",
    category: "exames",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    name: "Exâmes Complementares",
    icon: FileText,
    description: "Diversos exames complementares para diagnósticos",
    category: "exames",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    name: "Farmácia",
    icon: Pill,
    description: "Medicamentos e produtos farmacêuticos",
    category: "farmacia",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ae?w=400&h=300&fit=crop"
  },
  {
    id: 13,
    name: "Internamento",
    icon: Bed,
    description: "Serviços de internação hospitalar",
    category: "internacao",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop"
  },
  {
    id: 14,
    name: "Laboratório de Análises Clínica",
    icon: FlaskConical,
    description: "Laboratório completo para análises clínicas",
    category: "laboratorio",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop"
  },
  {
    id: 15,
    name: "Medicina Interna",
    icon: Stethoscope,
    description: "Especialidade em medicina interna",
    category: "consultas",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
  },
  {
    id: 16,
    name: "Pequena Cirurgia",
    icon: Scissors,
    description: "Procedimentos cirúrgicos ambulatoriais",
    category: "cirurgia",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop"
  },
  {
    id: 17,
    name: "Saúde Ocupacional",
    icon: Briefcase,
    description: "Medicina do trabalho e saúde ocupacional",
    category: "ocupacional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    name: "Cirurgias Maxilofaciais",
    icon: Scissors,
    description: "Cirurgias especializadas da face e mandíbula",
    category: "cirurgia",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
  },
  {
    id: 19,
    name: "Fisioterapia Adulto e Infantil",
    icon: Dumbbell,
    description: "Reabilitação física para adultos e crianças",
    category: "reabilitacao",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
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
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  const {
    isContactOpen,
    isScheduleOpen,
    isDetailsOpen,
    selectedItem,
    openContact,
    closeContact,
    openSchedule,
    closeSchedule,
    openDetails,
    closeDetails,
  } = useContactModal();

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === "todos" || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleScheduleClick = (service: any) => {
    const serviceItem = {
      id: service.id,
      name: service.name,
      description: service.description,
      category: service.category,
      type: 'service' as const,
      image: service.image
    };
    openSchedule(serviceItem);
  };

  const handleDetailsClick = (service: any) => {
    const serviceItem = {
      id: service.id,
      name: service.name,
      description: service.description,
      category: service.category,
      type: 'service' as const,
      image: service.image
    };
    openDetails(serviceItem);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Explore Nossos <span className="text-blue-600">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mb-8 animate-scale-in"></div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12 animate-slide-up">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar serviço..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-8 py-4 rounded-2xl border-2 border-transparent bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 text-lg"
                />
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-2xl scale-105`
                    : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Action Area */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button 
                        onClick={() => handleDetailsClick(service)}
                        className="text-blue-600 font-semibold text-sm hover:underline transition-all duration-300"
                      >
                        Saiba mais
                      </button>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <div className="w-4 h-4 border-2 border-blue-600 group-hover:border-white rounded-full transform group-hover:rotate-45 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-600/95 to-sky-600/95 flex items-center justify-center transition-all duration-500 ${
                    hoveredService === service.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="text-center text-white p-6">
                      <IconComponent size={48} className="mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-2">{service.name}</h4>
                      <p className="text-sm opacity-90 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <button 
                          onClick={() => handleScheduleClick(service)}
                          className="w-full bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          Agendar Consulta
                        </button>
                        <button 
                          onClick={() => handleDetailsClick(service)}
                          className="w-full border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 text-xl">Nenhum serviço encontrado para "{searchTerm}"</p>
              <p className="text-gray-400 mt-2">Tente buscar por outro termo</p>
            </div>
          )}

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 rounded-3xl p-16 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">Precisa de atendimento?</h3>
                <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                  Entre em contato conosco para agendar sua consulta ou tirar dúvidas. 
                  Estamos aqui para cuidar da sua saúde com excelência.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
                    Agendar Consulta
                  </button>
                  <button className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-bold hover:shadow-xl transform hover:scale-105">
                    Entrar em Contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        type="contact"
        selectedItem={selectedItem}
      />
      <ContactModal
        isOpen={isScheduleOpen}
        onClose={closeSchedule}
        type="schedule"
        selectedItem={selectedItem}
      />
      <DetailsModal
        isOpen={isDetailsOpen}
        onClose={closeDetails}
        item={selectedItem}
        onSchedule={() => {
          closeDetails();
          openSchedule(selectedItem);
        }}
      />
    </>
  );
};
