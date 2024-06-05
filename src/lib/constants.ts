import { atSignCircle, eggCup, home } from "@lucide/lab";

export const INSTAGRAM_URL = "https://www.instagram.com/br.saboroo/";
export const ENDERECO_URL =
  "https://www.google.com/maps/place/Av.+do+Contorno,+1570+-+Floresta,+Belo+Horizonte+-+MG,+38082-049/@-19.9140389,-43.9289798,17z/data=!3m1!4b1!4m6!3m5!1s0xa699f5fb6ab34d:0xf4d5a1603e837861!8m2!3d-19.9140389!4d-43.9289798!16s%2Fg%2F11c165vc_7?entry=ttu";
export const navContent = [
  { name: "Sabores", route: "/sabores", icon: eggCup },
  { name: "Home", route: "/", icon: home },
  { name: "Sobre nós", route: "/sobre-nos", icon: atSignCircle },
];

export const products = [
  {
    name: "Açaí Tradicional",
    color: "[#7069ae]",
    // secondColor: "[#161f36]",
    secondColor: "[#f5f5f4]",
    imgUrl:
      "https://img.freepik.com/fotos-premium/batido-de-sorvete-brasileiro-de-acai-berry-em-copo-plastico-com-banana-morango-e-leite-condensado-isolado-no-fundo-branco-vista-frontal-para-menu-e-midia-social_317399-1244.jpg?w=740",
    description: "Creme de Açaí Tradicional Saboroo.",
    price: "20,00",
  },
  {
    name: "Açaí Ruby",
    color: "[#e6282d]",
    secondColor: "[#f5f5f4]",
    imgUrl:
      "https://img.freepik.com/fotos-premium/batido-de-sorvete-brasileiro-de-acai-berry-em-copo-plastico-com-banana-morango-e-leite-condensado-isolado-no-fundo-branco-vista-frontal-para-menu-e-midia-social_317399-1244.jpg?w=740",
    description:
      "Creme de Açaí Vermelho, deliciosamente mais avermelhado e levemente amargo.",
    price: "22,50",
  },
  {
    name: "Açaí Vital",
    color: "[#81bb26]",
    secondColor: "[#f5f5f4]",
    imgUrl:
      "https://img.freepik.com/fotos-premium/batido-de-sorvete-brasileiro-de-acai-berry-em-copo-plastico-com-banana-morango-e-leite-condensado-isolado-no-fundo-branco-vista-frontal-para-menu-e-midia-social_317399-1244.jpg?w=740",
    description:
      "Creme de Açaí com frutas cítricas, para aquela pitada de refrescância",
    price: "24,00",
  },
  {
    name: "Açaí com Whey",
    color: "[#7f4d12]",
    secondColor: "[#f5f5f4]",
    imgUrl:
      "https://img.freepik.com/fotos-premium/batido-de-sorvete-brasileiro-de-acai-berry-em-copo-plastico-com-banana-morango-e-leite-condensado-isolado-no-fundo-branco-vista-frontal-para-menu-e-midia-social_317399-1244.jpg?w=740",
    description:
      "Creme de Açaí com Whey, para você que leva uma vida fitness, mas não quer abrir mão de uma deliciosa sobremesa",
    price: "23,00",
  },
];
