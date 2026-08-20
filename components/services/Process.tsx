const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We learn about your space, goals, and the look you're trying to achieve.",
  },
  {
    number: "02",
    title: "Surface Preparation",
    desc: "Proper preparation creates the foundation for a quality, long-lasting finish.",
  },
  {
    number: "03",
    title: "Installation",
    desc: "Your selected system is professionally installed with attention to every detail.",
  },
  {
    number: "04",
    title: "Final Inspection",
    desc: "We review the finished project to make sure the result meets our standards and your expectations.",
  },
];

export default function Process() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Quality Starts Before the First Coat
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            A beautiful epoxy floor is only as good as the preparation
            underneath it. We take the time to do each stage properly.
          </p>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-4xl font-bold text-[#E5121D]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}