const queryProducts = `{
    products { 
      discount
      fullDescription
      new
      price
      id
      base_color
      weight
      dimensions
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
  `
  export default queryProducts