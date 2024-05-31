import { INSTAGRAM_URL, ENDERECO_URL } from "@/lib/constants";
import React from "react";
import { Button } from "../ui/button";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex  flex-col items-center bg-primary md:gap-6 text-white  w-full md:p-4">
      <div className=" flex flex-col items-center md:gap-2">
        <Button className="rounded-full" size="icon" variant={"ghost"} asChild>
          <a href={INSTAGRAM_URL} target="_blank">
            <Instagram />
          </a>
        </Button>
        <a href={ENDERECO_URL} className="hidden md:inline" target="_blank">
          Endereço: Av. do Contorno, 1570 - Floresta, Belo Horizonte - MG,
          30110-005
        </a>
      </div>
      <div>
        <small className="flex flex-col sm:flex-row">
          Copyright &copy; 2024 Saboroo.
          <span> Todos os direitos reservados.</span>
        </small>
      </div>
    </footer>
  );
}
