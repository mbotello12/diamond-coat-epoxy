import Link from "next/link";

interface ServiceAreaCTAProps {
  city: string;
}

export default function ServiceAreaCTA({
  city,
}: ServiceAreaCTAProps) {
  return (
    <section className="bg-[#000000] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Upgrade Your {city} Property?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
          Contact Diamond Coat Epoxy Solutions to discuss your project and
          request a free estimate.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-red-500! px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Request a Free Estimate
          </Link>

          <a
            href="tel:7373495044"
            className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-red-500"
          >
            Call (737) 349-5044
          </a>
        </div>
      </div>
    </section>
  );
}