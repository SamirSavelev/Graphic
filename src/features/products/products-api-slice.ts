import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsResponce } from "../../interfaces";

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
