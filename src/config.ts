import { FC } from "react";
import { IGraphicData, IGraphicDataResponce, IProduct } from "./interfaces";

const getRating = (product: IProduct) => {
  return [product?.title, product?.rating];
};

const graphicData: FC<IGraphicData> = ({ data, category }): any => {
  const filteredData = data?.products.filter(
    (product) => product.category === category
  );
  return filteredData?.map((product) => getRating(product));
};

export const options: FC<IGraphicData> = ({ data, category }): any => {
  return {
    chart: {
      type: "column",
    },
    title: {
      text: `Рейтинг ${category === "smartphones" ? "смартфонов" : "лэптопов"}`,
    },
    subtitle: {
      text: `Рейтинг популярных ${
        category === "smartphones" ? "смартфонов" : "лэптопов"
      } в 2021 году`,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Рейтинг",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: `Рейтинг: <b>{point.y:.1f}</b>`,
    },
    series: [
      {
        name: "Population",
        data: graphicData({ data, category }),
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.1f}",
          y: 10,
        },
      },
    ],
  };
};
