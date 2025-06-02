
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  CheckCircle, 
  Users,
  Award,
  Heart
} from "lucide-react";

interface SelectedItem {
  id: number;
  name: string;
  description: string;
  category: string;
  type: 'service' | 'specialty';
  image?: string;
}

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: SelectedItem | null;
  onSchedule: () => void;
}

export const DetailsModal = ({ isOpen, onClose, item, onSchedule }: DetailsModalProps) => {
  if (!item) return null;

  const benefits = [
    "Equipamentos de última geração",
    "Profissionais especializados",
    "Atendimento personalizado",
    "Resultados rápidos e precisos"
  ];

  const features = [
    { icon: Clock, label: "Consulta rápida", value: "30-60 min" },
    { icon: Users, label: "Equipe especializada", value: "5+ anos exp." },
    { icon: Award, label: "Certificação", value: "ISO 9001" },
    { icon: Star, label: "Avaliação", value: "4.9/5" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl text-blue-600">
            <Heart className="h-6 w-6" />
            {item.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          {item.image && (
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <Badge className="absolute top-4 left-4 bg-blue-600">
                {item.type === 'service' ? 'Serviço' : 'Especialidade'}
              </Badge>
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sobre este {item.type === 'service' ? 'serviço' : 'especialidade'}</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {item.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{feature.label}</p>
                    <p className="text-blue-600 text-xs font-semibold">{feature.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Benefícios</h3>
            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações de Contato</h3>
            <div className="grid gap-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">+244 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">carlosfox1782@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">Cabinda, Angola</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">Seg-Sex: 7h-18h | Sáb: 7h-13h</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={onSchedule}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Agendar {item.type === 'service' ? 'Serviço' : 'Consulta'}
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 py-3 rounded-xl font-semibold"
            >
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
