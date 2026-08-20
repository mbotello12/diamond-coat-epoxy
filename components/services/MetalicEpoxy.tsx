import Image from "next/image";

export default function MetallicEpoxy() {
  return (
    <section className="bg-red-600 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        <div className="order-2 lg:order-1">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#000000]">
            Premium Finishes
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Metallic Epoxy Flooring
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#FAFAFA]">
            Create a floor that's impossible to ignore. Metallic epoxy
            produces a unique, high-end finish with depth, movement, and
            character that can transform residential and commercial
            interiors.
          </p>

          <p className="mt-6 text-[#FAFAFA]">
            Each installation is customized to create a distinctive
            appearance rather than a one-size-fits-all finish.
          </p>

        </div>

        <div className="relative order-1 h-[500px] overflow-hidden rounded-xl lg:order-2">
          <Image
            src="/images/metallic.jpg"
            alt="Metallic epoxy flooring in Austin Texas"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}