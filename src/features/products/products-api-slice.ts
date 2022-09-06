import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProduct {
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

interface IProductsResponce {
  products: Array<IProduct>;
  total: number | null;
  skip: number | null;
  limit: number | null;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints(builder) {
    return {
      products: builder.query<IProductsResponce, void>({
        query() {
          return `/products`;
        },
      }),
    };
  },
});

export const { useProductsQuery } = productsApi;
