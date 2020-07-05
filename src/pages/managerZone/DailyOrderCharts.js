import React from "react";
import { useSubscription } from "@apollo/react-hooks";

import graphql2chartjs from "graphql2chartjs";
import { Bar } from "react-chartjs-2";

import ORDERS_CHART from "../../graphql/OrdersChart";

export default function DailyOrderCharts() {
  const { loading, data } = useSubscription(ORDERS_CHART);
  if (data) {
    const g2c = new graphql2chartjs(data, (datasetName, dataPoint) => ({
        ...dataPoint,
        chartType: "bar",
        backgroundColor: "#007bff"
      }));
    return <Bar data={g2c.data} />;
  } else if(loading) {
    return "Loading...";
  } else {
    return "Bir hata oluştu..."
  }
}
