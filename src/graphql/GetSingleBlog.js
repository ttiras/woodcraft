import gql from "graphql-tag";

const GET_SINGLE_BLOG = gql`
  query GetBlogs($id: uuid!) {
    blogs(where: {id: {_eq: $id}}) {
      created_at
      id
      img1
      img2
      img3
      p1
      p2
      p3
      quote
      title
      blog_categories {
        bcat {
          bcat
          id
        }
      }
    }
  }
`;

export default GET_SINGLE_BLOG;
