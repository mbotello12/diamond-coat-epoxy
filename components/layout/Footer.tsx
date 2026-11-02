import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E5121D] text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Company */}

        <div>

          <Image
            src="/images/dce-logo.jpeg"
            alt="Diamond Coat Epoxy Solutions"
            width={180}
            height={60}
            className="w-40"
          />

          <p className="mt-5 text-sm leading-7">
            Premium epoxy flooring, concrete restoration,
            and custom epoxy creations serving Austin and
            the surrounding communities.
          </p>

        </div>

        {/* Services */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3">

            <li><a href="/services#metallic">Metallic Epoxy</a></li>
            <li><a href="/services#flakes">Epoxy Flake Flooring</a></li>
            <li><a href="/services#Custom">Custom Epoxy Builds</a></li>
            

          </ul>

        </div>

        {/* Service Area */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Service Area
          </h3>

          <ul className="space-y-3">

            <li><a href="/service-area/austin">Austin</a></li>
            <li><a href="/service-area/round-rock">Round Rock</a></li>
            <li><a href="/service-area/cedar-park">Cedar Park</a></li>
            <li><a href="/service-area/pflugerville">Pflugerville</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <p><a href="tel:7373495044">(737) 349-5044</a></p>

          <p className="mt-3">
            <a href="mailto:derek@diamondcoatss.com">derek@diamondcoatss.com</a>
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-black! px-6 py-3 font-semibold text-white transition hover:bg-white! hover:text-black!"
          >
            Free Estimate
          </Link>

        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-md text-black">
        © {new Date().getFullYear()} Diamond Coat Epoxy Solutions. All Rights Reserved. Created by: <a className="underline hover:text-white" href="https://botellodevelopment.com">bot.ello Devellopment</a>
      </div>

    </footer>
  );
}