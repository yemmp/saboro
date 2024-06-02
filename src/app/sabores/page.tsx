import ProductCarousel from "@/components/productCarousel";
import React from "react";

export default function Page() {
  return (
    <article className="flex flex-col  h-screen">
      <h1 className="text-medium text-center text-black mt-4 text-xl md:text-2xl">
        Conheça nossos Produtos!
      </h1>
      <ProductCarousel></ProductCarousel>
    </article>
  );
}
