import gql from "graphql-tag";

const GET_SIDEBAR_BLOGS = gql`
  query GetSidebarBlogs {
    blogs(limit: 10, order_by: {created_at: desc}) {
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

export default GET_SIDEBAR_BLOGS;