import Image from "next/image";

export default function FlakeFlooring() {
  return (
    <section className="bg-gray-300 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/flake.PNG"
            alt="Epoxy flake garage flooring in Austin Texas"
            fill
            className="object-cover"
          />
        </div>

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Garage & Floor Coatings
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Epoxy Flake Flooring
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Give your garage or workspace a durable, professional finish
            with a decorative epoxy flake system. Flake flooring combines
            strength, easy maintenance, and a clean finished appearance
            that's built for everyday use.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              Durable and easy to maintain
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              Customizable flake colors and blends
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              Ideal for garages and high-use spaces
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              Professional-grade finish
            </li>
          </ul>

        </div>

        

      </div>
    </section>
  );
}