import gql from "graphql-tag";

const SINGLE_ORDER = gql`

query GetSingleOrder ($id: uuid!) {
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
    updated_at
    order_payment {
      itemTransactions {
        itemId
      }
    }
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
export default SINGLE_ORDER