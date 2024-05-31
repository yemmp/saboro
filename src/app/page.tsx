import Image from "next/image";
import background from "../../public/green-background.png";
import { Button } from "@/components/ui/button";
import pote from "../../public/GreenPackagin.png";
export default function Home() {
  return (
    <article className="relative overflow-hidden h-screen">
      <Image src={background} alt="white-background-img" fill />
      <Image
        className="absolute bottom-[-30%] right-[-20%]"
        src={pote}
        alt="Açai Vital Pote"
        width={786}
        height={786}
      />
      <div className="flex flex-col gap-4 md:gap-20 absolute top-1/3 left-[10%]">
        <h1 className=" text-black  font-medium text-xl md:text-6xl uppercase">
          Saboroo
          <br />
          Arte em cada colher,
          <br /> Frescor em Cada Mordida{" "}
        </h1>
        <Button className="md:w-[30%] md:p-6">Faça Seu Pedido!</Button>
      </div>
    </article>
  );
}
