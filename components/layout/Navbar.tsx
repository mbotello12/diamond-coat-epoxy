"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Service Area", href: "/service-area" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="top-0 z-50 border-b bg-[#E5121D]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        

       <Link href="/" className="flex items-center">
            <Image
              src="/images/dce-logo.jpeg"
              alt="Diamond Coat Epoxy Solutions Logo"
              width={180}
              height={180}
              priority
              className="h-14 w-auto rounded-lg border! border-white!"
            />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold hover:text-[#FAFAFA] text-lg!"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call Button */}

        <a
          href="tel:7373495044"
          className="hidden items-center gap-2 rounded-lg bg-[#E5121D] px-5 py-3 text-white transition hover:bg-black md:flex"
        >
          <PhoneIcon className="h-5 w-5" />
          (737) 349-5044
        </a>

        {/* Mobile Menu */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="space-y-4 border-t bg-[#E5121D] px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-medium hover:text-[#FAFAFA]"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="tel:7373495044"
            className="mt-4 flex items-center justify-center rounded-lg bg-[#E5121D] py-3 font-semibold text-white"
          >
            Call (737) 349-5044
          </a>
        </div>
      )}
    </header>
  );
}