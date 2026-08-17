const benefits = [
  {
    title: "Owner Operated",
    desc: "Work directly with the person responsible for your project from consultation through completion.",
  },
  {
    title: "Personalized Service",
    desc: "Every space is different. We take the time to understand your goals and recommend the right solution.",
  },
  {
    title: "Premium Materials",
    desc: "Professional-grade materials and proven application techniques deliver beautiful, durable results.",
  },
  {
    title: "Built to Last",
    desc: "Proper surface preparation and attention to detail are at the heart of every Diamond Coat project.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Why Diamond Coat
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
            A Personal Approach to
            <span className="block text-[#E5121D]">
              Professional Results
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-300">
            When you choose Diamond Coat, you're not dealing with a
            faceless company or a rotating crew. You're working with a
            local business committed to doing quality work and earning
            your trust.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-8 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={benefit.title}>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#E5121D]">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-bold">
                  {benefit.title}
                </h3>
              </div>

              <p className="mt-3 pl-12 leading-7 text-gray-400">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}