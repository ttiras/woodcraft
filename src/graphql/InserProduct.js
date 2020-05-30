import gql from "graphql-tag";

const INSERT_PRODUCT = gql`
  mutation AddProduct($product: products_insert_input!) {
    insert_products_one(object: $product)
    {
      id
    }
  }
`; 

export default INSERT_PRODUCT

