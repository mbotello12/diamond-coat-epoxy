export default function ServiceArea() {
  const cities = [
    "Austin",
    "Round Rock",
    "Pflugerville",
    "Cedar Park",
    // "Georgetown",
    // "Kyle",
    // "Buda",
    // "Leander",
  ];

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Proudly Serving Central Texas
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Serving Austin & Surrounding Communities
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Diamond Coat Epoxy Solutions proudly serves homeowners and
            businesses throughout the greater Austin area with professional
            epoxy flooring, custom epoxy projects, and concrete restoration.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

          {cities.map((city) => (
            <div
              key={city}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center font-semibold shadow-sm transition hover:border-[#E5121D] hover:shadow-md"
            >
              {city}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}