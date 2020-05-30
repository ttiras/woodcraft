const queryProducts = `
  query queryProducts{
    products(where: {isActive: {_eq: true}}) { 
      discount
      fullDescription
      new
      price
      id
      base_color
      weight
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
  `
  export default queryProducts