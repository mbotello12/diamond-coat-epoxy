import type { Metadata } from "next";

import Hero from "@/components/about/Hero"
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import WhyChoose from "@/components/about/WhyChoose";
import CTA from "@/components/about/CTA"

export const metadata: Metadata = {
  title: "About Diamond Coat Epoxy Solutions | Austin TX",
  description:
    "Learn about Diamond Coat Epoxy Solutions, a local Austin epoxy flooring company focused on quality craftsmanship, personalized service, and custom epoxy solutions.",
};

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