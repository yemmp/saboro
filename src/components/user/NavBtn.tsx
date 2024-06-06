"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useUserContext } from "@/lib/hooks";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogFooter,
} from "../ui/dialog";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function NavBtn() {
  const { isLogged } = useUserContext();

  return <>{isLogged ? <UserAvatar /> : <EntrarBtn />}</>;
}
function UserAvatar() {
  return (
    <Link href="/minha-conta">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}

function EntrarBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="text-white p-1 mr-1 md:p-4">
          Entrar
        </Button>
      </DialogTrigger>
      <ConditionalDialog />
    </Dialog>
  );
}

function ConditionalDialog() {
  const [isLoggin, setIsLogin] = useState(true);

  const handleToggleDialog = () => {
    setIsLogin(!isLoggin);
  };
  return (
    <DialogContent className="flex flex-col items-center w-fit text-black">
      <DialogHeader>
        <DialogTitle className=" self-center">
          {isLoggin ? "Entrar " : "Cadastrar"}
        </DialogTitle>
      </DialogHeader>
      {isLoggin ? <LoginForm /> : <SignUpForm />}
      <DialogFooter>
        <p>
          {isLoggin ? "Não tem uma conta?" : "Ja tem uma conta?"}
          <Button
            variant="link"
            onClick={handleToggleDialog}
            className="text-xs normal-case"
          >
            {isLoggin ? "Cadastre-se" : "Clique aqui para Entrar"}
          </Button>
        </p>
      </DialogFooter>
    </DialogContent>
  );
}
