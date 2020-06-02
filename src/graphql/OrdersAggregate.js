import gql from 'graphql-tag'

const ORDERS_AGGREGATE = gql `subscription OrdersAggregate {
    orders_aggregate {
      aggregate {
        count
        sum {
          amount
        }
      }
    }
  }`

  export default ORDERS_AGGREGATE