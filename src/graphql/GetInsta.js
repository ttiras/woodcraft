
  import gql from "graphql-tag";

const GET_INSTA = gql`
query GetInsta {
    insta(limit: 10) {
      link
    }
}
`;

export default GET_INSTA;
