const values = [
  {
    title: "Quality Craftsmanship",
    desc: "Every project starts with proper preparation and ends with a finish built to last.",
  },
  {
    title: "Honest Pricing",
    desc: "Clear communication and straightforward estimates with no hidden surprises.",
  },
  {
    title: "Attention to Detail",
    desc: "We believe the difference between good and great is found in the details.",
  },
  {
    title: "Customer Focused",
    desc: "Your project is treated with the same care and attention we'd want for our own space.",
  },
];

export default function Values() {
  return (
    <section className="bg-red-600 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#FAFAFA]">
            What We Stand For
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">
            Built on More Than Just Epoxy
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#FAFAFA]">
            Great results come from doing things the right way—from the
            first conversation to the final inspection.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 h-1.5 w-12 rounded-full bg-[#E5121D]" />

              <h3 className="text-xl font-bold text-black">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}