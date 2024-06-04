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
  secondColor,
  product,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "flex overflow-hidden relative flex-col shadow-sm items-center h-full text-center text-white  ",
        `bg-${secondColor}`
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
          className={`bg-${color} uppercase w-fit overflow-hidden md:overflow-auto rounded-full p-4`}
        >
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          "flex my-auto flex-col text-xl gap-2 justify-center items-center",
          {
            "text-black": secondColor === "[#f5f5f4]",
            "text-white": secondColor !== "[#f5f5f4]",
          }
        )}
      >
        <p className="">{product.description}</p>
        <p>
          R$ <span className="font-bold text-3xl">{product.price}</span>
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className={cn(
            "p-6 uppercase",
            `bg-${color} hover:bg-${color} hover:bg-opacity-75 shadow-md`
          )}
          asChild
        >
          <Link href="/novo-pedido">Peça Já!</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
