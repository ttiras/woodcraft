setTimeout(() => {
    var headers
    if(token){
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }}else{
      headers = {
        'Content-Type': 'application/json',
      }
    }
    
    const gqclient = new GraphQLClient(
      'https://woodcraft.herokuapp.com/v1/graphql',
      {
        headers: headers,
      },
    )
  
    const query = `{
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
  
     gqclient.request(query).then((result)=>{console.log(result);store.dispatch(fetchProducts(result.products))}).catch((err)=>console.log(err))
  }, 2000);