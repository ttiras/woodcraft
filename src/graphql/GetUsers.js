import gql from "graphql-tag";

const GET_USERS = gql`
  query MyQuery {
    users { 
      name
       }
  }
`;

export default GET_USERS
