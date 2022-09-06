import { createSlice } from "@reduxjs/toolkit";

type ProductState = {
  id: number | null;
  title: string | null;
  nm_id: number | null;
  supplier: string | null;
  brand: string | null;
  price: number | null;
  sale_price: number | null;
  sale_percent: number | null;
  rating: number | null;
  feedbacks: number | null;
  sales: number | null;
  imageUrl: string | null;
};

const slice = createSlice({
  name: "subscription",
  initialState: {
    id: null,
    title: null,
    nm_id: null,
    supplier: null,
    brand: null,
    price: null,
    sale_price: null,
    sale_percent: null,
    rating: null,
    feedbacks: null,
    sales: null,
    imageUrl: null,
  } as ProductState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     subscriptionApi.endpoints.fetchProduct.matchFulfilled,
  //     (state, { payload }) => {
  //       state.id = payload.id
  //       state.title = payload.title
  //       state.nm_id = payload.nm_id
  //       state.supplier = payload.supplier
  //       state.brand = payload.brand
  //       state.price = payload.price
  //       state.sale_price = payload.sale_price
  //       state.sale_percent = payload.sale_percent
  //       state.rating = payload.rating
  //       state.feedbacks = payload.feedbacks
  //       state.sales = payload.sales
  //       state.imageUrl = payload.imageUrl
  //     }
  //   )
  // },
});

export default slice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.access
