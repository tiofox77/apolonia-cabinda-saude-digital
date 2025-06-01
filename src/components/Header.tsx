
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+244 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Cabinda, Angola</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Seg-Sex: 7h-18h | Sáb: 7h-13h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/0253370c-49c9-46f5-b2c1-444c8c2a12d7.png" 
                alt="Clínica Apolonia" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</Link>
              <a href="#quem-somos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Quem Somos</a>
              <Link to="/servicos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</Link>
              <Link to="/especialidades" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Especialidades</Link>
              <a href="#missao" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Missão & Visão</a>
              <a href="#cultura" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Atendimento</a>
              <a href="#contato" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Início</Link>
              <a href="#quem-somos" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Quem Somos</a>
              <Link to="/servicos" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</Link>
              <Link to="/especialidades" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Especialidades</Link>
              <a href="#missao" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Missão & Visão</a>
              <a href="#cultura" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Atendimento</a>
              <a href="#contato" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">Contato</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
