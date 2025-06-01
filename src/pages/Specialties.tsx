
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialtiesHero } from "@/components/SpecialtiesHero";
import { SpecialtiesList } from "@/components/SpecialtiesList";

const Specialties = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <SpecialtiesHero />
      <SpecialtiesList />
      <Footer />
    </div>
  );
};

export default Specialties;
