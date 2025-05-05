"use client"

import Link from "next/link";
import { itemsNavbar } from "../../data";
import { ModeToggle } from "@/components/ui/toggle-theme" 

const Navbar = () => {
  return (
    <nav
      className="fixed z-20 inset-x-0 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-20"
    >
      <div
        className="flex items-center gap-2 justify-center 
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full"
      >
        {itemsNavbar.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="cursor-pointer p-2 rounded-full transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]"
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
