import Link from "next/link";

interface ServiceAreaHeroProps {
  city: string;
  description: string;
}

export default function ServiceAreaHero({
  city,
  description,
}: ServiceAreaHeroProps) {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-semibold uppercase tracking-wider text-[#E5121D]">
          Epoxy Flooring in {city}, TX
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Professional Epoxy Flooring in {city}, Texas
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-[#E5121D]! px-8 py-4 text-center font-semibold text-white transition hover:bg-white! hover:text-black"
          >
            Get a Free Estimate
          </Link>

          <a
            href="tel:7373495044"
            className="rounded-lg border-2 border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Call (737) 349-5044
          </a>
        </div>
      </div>
    </section>
  );
}