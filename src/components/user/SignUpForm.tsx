import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignUpForm() {
  return (
    <form className="flex flex-col text-black gap-4">
      <Label htmlFor="name">Nome</Label>
      <Input id="name" type="text" />
      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="text" />
      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" />
      <Label htmlFor="confirm-password">Confirme sua Senha</Label>
      <Input id="confirm-password" type="password" />
      <Button variant={"secondary"} type="submit" className="self-center ">
        Registrar
      </Button>
    </form>
  );
}
