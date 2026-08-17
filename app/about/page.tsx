import Hero from "@/components/about/Hero"
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import WhyChoose from "@/components/about/WhyChoose";
import CTA from "@/components/about/CTA"


export default function About() {
  return (
    <main>
      <Hero />
      <Story />
      <Values />
      <WhyChoose />
      <CTA />
    </main>
  );
}