import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import { useProductsQuery } from "../src/features/products/products-api-slice";

const Home: NextPage = () => {
  const { data, isError, isFetching, error } = useProductsQuery();
  console.log("data", data);
  return <></>;
};

export default withLayout(Home);
