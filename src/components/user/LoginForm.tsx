import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <form className="flex flex-col text-black gap-4">
      <Label htmlFor="name">Nome</Label>
      <Input id="name" type="text" />

      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" />

      <Button variant={"secondary"} type="submit" className="self-center ">
        Entrar
      </Button>
    </form>
  );
}
