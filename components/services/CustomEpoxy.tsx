import Image from "next/image";

export default function CustomEpoxy() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/custom.PNG
            "
            alt="Custom epoxy table and specialty epoxy piece"
            fill
            className="object-cover"
          />
        </div>

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            One-of-a-Kind Creations
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Custom Epoxy Builds
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have something different in mind? We create custom epoxy
            pieces designed around your vision, space, and purpose.
          </p>

          <p className="mt-6 text-gray-600">
            From custom platforms and tables to countertops and specialty
            surfaces, each piece combines functional design with the
            distinctive finish epoxy makes possible.
          </p>

          <p className="mt-6 font-semibold text-black">
            If you can imagine it, let's talk about how we can build it.
          </p>

        </div>

      </div>
    </section>
  );
}