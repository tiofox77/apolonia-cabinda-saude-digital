
import { useState } from "react";

interface SelectedItem {
  id: number;
  name: string;
  description: string;
  category: string;
  type: 'service' | 'specialty';
}

export const useContactModal = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  
  const openSchedule = (item?: SelectedItem) => {
    if (item) setSelectedItem(item);
    setIsScheduleOpen(true);
  };
  const closeSchedule = () => {
    setIsScheduleOpen(false);
    setSelectedItem(null);
  };

  const openDetails = (item: SelectedItem) => {
    setSelectedItem(item);
    setIsDetailsOpen(true);
  };
  const closeDetails = () => {
    setIsDetailsOpen(false);
    setSelectedItem(null);
  };

  return {
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
  };
};
