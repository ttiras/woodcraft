import gql from 'graphql-tag'

const ORDERS_CHART = gql `subscription OrdersChart {
  dailysales(order_by: {day: asc}) {
    label: day
    data: sum
  }
}`

  export default ORDERS_CHART