import gql from "graphql-tag";

const GET_PRODUCTS_PORTAL = gql`
  query GetProductsPortal {
    products(order_by: {created_at: desc}) { 
      discount
      fullDescription
      new
      isActive
      price
      id
      base_color
      dimensions
      weight
      name
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

export default GET_PRODUCTS_PORTAL
