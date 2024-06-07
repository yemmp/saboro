import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { CreditCard, Utensils } from "lucide-react";
import React from "react";

export default function UserPage() {
  return (
    <article className="m-6 h-screen">
      <Card className="flex h-full text-black">
        <UserData />
        <CardContent></CardContent>
      </Card>
    </article>
  );
}

function UserData() {
  return (
    <CardHeader className="flex flex-col items-center gap-10 border-r-2 h-full">
      <CardTitle className="text-xs md:text-base text-center">
        Bem vindo,
        <br className="md:hidden" />
        <span className="font-bold text-sm md:text-lg"> Fulano</span>
      </CardTitle>
      <Avatar className="w-16 h-16 md:w-32 md:h-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <hr className="w-full stroke-black/15" />
      <div className="flex  flex-col items-center h-full gap-6">
        <Button variant={"link"}>
          <CreditCard className=" md:hidden" />
          <p className="hidden md:block">Cartão Fidelidade</p>
        </Button>
        <Button variant={"link"}>
          <Utensils className=" md:hidden" />
          <p className="hidden md:block">Meus Pedidos</p>
        </Button>

        <Button variant="link" className="mt-auto hover:text-red-600 ">
          <p>Sair</p>
        </Button>
      </div>
      <section></section>
    </CardHeader>
  );
}
