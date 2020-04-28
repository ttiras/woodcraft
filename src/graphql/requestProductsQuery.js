const queryProducts = `{
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
  `
  export default queryProducts