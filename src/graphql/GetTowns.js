import gql from "graphql-tag";

const GET_TOWNS = gql`
  query GetTowns($city: String!) {
    towns(where: { city: { _eq: $city } }, order_by: { town: asc }) {
      town
      id
    }
  }
`;

export default GET_TOWNS;
