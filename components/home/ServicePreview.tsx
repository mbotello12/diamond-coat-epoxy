import Image from "next/image";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      title: "Epoxy Flake Flooring",
      desc: "Durable, slip-resistant garage floors built for heavy use and easy maintenance.",
      image: "/images/flake.PNG",
    },
    {
      title: "Metallic Epoxy Floors",
      desc: "High-end, marble-like finishes that elevate interior residential and commercial spaces.",
      image: "/images/metallic.png",
    },
    {
      title: "Custom Epoxy Builds",
      desc: "Custom epoxy platforms, tables, countertops, and specialty surfaces built for durability and design.",
      image: "/images/custom.PNG",
    },
  ];

  return (
    <section className="bg-red-600 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-black">
            Our Services
          </h2>

          <p className="mt-4 text-lg text-black font-semibold">
            From garage floors to high-end interior finishes, we deliver
            durable epoxy systems tailored to your space and needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-[#FAFAFA] shadow-sm transition hover:shadow-lg"
            >

              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-black">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="mt-4 inline-block font-semibold text-[#E5121D] hover:underline"
                >
                  Learn More →
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}