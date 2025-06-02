
import { useState } from 'react';
import { Home, Briefcase, Stethoscope, Phone, Calendar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContactModal } from '@/hooks/useContactModal';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';

export const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isMobile, isTablet } = useDeviceDetection();
  const { openSchedule } = useContactModal();

  if (!isMobile && !isTablet) return null;

  const navItems = [
    { icon: Home, label: 'Início', path: '/', id: 'home' },
    { icon: Briefcase, label: 'Serviços', path: '/servicos', id: 'services' },
    { icon: Stethoscope, label: 'Especialidades', path: '/especialidades', id: 'specialties' },
    { icon: Calendar, label: 'Agendar', action: () => openSchedule(), id: 'schedule' },
  ];

  const handleItemClick = (item: any) => {
    if (item.action) {
      item.action();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Menu de navegação"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 shadow-2xl">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => handleItemClick(item)}
                      className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon size={28} className="mb-2" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleItemClick(item)}
                      className="flex flex-col items-center p-4 rounded-2xl bg-green-100 text-green-600 hover:bg-green-200 transition-all duration-200 w-full"
                    >
                      <item.icon size={28} className="mb-2" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar for Tablets */}
      {isTablet && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 safe-area-pb">
          <div className="flex justify-around items-center py-2">
            {navItems.map((item) => (
              <div key={item.id} className="flex-1">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`flex flex-col items-center py-3 px-2 transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="text-xs mt-1">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleItemClick(item)}
                    className="flex flex-col items-center py-3 px-2 text-green-600 w-full"
                  >
                    <item.icon size={20} />
                    <span className="text-xs mt-1">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
