import gql from "graphql-tag";

const UPDATE_PRODUCT = gql `mutation UpdateProduct($id: uuid!, $vars: products_set_input!) {
    update_products_by_pk(pk_columns: {id: $id}, _set: $vars){
        id
    }
  }`

  export default UPDATE_PRODUCT
  