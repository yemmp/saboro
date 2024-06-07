import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import cover from "../../public/Cover.jpg";
import Image from "next/image";
import Link from "next/link";
export default function AboutUsCard() {
  return (
    <Card className="bg-primary p-0  h-fit w-full text-white">
      <CardContent className="flex h-full p-0">
        <div className="flex flex-col md:w-1/2 p-6  items-center gap-2 text-base  text-white">
          <h1 className="text-white md:text-xl font-bold text-center">
            Sobre nós
          </h1>
          <p className="text-justify">
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
            máximo. <br />
            Cada colherada é uma celebração da individualidade, uma homenagem à
            diversidade e uma declaração de liberdade.
            <br /> Não seguimos tendências as criamos.
            <br />
            <br /> Hoje, convidamos você a se juntar a nós nesta jornada pelo
            sabor. <br />
            <br />
            Descubra a Saboroo e deixe-se levar pela emoção de uma experiência
            verdadeira e única.
          </p>
          <Button className="bg-green-500  hover:bg-green-800 " asChild>
            <Link href="/sabores">Descubra Nossos Sabores!</Link>
          </Button>
        </div>
        <div className="md:w-1/2 overflow-hidden relative">
          <Image
            src={cover}
            alt="saboroo-cover-img"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  );
}
