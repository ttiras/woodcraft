import gql from "graphql-tag";

const INSERT_INVOICE = gql`
mutation InvoiceAction($order_id: uuid!, $path: String!, $fileName: String!) {
  InvoiceAction(order_id: $order_id, path: $path, fileName: $fileName){
    success
  }
}
`; 

export default INSERT_INVOICE

