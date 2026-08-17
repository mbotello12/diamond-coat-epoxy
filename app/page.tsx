import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicePreview";
import Problems from "@/components/home/Problems";
import ServiceArea from "@/components/home/ServicaArea";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <Problems />
      <ServiceArea />
      <CTA />
    </main>
  );
}