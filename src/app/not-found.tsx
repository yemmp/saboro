import { Frown } from "lucide-react";
import React from "react";

export default function notfound() {
  return (
    <article className="flex justify-center items-center h-screen p-4 gap-6 bg-primary">
      <Frown className="size-[128px] md:size-[256px]" />
      <div className="flex text-center gap-2 flex-col">
        <h1 className="text-xl md:text-3xl text-center">
          Página não encontrada
        </h1>
        <p className="text-sm md:text-lg">
          Lamentamos o inconveniente
          <br />O link que acessou provavelmente está quebrado ou a página foi
          removida.
        </p>
      </div>
    </article>
  );
}
