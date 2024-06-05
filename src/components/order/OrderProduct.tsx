import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import productImg from "../../../public/post-instagram_02.png";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function OrderProduct() {
  return (
    <Card className="flex flex-col w-48 h-96">
      <CardHeader className="flex flex-col items-center gap-4 uppercase">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={productImg}
            alt="produto"
            objectFit="cover"
            width={256}
            height={128}
          />
        </div>
        <CardTitle>Açaí Tradicional</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <Label htmlFor="tamanho">Tamanhos</Label>
          <section id="tamanho" className="flex gap-2">
            <Button variant={"outline"}>P</Button>
            <Button variant="secondary">M</Button>
            <Button variant={"outline"}>G</Button>
          </section>
        </div>
      </CardContent>
    </Card>
  );
}
