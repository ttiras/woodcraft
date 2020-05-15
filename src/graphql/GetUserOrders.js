import gql from "graphql-tag";

const GET_USER_ORDERS = gql`

query SingleOrder ($user_id: String!) {
 orders(where: {user_id: {_eq: $user_id}}) {
    amount
    created
    isGift
    id
    isCancelled
    isPaid
    isShipped
    notes
    status
    updated_at
    addresses {
      id
      city
      isinvoiceAddress
      name
      surname
      street
      town
    }
    order_items {
      product {
        fullDescription
        id
        name
        price
        discount
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
      surname
      phone
    }
}}
`;
export default GET_USER_ORDERS