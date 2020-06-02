import React from "react";
import { useSubscription } from "@apollo/react-hooks";

import graphql2chartjs from "graphql2chartjs";
import { Bar } from "react-chartjs-2";

import ORDERS_CHART from "../../graphql/OrdersChart";
import { Link } from "react-router-dom";

export default function DailyOrderCharts() {
  const { loading, error, data } = useSubscription(ORDERS_CHART);
  if (data) {
    const g2c = new graphql2chartjs(data, (datasetName, dataPoint) => ({
        ...dataPoint,
        chartType: "bar",
        backgroundColor: "#007bff"
      }));
    return <Bar data={g2c.data} />;
  } else {
    return "Loading...";
  }
}
