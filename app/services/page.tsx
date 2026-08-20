import type { Metadata } from "next";

import CTA from "@/components/about/CTA";
import CustomEpoxy from "@/components/services/CustomEpoxy";
import FlakeFlooring from "@/components/services/FlakeFlooring";
import MetallicEpoxy from "@/components/services/MetalicEpoxy";
import Process from "@/components/services/Process";
import ServicesHero from "@/components/services/ServicesHero";


export const metadata: Metadata = {
  title: "Epoxy Flooring Services Austin TX | Diamond Coat",
  description:
    "Explore epoxy flake flooring, metallic epoxy floors, and custom epoxy builds from Diamond Coat Epoxy Solutions serving Austin, TX and surrounding areas.",
};



export default function Services() {
  return (
    <main>
        <ServicesHero />
        <CustomEpoxy />
        <MetallicEpoxy />
        <FlakeFlooring />
        <Process />
        <CTA />
    </main>
  );
}