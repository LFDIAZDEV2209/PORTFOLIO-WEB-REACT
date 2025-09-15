"use client"

import Link from "next/link";
import { itemsNavbar } from "../../data";
import { ModeToggle } from "@/components/ui/toggle-theme" 

const Navbar = () => {
  return (
    <nav
      className="fixed z-20 inset-x-0 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-4 sm:bottom-8 lg:bottom-20"
    >
      <div
        className="flex items-center gap-1 sm:gap-2 justify-center 
            px-2 sm:px-4 py-1 dark:bg-slate-800 bg-slate-200 rounded-full shadow-lg"
      >
        {itemsNavbar.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="cursor-pointer p-1.5 sm:p-2 rounded-full transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]"
          >
            {item.icon}
            <span className="sr-only">{item.title}</span>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
