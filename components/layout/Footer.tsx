export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 py-8 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h3 className="text-xl font-bold">
          Diamond Coat Epoxy Solutions
        </h3>

        <p className="mt-2">
          Professional Epoxy Flooring & Concrete Resurfacing in Austin, Texas.
        </p>

        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Diamond Coat Epoxy Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  );
}