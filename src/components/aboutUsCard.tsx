import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import cover from "../../public/Cover.jpg";
import Image from "next/image";
export default function AboutUsCard() {
  return (
    <Card className="bg-primary h-fit w-fit  text-white">
      <CardContent className="flex">
        <div className="flex flex-col md:w-1/2 p-2 justify-center items-center gap-2 text-white">
          <h1 className="text-white md:text-xl font-bold text-center">
            Sobre nós
          </h1>
          <p className="text-center">
            Na busca por experiências únicas, nasce a <b>Saboroo</b>, uma marca
            que redefine o conceito de sabor, nossa jornada começou nas ruas da
            cidade de Belo Horizonte, onde a vida urbana encontra a criatividade
            sem limites.
            <br /> Combinando inovação com qualidade, a Saboroo é mais do que
            uma marca de açaí é uma promessa de uma experiência exepicional.
            <br />
            Cada pote é uma tela em branco esperando para ser preenchida com as
            cores vibrantes do nosso sabor exclusivo.
            <br /> Na Saboroo, acreditamos que a vida é para ser saboreada ao
            máximo. Cada colherada é uma celebração da individualidade, uma
            homenagem à diversidade e uma declaração de liberdade.
            <br /> Não seguimos tendências as criamos.
            <br />
            <br /> Hoje, convidamos você a se juntar a nós nesta jornada pelo
            sabor. <br />
            <br />
            Descubra a Saboroo e deixe-se levar pela emoção de uma experiência
            verdadeira e única.
          </p>
          <Button className="bg-green-500 md:w-[40%] ">
            Descubra Nossos Sabores!
          </Button>
        </div>
        <div className="w-1/2 hidden md:inline overflow-hidden">
          <Image
            src={cover}
            alt="saboroo-cover-img"
            width={2280}
            height={2280}
          />
        </div>
      </CardContent>
    </Card>
  );
}
