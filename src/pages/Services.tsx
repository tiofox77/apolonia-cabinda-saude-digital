
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/ServicesHero";
import { ServicesList } from "@/components/ServicesList";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
