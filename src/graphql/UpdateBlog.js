import gql from "graphql-tag";

const UPDATE_BLOG = gql `mutation UpdateBlog($id: uuid!, $vars: blogs_set_input!) {
    update_blogs_by_pk(pk_columns: {id: $id}, _set: $vars){
        id
    }
  }`

  export default UPDATE_BLOG
  