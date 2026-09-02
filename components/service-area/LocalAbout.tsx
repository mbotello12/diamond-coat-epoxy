interface LocalAboutProps {
  city: string;
  content: string;
}

export default function LocalAbout({
  city,
  content,
}: LocalAboutProps) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-semibold uppercase tracking-wider text-[#E5121D]">
            Serving {city}
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for the Way {city} Uses Its Spaces
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>{content}</p>

            <p>
              From residential garages to commercial spaces and custom
              projects, our goal is to create surfaces that look great while
              standing up to everyday use.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-black p-10 text-white">
          <h3 className="text-2xl font-bold">
            Why Choose Diamond Coat?
          </h3>

          <ul className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              <span>Durable epoxy flooring systems</span>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              <span>Professional, detail-focused installation</span>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              <span>Custom flooring and specialty surfaces</span>
            </li>

            <li className="flex gap-3">
              <span className="font-bold text-[#E5121D]">✓</span>
              <span>Serving Austin and surrounding communities</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}