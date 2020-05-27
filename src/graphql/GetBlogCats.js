import gql from "graphql-tag";

const GET_BLOG_CATS = gql`
query GetBlogTags {
    bcat {
      bcat
      id
    }
  }
  
`;

export default GET_BLOG_CATS;