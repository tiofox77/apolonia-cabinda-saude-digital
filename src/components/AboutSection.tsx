
import { Stethoscope, Users, Heart, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Quem <span className="text-blue-600">Somos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma empresa dedicada à prestação de serviços e atividades relacionadas à 
              <strong className="text-blue-600"> saúde e bem-estar físico e mental</strong>. 
              Nossa equipe é composta por profissionais qualificados e experientes, comprometidos 
              em fornecer cuidados excepcionais e promover a qualidade de vida de nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Utilizamos <strong className="text-blue-600">abordagens inovadoras e personalizadas</strong>, 
              combinadas com as mais recentes técnicas e equipamentos, para garantir os melhores 
              resultados em cada serviço que oferecemos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nosso objetivo é ser um <strong className="text-blue-600">parceiro confiável</strong> em 
              sua jornada de saúde e bem-estar, proporcionando cuidados abrangentes e de alta qualidade.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&h=600" 
              alt="Equipe médica da Clínica Apolonia" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Stethoscope className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Profissionais Qualificados</h3>
            <p className="text-gray-600">Equipe experiente e comprometida com a excelência</p>
          </div>
          
          <div className="bg-sky-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Heart className="text-sky-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cuidados Excepcionais</h3>
            <p className="text-gray-600">Atendimento humanizado e personalizado</p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Users className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Abordagem Inovadora</h3>
            <p className="text-gray-600">Técnicas modernas e equipamentos avançados</p>
          </div>
          
          <div className="bg-sky-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Award className="text-sky-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Alta Qualidade</h3>
            <p className="text-gray-600">Comprometimento com os melhores resultados</p>
          </div>
        </div>
      </div>
    </section>
  );
};
