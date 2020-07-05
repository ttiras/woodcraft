import React from "react";
import { useSubscription } from "@apollo/react-hooks";

import graphql2chartjs from "graphql2chartjs";
import { Bar } from "react-chartjs-2";
import PRODUCT_SALES from "../../graphql/ProductSales";

export default function ProductCharts() {
  const { loading, data } = useSubscription(PRODUCT_SALES);
  if (data) {
    const g2c = new graphql2chartjs(data, (datasetName, dataPoint) => ({
        ...dataPoint,
        chartType: "bar",
        backgroundColor: "#007bff"
      }));
    return <Bar data={g2c.data} />;
  } else if(loading) {
    return "Loading...";
  }else {
    return "Bir hata oluştu..."
  }
}