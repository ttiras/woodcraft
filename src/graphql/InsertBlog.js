import gql from "graphql-tag";

const INSERT_BLOG = gql`
  mutation AddBlog($blog: blogs_insert_input!) {
    insert_blogs_one(object: $blog)
    {
      id
    }
  }
`; 

export default INSERT_BLOG
