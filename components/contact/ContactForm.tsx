'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = new URLSearchParams(formData as any).toString();

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Contact Information */}
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-[#E5121D]">
            Get in Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Let's Talk About Your Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're looking to upgrade your garage, transform an
            interior space, or create a custom epoxy piece, we'd love to
            hear what you have in mind.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Phone
              </p>
              <a
                href="tel:7373495044"
                className="mt-1 block text-xl font-semibold text-black hover:text-[#E5121D]"
              >
                (737) 349-5044
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Email
              </p>
              <a
                href="mailto:derek_marcel@outlook.com"
                className="mt-1 block text-xl font-semibold text-black hover:text-[#E5121D]"
              >
                derek_marcel@outlook.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Service Area
              </p>
              <p className="mt-1 text-xl font-semibold text-black">
                Austin & Surrounding Areas
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-10">
          <h2 className="text-2xl font-bold text-black">
            Request a Free Estimate
          </h2>

          <p className="mt-2 text-gray-600">
            Fill out the form below and we'll get back to you.
          </p>

          {status === 'success' ? (
            <div className="mt-8 rounded-lg bg-green-50 p-6 text-center text-green-800 border border-green-200">
              <h3 className="text-lg font-semibold">Estimate Requested!</h3>
              <p className="mt-2 text-sm">
                Thank you! We have received your submission and will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-semibold text-[#E5121D] underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >           
              <input type="hidden" name="form-name" value="contact" />

              <div className="hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </div>

              {status === 'error' && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 border border-red-200">
                  Something went wrong submitting your request. Please try again or call us directly.
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#E5121D] focus:ring-1 focus:ring-[#E5121D]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#E5121D] focus:ring-1 focus:ring-[#E5121D]"
                    placeholder="(737) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#E5121D] focus:ring-1 focus:ring-[#E5121D]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  What can we help with?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#E5121D] focus:ring-1 focus:ring-[#E5121D]"
                >
                  <option value="">Select a service</option>
                  <option value="flake">Epoxy Flake Flooring</option>
                  <option value="metallic">Metallic Epoxy</option>
                  <option value="custom">Custom Epoxy Build</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-900"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#E5121D] focus:ring-1 focus:ring-[#E5121D]"
                  placeholder="Tell us about the space, approximate size, and what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-[#E5121D] px-6 py-4 font-semibold text-white transition hover:bg-black disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Request My Free Estimate'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}