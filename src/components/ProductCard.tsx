import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ProductCardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({
  img,
  imgFallback,
  color,
  product,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "flex overflow-hidden relative flex-col shadow-sm items-center  mt-6 text-white bg-opacity-60 ",
        `bg-${color}`
      )}
      //   className={`flex overflow-hidden relative flex-col shadow-sm items-center gap-6 bg-${color}/25 mt-20 text-white `}
    >
      <CardHeader className="flex flex-col items-center gap-2">
        <div className={`absolute bg-${color} w-full h-14 top-0`}></div>

        <Avatar className="w-[144px] h-[144px]">
          <AvatarImage src={img} />
          <AvatarFallback>{imgFallback}</AvatarFallback>
        </Avatar>
        <CardTitle
          className={`bg-${color} overflow-hidden md:overflow-auto rounded-full p-4`}
        >
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex  flex-col text-xl justify-center items-center">
        <p className="hidden md:block">{product.description}</p>
        <p>
          R$ <span className="font-bold text-3xl">{product.price}</span>
        </p>
      </CardContent>
      <CardFooter>
        <Button className={cn("p-6 uppercase", `bg-${color}`)} asChild>
          <Link href="/novo-pedido">Peça Já!</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
