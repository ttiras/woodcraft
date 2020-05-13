import gql from "graphql-tag";

const INSERT_ORDER = gql`
  mutation OrderAction($addresses:  OrderActionAddressesArrRelInsertInput!, $user_ordered:  OrderActionUsersObjRelInsertInput!, $order_items: OrderActionOrderItemsArrRelInsertInput!, $notes: String!, $isGift: Boolean!) {
    OrderAction(order: {addresses: $addresses, user_ordered: $user_ordered, order_items: $order_items, notes: $notes, isGift: $isGift}){
      token, paymentPageUrl
    }
  }
`; 

export default INSERT_ORDER

