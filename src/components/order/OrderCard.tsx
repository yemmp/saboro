"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Frown } from "lucide-react";
import { Button } from "../ui/button";
import OrderProduct from "./OrderProduct";
import OrderForm from "./OrderForm";

export default function OrderCard() {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="flex flex-col   text-black m-4 gap-2">
      <h1>Seu pedido:</h1>
      <Card className=" ">{isEmpty ? <EmptyOrder /> : <OrderContent />}</Card>
    </div>
  );
}

function EmptyOrder() {
  return (
    <CardContent className="flex flex-col h-[256px] md:h-[516px]">
      <div className="flex flex-col my-auto gap-4 text-black/45 text-3xl  items-center">
        <Frown className="stroke-black/25 w-[44px] h-[44px]" />
        <p>Seu Pedido está Vazio.</p>
      </div>
      <div className="self-center">
        <Button variant="secondary">Adicionar Item</Button>
      </div>
    </CardContent>
  );
}

function OrderContent() {
  return (
    <>
      <CardContent className="p-4">
        <OrderForm />
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row md:justify-between items-center border-t mx-4">
        <div className="mt-4 gap-2 flex  items-center">
          <p className=" uppercase font-medium p-2 rounded-full text-center bg-secondary text-white">
            Total:
          </p>
          <p>
            R$ <span>70,00</span>
          </p>
        </div>
        <div>
          <Button
            variant="ghost"
            className="mt-4 text-red-600 md:text-black font-normal hover:bg-white hover:text-red-600 "
          >
            Cancelar
          </Button>
          <Button className="mt-4">Confirmar Pedido!</Button>
        </div>
      </CardFooter>
    </>
  );
}
