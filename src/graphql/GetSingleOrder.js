import gql from "graphql-tag";

const SINGLE_ORDER = gql`

query SingleOrder ($id: uuid!) {
 orders(where: {id: {_eq: $id}}) {
    amount
    created
    isGift
    id
    isCancelled
    isPaid
    isShipped
    notes
    status
    token
    updated_at
    addresses {
      id
      city
      isinvoiceAddress
      name
      street
      town
    }
    order_items {
      product {
        fullDescription
        id
        name
        price
        stock
        rating
        shortDescription
        image {
          path
        }
      }
      qty
    }
    user_ordered {
      email
      id
      name
      phone
    }
}}
`;
export default SINGLE_ORDER