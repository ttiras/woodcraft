import gql from "graphql-tag";

const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
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
        }
      }
    }
  }
`;

export default GET_BLOGS;
