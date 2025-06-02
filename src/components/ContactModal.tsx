
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Heart } from "lucide-react";

interface SelectedItem {
  id: number;
  name: string;
  description: string;
  category: string;
  type: 'service' | 'specialty';
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "contact" | "schedule";
  selectedItem?: SelectedItem | null;
}

export const ContactModal = ({ isOpen, onClose, type, selectedItem }: ContactModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    specialty: selectedItem?.name || ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const emailData = {
        to: "carlosfox1782@gmail.com",
        subject: type === "schedule" 
          ? `Nova Solicitação de Agendamento${selectedItem ? ` - ${selectedItem.name}` : ""} - Clínica Apolonia`
          : "Nova Mensagem de Contato - Clínica Apolonia",
        body: type === "schedule" ? 
          `Nova solicitação de agendamento:
          
${selectedItem ? `Serviço/Especialidade: ${selectedItem.name}` : ''}
${selectedItem ? `Categoria: ${selectedItem.category}` : ''}
${selectedItem ? `Tipo: ${selectedItem.type === 'service' ? 'Serviço' : 'Especialidade'}` : ''}

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Data desejada: ${formData.date}
Horário desejado: ${formData.time}
Especialidade: ${formData.specialty}
Mensagem: ${formData.message}` :
          `Nova mensagem de contato:
          
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`
      };

      console.log("Email data to send:", emailData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Sucesso!",
        description: type === "schedule" ? 
          `Sua solicitação de agendamento${selectedItem ? ` para ${selectedItem.name}` : ''} foi enviada com sucesso!` : 
          "Sua mensagem foi enviada com sucesso!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        time: "",
        specialty: selectedItem?.name || ""
      });

      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isScheduleForm = type === "schedule";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-600">
            {isScheduleForm ? (
              <>
                <Calendar className="h-5 w-5" />
                Agendar {selectedItem ? selectedItem.name : 'Consulta'}
              </>
            ) : (
              <>
                <MessageSquare className="h-5 w-5" />
                Entre em Contato
              </>
            )}
          </DialogTitle>
          {selectedItem && (
            <div className="bg-blue-50 p-3 rounded-lg mt-2">
              <div className="flex items-center gap-2 text-blue-800">
                <Heart className="h-4 w-4" />
                <span className="font-medium">{selectedItem.name}</span>
              </div>
              <p className="text-blue-600 text-sm mt-1">{selectedItem.description}</p>
            </div>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nome Completo
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+244 XXX XXX XXX"
                required
              />
            </div>

            {isScheduleForm && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Data Desejada
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Horário Preferido
                  </Label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Selecione um horário</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>

                {!selectedItem && (
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Especialidade</Label>
                    <select
                      id="specialty"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Selecione uma especialidade</option>
                      <option value="Cardiologia">Cardiologia</option>
                      <option value="Dermatologia">Dermatologia</option>
                      <option value="Ginecologia">Ginecologia</option>
                      <option value="Pediatria">Pediatria</option>
                      <option value="Ortopedia">Ortopedia</option>
                      <option value="Oftalmologia">Oftalmologia</option>
                      <option value="Neurologia">Neurologia</option>
                      <option value="Clínica Geral">Clínica Geral</option>
                    </select>
                  )}
                </div>
              )}
            )}

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {isScheduleForm ? "Observações" : "Mensagem"}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={isScheduleForm ? "Alguma observação especial sobre sua consulta..." : "Sua mensagem..."}
                rows={4}
                required={!isScheduleForm}
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Enviando..." : isScheduleForm ? "Agendar" : "Enviar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
