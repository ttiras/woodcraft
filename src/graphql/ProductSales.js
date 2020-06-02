import gql from 'graphql-tag'

const PRODUCT_SALES = gql `subscription ProductSales {
    products(order_by: {saleCount: asc}) {
      data: saleCount
      label: name
    }
  }`

  export default PRODUCT_SALES