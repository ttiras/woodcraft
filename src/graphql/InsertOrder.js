import gql from "graphql-tag";

const INSERT_ORDER = gql`
  mutation AddOrder($order: [orders_insert_input!]!) {
    insert_orders(objects: $order)
    {
      returning{
        id
      }
    }
  }
`; 

export default INSERT_ORDER

