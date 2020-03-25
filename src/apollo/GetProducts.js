import React from 'react'
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


const GET_PRODUCTS = gql`
query MyQuery {
    products {
      discount
      fullDescription
      new
      price
      product_id
      product_name
      rating
      saleCount
      shortDescription
      sku
      stock
      category {
        category_id
      }
      tag {
        tag_id
      }
      image {
        image_id
      }
    }
  }
  
`

export default function GetProducts () {
    const {loading, data, error} = useQuery(GET_PRODUCTS)
    console.log(data)
    return data.products
}