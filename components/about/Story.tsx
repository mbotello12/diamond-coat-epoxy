import Image from "next/image";

export default function Story() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/derek.png"
            alt="Owner Derek Contreras"
            fill
            className="object-cover"
          />
        </div>

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Our Story
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            A Local Business Built on Trust
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Diamond Coat Epoxy Solutions was founded by Derek Contreras
            with one simple goal—deliver premium epoxy flooring and
            concrete restoration without sacrificing craftsmanship or
            customer service.
          </p>

          <p className="mt-6 text-gray-600">
            Every project receives the same level of attention,
            whether it's a residential garage, a commercial space,
            or a one-of-a-kind custom epoxy creation.
          </p>

        </div>

      </div>
    </section>
  );
}