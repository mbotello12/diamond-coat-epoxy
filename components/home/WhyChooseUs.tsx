export default function WhyChooseUs() {
  const items = [
    {
      title: "5 Years Experience",
      desc: "Deep expertise in epoxy flooring and concrete resurfacing in Texas homes and businesses.",
    },
    {
      title: "Owner Operated",
      desc: "You work directly with Derek—no middlemen, no rotating crews, just consistent quality.",
    },
    {
      title: "Tailored Solutions",
      desc: "Every floor is customized based on your concrete condition, use case, and style.",
    },
    {
      title: "Durable Results",
      desc: "We use professional-grade materials designed to handle Texas heat and heavy use.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-black">
            Why Choose Diamond Coat?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We don’t just coat floors—we restore, strengthen, and transform concrete surfaces with precision and care.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 h-2 w-12 rounded-full bg-[#E5121D]" />

              <h3 className="text-lg font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}