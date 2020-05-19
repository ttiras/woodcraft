import gql from "graphql-tag";

const UPDATE_PRODUCTS = gql`mutation updateStock ($id: uuid!, $stock: Int!) {
    update_products(
      where: {id: {_eq: $id}},
      _inc: {stock: $stock}
    ) {
      affected_rows
    }
  }`

  export default UPDATE_PRODUCTS