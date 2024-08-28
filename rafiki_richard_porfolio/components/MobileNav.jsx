"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: 'home',
    path: "/",
  },
  {
    name: 'services',
    path: "/services",
  },
  {
    name: 'resume',
    path: "/resume",
  },
  {
    name: 'contact',
    path: "/contact",
  },
  {
    name: 'Grafiki RDC',
    path: "https://grafikirdc.com",
  }
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Ferme le Sheet après le clic sur un lien
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              Rafiki<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link 
              href={link.path} 
              key={index} 
              className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick} // Ajoutez la fonction de gestion de clic ici
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
