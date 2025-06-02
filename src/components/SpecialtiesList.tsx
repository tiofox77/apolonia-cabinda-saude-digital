import { useState } from "react";
import { Search, Brain, Heart, Eye, Baby, Bone, Stethoscope, Microscope, Scissors, Users, Activity, Zap, Pill, Shield, Plus } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { ContactModal } from "./ContactModal";
import { DetailsModal } from "./DetailsModal";

const specialties = [
  {
    id: 1,
    name: "Cardiologia",
    icon: Heart,
    description: "Diagnóstico e tratamento de doenças cardiovasculares com tecnologia avançada",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&h=400&fit=crop",
    color: "from-red-500 to-pink-500",
    accent: "red"
  },
  {
    id: 2,
    name: "Neurologia",
    icon: Brain,
    description: "Especialidade em doenças do sistema nervoso central e periférico",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    color: "from-purple-500 to-indigo-500",
    accent: "purple"
  },
  {
    id: 3,
    name: "Oftalmologia",
    icon: Eye,
    description: "Cuidados completos para a saúde dos seus olhos e visão",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    color: "from-green-500 to-emerald-500",
    accent: "green"
  },
  {
    id: 4,
    name: "Pediatria",
    icon: Baby,
    description: "Atendimento especializado para bebês, crianças e adolescentes",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    color: "from-blue-500 to-cyan-500",
    accent: "blue"
  },
  {
    id: 5,
    name: "Ortopedia",
    icon: Bone,
    description: "Tratamento de lesões e doenças do sistema musculoesquelético",
    category: "cirurgia",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5033842?w=600&h=400&fit=crop",
    color: "from-orange-500 to-yellow-500",
    accent: "orange"
  },
  {
    id: 6,
    name: "Dermatologia",
    icon: Shield,
    description: "Cuidados especializados para a saúde da sua pele",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
    color: "from-pink-500 to-rose-500",
    accent: "pink"
  },
  {
    id: 7,
    name: "Psiquiatria",
    icon: Brain,
    description: "Tratamento de transtornos mentais e saúde emocional",
    category: "mental",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    color: "from-indigo-500 to-purple-500",
    accent: "indigo"
  },
  {
    id: 8,
    name: "Ginecologia",
    icon: Users,
    description: "Saúde integral da mulher em todas as fases da vida",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    color: "from-teal-500 to-cyan-500",
    accent: "teal"
  },
  {
    id: 9,
    name: "Urologia",
    icon: Activity,
    description: "Especialidade em sistema urinário e reprodutor masculino",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
    color: "from-blue-600 to-indigo-600",
    accent: "blue"
  },
  {
    id: 10,
    name: "Endocrinologia",
    icon: Pill,
    description: "Tratamento de distúrbios hormonais e metabólicos",
    category: "clinica",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ae?w=600&h=400&fit=crop",
    color: "from-violet-500 to-purple-500",
    accent: "violet"
  },
  {
    id: 11,
    name: "Cirurgia Geral",
    icon: Scissors,
    description: "Procedimentos cirúrgicos diversos com técnicas minimamente invasivas",
    category: "cirurgia",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    color: "from-red-600 to-pink-600",
    accent: "red"
  },
  {
    id: 12,
    name: "Anestesiologia",
    icon: Zap,
    description: "Gestão da dor e anestesia para procedimentos médicos",
    category: "cirurgia",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    color: "from-gray-600 to-slate-600",
    accent: "gray"
  },
  {
    id: 13,
    name: "Patologia",
    icon: Microscope,
    description: "Diagnóstico laboratorial e análise de tecidos",
    category: "diagnostico",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=400&fit=crop",
    color: "from-emerald-500 to-green-500",
    accent: "emerald"
  },
  {
    id: 14,
    name: "Radiologia",
    icon: Activity,
    description: "Diagnóstico por imagem com equipamentos de última geração",
    category: "diagnostico",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    color: "from-cyan-500 to-blue-500",
    accent: "cyan"
  },
  {
    id: 15,
    name: "Medicina Intensiva",
    icon: Activity,
    description: "Cuidados intensivos para pacientes críticos",
    category: "emergencia",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
    color: "from-red-500 to-orange-500",
    accent: "red"
  }
];

const categories = [
  { id: "todos", name: "Todas", color: "from-slate-600 to-gray-600", icon: Plus },
  { id: "clinica", name: "Clínica Médica", color: "from-blue-600 to-indigo-600", icon: Stethoscope },
  { id: "cirurgia", name: "Cirurgia", color: "from-red-600 to-pink-600", icon: Scissors },
  { id: "diagnostico", name: "Diagnóstico", color: "from-green-600 to-emerald-600", icon: Microscope },
  { id: "mental", name: "Saúde Mental", color: "from-purple-600 to-indigo-600", icon: Brain },
  { id: "emergencia", name: "Emergência", color: "from-orange-600 to-red-600", icon: Activity },
];

