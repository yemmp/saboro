import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { products } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ProductCard from "./productCard";

export default function ProductCarousel() {
  return (
    <Carousel className="" opts={{ loop: true, align: "center" }}>
      <CarouselContent>
        {products.map((item) => (
          <CarouselItem key={item.name} className={cn("basis-[50%] ")}>
            <ProductCard img={item.imgUrl} product={item} color={item.color} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <section className=" relative  justify-center items-center">
        <CarouselPrevious className="hidden md:inline absolute drop-shadow-md top-6 left-[48%] " />
        <CarouselNext className="hidden md:inline absolute drop-shadow-md top-6 right-[47%]" />
      </section>
    </Carousel>
  );
}
