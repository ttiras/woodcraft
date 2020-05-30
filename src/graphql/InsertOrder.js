import gql from "graphql-tag";

const INSERT_ORDER = gql`
mutation OrderAction($addresses: [addressInput], $user_ordered: userInput, $order_items: [itemInput], $notes: String!, $isGift: Boolean!) {
  OrderAction(addresses: $addresses, user_ordered: $user_ordered, order_items: $order_items, notes: $notes, isGift: $isGift){
    token, paymentPageUrl
  }
}
`; 

export default INSERT_ORDER

