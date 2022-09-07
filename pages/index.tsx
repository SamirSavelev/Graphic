import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import BackHome from "../src/components/BackHome";
import Header from "../src/components/common/Header";
import { useProductsQuery } from "../src/features/products/products-api-slice";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { options } from "../src/config";
import { CommonUseComponents } from "../styles/CommonUseComponents";
import Dropdown from "../src/components/common/Dropdown";
import { useState } from "react";
import { devices } from "../src/components/common/Dropdown/config";
import { IMenuItem } from "../src/components/interfaces";
import { Spinner } from "../src/components/Spinner";

const { Column } = CommonUseComponents;

const Home: NextPage = () => {
  const { data, isError, isFetching, error, isSuccess } = useProductsQuery();
  const [device, setDevice] = useState<IMenuItem>(devices[0]);
  return (
    <>
      <Header />
      <BackHome />
      <Dropdown
        id={device?.title}
        header="Устройство"
        data={device}
        setData={setDevice}
        menuItems={devices}
      />
      <Column fullHeight>
        {isFetching && <Spinner centered />}
        {!isFetching && data && (
          <HighchartsReact
            highcharts={Highcharts}
            options={data && options({ data, category: device?.accessor })}
          />
        )}
      </Column>
    </>
  );
};

export default withLayout(Home);