export const SpecialtiesList = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null);
  
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

  const filteredSpecialties = specialties.filter(specialty => {
    const matchesCategory = activeCategory === "todos" || specialty.category === activeCategory;
    const matchesSearch = specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         specialty.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleScheduleClick = (specialty: any) => {
    const specialtyItem = {
      id: specialty.id,
      name: specialty.name,
      description: specialty.description,
      category: specialty.category,
      type: 'specialty' as const,
      image: specialty.image
    };
    openSchedule(specialtyItem);
  };

  const handleDetailsClick = (specialty: any) => {
    const specialtyItem = {
      id: specialty.id,
      name: specialty.name,
      description: specialty.description,
      category: specialty.category,
      type: 'specialty' as const,
      image: specialty.image
    };
    openDetails(specialtyItem);
  };

  return (
    <>
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-white/80 backdrop-blur-xl rounded-3xl mb-8 animate-fade-in border border-blue-200/50 shadow-xl">
              <Microscope className="text-blue-600 mr-3" size={32} />
              <span className="text-blue-800 font-bold text-lg">Especialidades Médicas</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Excelência em
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Cada Especialidade
              </span>
            </h2>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-16 animate-slide-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
                  <div className="relative flex items-center p-2">
                    <Search className="text-blue-600 ml-6 mr-4 flex-shrink-0" size={24} />
                    <input
                      type="text"
                      placeholder="Buscar especialidade..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 bg-transparent px-4 py-4 text-lg text-gray-800 placeholder-gray-500 focus:outline-none"
                    />
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-2 shadow-lg">
                      <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105 transform ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                      : "bg-white/80 backdrop-blur-xl text-gray-700 hover:bg-white border border-gray-200/50 hover:border-blue-300/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    {category.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Enhanced Specialties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {filteredSpecialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              const isHovered = hoveredSpecialty === specialty.id;
              
              return (
                <div
                  key={specialty.id}
                  className="group relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden cursor-pointer transform hover:scale-105 border border-gray-200/50 hover:border-blue-300/50"
                  onMouseEnter={() => setHoveredSpecialty(specialty.id)}
                  onMouseLeave={() => setHoveredSpecialty(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                  
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={specialty.image} 
                      alt={specialty.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 border border-gray-200/50">
                      <IconComponent className={`text-${specialty.accent}-600`} size={32} />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-lg text-sm font-bold text-gray-800 shadow-lg border border-gray-200/50">
                      {categories.find(cat => cat.id === specialty.category)?.name}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative p-8">
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-${specialty.accent}-600 transition-colors duration-500 text-gray-800`}>
                      {specialty.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {specialty.description}
                    </p>
                    
                    {/* Action Area */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                      <button
                        onClick={() => handleDetailsClick(specialty)}
                        className={`text-${specialty.accent}-600 font-bold text-sm group-hover:underline transition-all duration-300`}
                      >
                        Saiba mais
                      </button>
                      <div className={`w-10 h-10 bg-${specialty.accent}-100 rounded-2xl flex items-center justify-center group-hover:bg-${specialty.accent}-600 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                        <div className={`w-5 h-5 border-2 border-${specialty.accent}-600 group-hover:border-white rounded-full transform group-hover:rotate-45 transition-all duration-500`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay with Enhanced Interaction */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.color} flex items-center justify-center transition-all duration-700 ${
                    isHovered ? 'opacity-95 backdrop-blur-xl' : 'opacity-0 pointer-events-none'
                  }`}>
                    <div className="text-center text-white p-8 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <div className="relative mb-6">
                        <IconComponent size={80} className="mx-auto animate-pulse" />
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                      </div>
                      <h4 className="text-3xl font-bold mb-4">{specialty.name}</h4>
                      <p className="text-lg opacity-90 mb-8 max-w-sm mx-auto leading-relaxed">{specialty.description}</p>
                      <div className="space-y-4">
                        <button 
                          onClick={() => handleScheduleClick(specialty)}
                          className="w-full bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
                        >
                          Agendar Consulta
                        </button>
                        <button 
                          onClick={() => handleDetailsClick(specialty)}
                          className="w-full border-2 border-white/30 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                          Ver Mais Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No results state */}
          {filteredSpecialties.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full mb-8 shadow-xl">
                <Search className="text-gray-400" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-4">Nenhuma especialidade encontrada</h3>
              <p className="text-gray-500 text-xl max-w-md mx-auto">Tente buscar por outro termo ou explore todas as nossas especialidades</p>
            </div>
          )}

          {/* Enhanced Call to Action */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-16 text-white overflow-hidden shadow-3xl">
              {/* Background patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Floating medical icons */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-16 left-16 opacity-20 animate-float">
                  <Heart size={40} className="text-white" />
                </div>
                <div className="absolute bottom-16 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
                  <Brain size={36} className="text-white" />
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pronto para cuidar da sua saúde?
                </h3>
                <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Nossa equipe multidisciplinar está pronta para oferecer o melhor atendimento 
                  em cada especialidade. Agende sua consulta e transforme sua qualidade de vida.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      <Heart size={28} className="group-hover:scale-110 transition-transform duration-300" />
                      Agendar Consulta
                    </span>
                  </button>
                  <button className="group border-2 border-white/30 backdrop-blur-xl text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/50 shadow-2xl">
                    <span className="flex items-center justify-center gap-3">
                      <Plus size={28} className="group-hover:scale-110 transition-transform duration-300" />
                      Ver Todos os Serviços
                    </span>
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
