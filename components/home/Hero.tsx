import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/dark-epoxy-hero.jpg"
          alt="Epoxy garage floor installation"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">

        <div className="max-w-2xl text-[#FAFAFA]">

          <p className="mb-4 text-m! font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Austin's Trusted Epoxy Flooring Specialists
          </p>

          <h1 className="text-4xl! font-extrabold! leading-tight! md:text-6xl!">
            Diamond Coat
            <span className="block text-[#E5121D]">
              Epoxy Solutions ATX
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-gray-200">
            Transform cracked or outdated concrete into beautiful,
            long-lasting floors. From garage flake systems to
            metallic epoxy finishes, we deliver durable craftsmanship
            backed by honest pricing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-lg bg-[#E5121D]! px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Free Estimate
            </Link>

            <a
              href="tel:7373495044"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#E5121D]"
            >
              Call (737) 349-5044
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-m font-semibold uppercase">

            <span>✔ Owner Operated</span>

            <span>✔ 5 Years Experience</span>

            <span>✔ Austin, TX</span>

          </div>

        </div>

      </div>
    </section>
  );
}