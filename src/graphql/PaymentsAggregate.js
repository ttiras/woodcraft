import gql from 'graphql-tag'

const PAYMENTS_AGGREGATE = gql `subscription PaymentsAggregate {
    payments_aggregate {
      aggregate {
        count
        sum {
          amount
        }
      }
    }
  }`

  export default PAYMENTS_AGGREGATE