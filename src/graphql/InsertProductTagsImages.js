import gql from "graphql-tag";

const INSERT_PRODUCT_TAGS_IMAGES = gql `
mutation insertProductTagsImages($product_tags: [product_tags_insert_input!]!, $images: [images_insert_input!]!) {
    insert_product_tags(objects: $product_tags){
      affected_rows
    }
    insert_images(objects: $images){
      returning{
        path
      }
    }
  }
  `
  
  export default INSERT_PRODUCT_TAGS_IMAGES