
import { useState } from "react";

export const useContactModal = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  
  const openSchedule = () => setIsScheduleOpen(true);
  const closeSchedule = () => setIsScheduleOpen(false);

  return {
    isContactOpen,
    isScheduleOpen,
    openContact,
    closeContact,
    openSchedule,
    closeSchedule,
  };
};
