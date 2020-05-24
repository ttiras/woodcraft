import gql from "graphql-tag";

const GET_CATEGORIES_TAGS = gql`
  query GetCategories {
    categories {
      category
      category_id
    }
    tags {
      tag
      tag_id
    }
  }
`;

export default GET_CATEGORIES_TAGS;
