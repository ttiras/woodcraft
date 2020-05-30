import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  query GetProducts {
    products { 
      discount
      fullDescription
      new
      price
      id
      wieght
      base_color
      dimensions
      name
      isActive
      rating
      saleCount
      shortDescription
      sku
      stock
      category {
        category{
          category
          category_id
        }
      }
      tag {
        tag{
          tag
          tag_id
        }
      }
      image {
        path
        image_id
      }
    }
  }
`;

export default GET_PRODUCTS
