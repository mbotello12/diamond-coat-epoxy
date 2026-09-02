interface LocalServicesProps {
  city: string;
}

const services = [
  {
    title: "Epoxy Flake Flooring",
    description:
      "Durable, low-maintenance epoxy flooring systems designed for garages, workshops, commercial spaces, and other high-use areas.",
  },
  {
    title: "Metallic Epoxy Flooring",
    description:
      "Decorative metallic epoxy floors that combine durability with a unique, high-end appearance.",
  },
  {
    title: "Custom Epoxy Builds",
    description:
      "Custom epoxy platforms, tables, countertops, and specialty surfaces built for durability, function, and a high-end finish.",
  },
];

export default function LocalServices({ city }: LocalServicesProps) {
  return (
    <section className="bg-gray-400 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-wider text-[#E5121D]">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Epoxy Solutions for {city} Properties
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-black">
            Diamond Coat Epoxy Solutions provides professional epoxy flooring
            and custom epoxy surfaces for homeowners and businesses in{" "}
            {city}, Texas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 h-1 w-12 bg-[#E5121D]" />

              <h3 className="text-xl font-bold">{service.title}</h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}