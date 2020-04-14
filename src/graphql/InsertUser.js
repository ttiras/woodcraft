import gql from "graphql-tag";

const INSERT_USER = gql`
  mutation AddUser($user: [users_insert_input!]!) {
    insert_users(objects: $user)
    {
      affected_rows
    }
  }
`; 

export default INSERT_USER

