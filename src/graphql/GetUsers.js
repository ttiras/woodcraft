import gql from "graphql-tag";

const GET_USERS = gql`
  query GetUsers {
    users { 
      name
       }
  }
`;

export default GET_USERS
