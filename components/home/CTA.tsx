import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-4xl px-6 text-center text-white">

        <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
          Ready to Get Started?
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight">
          Transform Your Surface
          <span className="block text-[#E5121D]">
            Into Something Incredible
          </span>
        </h2>

        <p className="mt-8 text-lg text-gray-300">
          Whether you're upgrading your garage, patio, commercial space,
          or creating a custom epoxy piece, we're ready to bring your
          vision to life with craftsmanship that lasts.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/contact"
            className="rounded-lg bg-[#E5121D]! px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Schedule Your Free Estimate
          </Link>

          <a
            href="tel:7373495044"
            className="rounded-lg border-2 border-white px-8 py-4 font-semibold transition hover:bg-white! hover:text-[#E5121D]!"
          >
            Call (737) 349-5044
          </a>

        </div>

      </div>
    </section>
  );
}