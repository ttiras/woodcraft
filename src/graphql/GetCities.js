import gql from "graphql-tag";

const GET_CITIES = gql`
  query GetCities {
    cities {
      city
      id
    }
  }
`;

export default GET_CITIES;
