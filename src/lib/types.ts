export type Produto = {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
};
export type ProductCardProps = {
  img: string;
  imgFallback?: string;
  color: string;
  secondColor: string;
  product: Produto;
};
