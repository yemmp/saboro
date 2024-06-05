import { navContent } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo-horizontal.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Icon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex shadow-md  p-1 md:p-2 items-center text-xs md:text-sm justify-between font-medium uppercase text-black">
      <Link href="/">
        <Image
          className="w-[64px] md:w-[128px]"
          src={logo}
          alt="Saboroo horizontal logo"
          width={256}
          height={256}
        />
      </Link>
      <ul className="flex  items-center gap-2 md:gap-10  ">
        {navContent.map((item) => (
          <NavItem
            key={item.route}
            name={item.name}
            route={item.route}
            icon={item.icon}
          />
        ))}
        <Button asChild variant="secondary" className="text-white p-1 md:p-4">
          <Link href="/login">Entrar</Link>
        </Button>
      </ul>
    </nav>
  );
}

function NavItem({
  name,
  route,
  icon,
}: {
  name: string;
  route: string;
  icon: any;
}) {
  return (
    <li className="border-r-2 border-primary/5 p-2  md:border-none hover:bg-secondary/60 hover:text-white">
      <Link href={route}>
        <Icon iconNode={icon} className="md:hidden" />
        <p className="hidden md:inline">{name}</p>
      </Link>
    </li>
  );
}
