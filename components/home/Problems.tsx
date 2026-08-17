import Image from "next/image";
import Link from "next/link";

export default function Problems() {
  const problems = [
    "Cracked Concrete",
    "Oil Stains",
    "Peeling Coatings",
    "Dusty Garage Floors",
    "Faded Patios",
    "Outdated Interior Floors",
  ];

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left Side */}
        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            We Solve Problems
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Stop Living With Concrete
            That Looks Worn Out.
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Whether it's a stained garage floor, cracked concrete,
            or peeling coatings, we transform damaged surfaces into
            durable finishes that look incredible for years.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-lg border border-gray-700 p-4"
              >
                <span className="text-[#E5121D] font-bold">✓</span>{" "}
                {problem}
              </div>
            ))}

          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-lg bg-[#E5121D]! px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Get My Free Estimate
          </Link>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="grid grid-cols-1 gap-4">

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/images/before.jpg"
                alt="Damaged concrete before epoxy"
                fill
                className="object-cover"
              />

              <div className="absolute left-4 top-4 rounded bg-black/70 px-3 py-1 text-sm font-semibold">
                BEFORE
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/images/after.jpg"
                alt="Finished epoxy floor"
                fill
                className="object-cover"
              />

              <div className="absolute left-4 top-4 rounded bg-[#E5121D] px-3 py-1 text-sm font-semibold">
                AFTER
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}