import OrderCard from "@/components/order/OrderCard";
import OrderStats from "@/components/order/OrderStats";
import React from "react";

export default function NovoPedidoPage() {
  return (
    <article className="h-screen">
      <OrderCard />
      <OrderStats />
    </article>
  );
}
