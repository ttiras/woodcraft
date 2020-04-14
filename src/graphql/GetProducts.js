import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query MyQuery {
    products { 
      discount
      fullDescription
      new
      price
      id
      name
      rating
      saleCount
      shortDescription
      sku
      stock
      category {
        category{
          category
        }
      }
      tag {
        tag{
          tag
        }
      }
      image {
        path
      }
    }
  }
`;

export default GET_PRODUCTS
