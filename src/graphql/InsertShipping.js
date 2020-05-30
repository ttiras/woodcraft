import gql from "graphql-tag";

const INSERT_SHIPPING = gql`
  mutation AddShipping($shipping: [shippings_insert_input!]!) {
    insert_shippings(objects: $shipping)
    {
      affected_rows
    }
  }
`; 

export default INSERT_SHIPPING

