import gql from "graphql-tag";

const INSERT_BLOG_CAT = gql`mutation AddBlogCat($bcat: [blog_categories_insert_input!]!) {
    insert_blog_categories(objects: $bcat){
      returning{
        category_id
      }
    }
  }
  `
  export default INSERT_BLOG_CAT