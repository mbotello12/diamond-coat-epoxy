const steps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    desc: "Send us a few details about your space and what you're looking to accomplish.",
  },
  {
    number: "02",
    title: "Let's Talk",
    desc: "We'll connect with you to discuss your project, answer questions, and determine the best solution.",
  },
  {
    number: "03",
    title: "Get Your Estimate",
    desc: "We'll provide a clear estimate and help you understand what to expect from the project.",
  },
];

export default function ContactProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Simple Process
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Getting Started Is Easy
          </h2>

        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">

          {steps.map((step) => (
            <div key={step.number} className="text-center">

              <span className="text-4xl font-bold text-[#E5121D]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}