"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../../lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-white text-black shadow-xl max-lg:hidden">
      <img
        src="data:image/png;base64,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"
        alt="logo"
        width={150}
        height={70}
      />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
