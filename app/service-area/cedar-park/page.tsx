import type { Metadata } from "next";

import ServiceAreaHero from "@/components/service-area/ServiceAreaHero";
import LocalServices from "@/components/service-area/LocalServices";
import LocalAbout from "@/components/service-area/LocalAbout";
import ServiceAreaCTA from "@/components/service-area/ServiceAreaCTA";

export const metadata: Metadata = {
  title: "Epoxy Flooring Cedar Park TX | Diamond Coat Epoxy Solutions",
  description:
    "Professional epoxy flooring in Cedar Park, TX. Diamond Coat Epoxy Solutions offers flake flooring, metallic epoxy, and custom epoxy builds for residential and commercial properties.",
};

export default function CedarParkPage() {
  return (
    <>
      <ServiceAreaHero
        city="Cedar Park"
        description="Diamond Coat Epoxy Solutions provides durable, professional epoxy flooring and custom epoxy surfaces for residential and commercial properties throughout Cedar Park, Texas."
      />

      <LocalServices city="Cedar Park" />

      <LocalAbout
        city="Cedar Park"
        content="Cedar Park properties see plenty of everyday wear, making durable and easy-to-maintain flooring a valuable investment. Our epoxy flooring systems are designed to provide a long-lasting surface while giving your space a clean, finished appearance."
      />

      <ServiceAreaCTA city="Cedar Park" />
    </>
  );
}