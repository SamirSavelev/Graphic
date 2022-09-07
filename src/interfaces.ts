import { ReactNode } from "react";

export interface IProduct {
  id: number | null;
  title: string | null;
  description: string | null;
  price: number | null;
  discountPercentage: number | null;
  rating: number | null;
  stock: number | null;
  brand: string | null;
  category: string | null;
  thumbnail: string | null;
  images: Array<string>;
}

export interface IProductsResponce {
  products: Array<IProduct>;
  total: number | null;
  skip: number | null;
  limit: number | null;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface IGraphicData {
  data?: IProductsResponce | undefined;
  category: "smartphones" | "laptops";
}

export type IGraphicDataResponce = (string | number)[] | undefined;
