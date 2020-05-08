import gql from "graphql-tag";

const INSERT_MESSAGE = gql`
  mutation AddMessage($message: [messages_insert_input!]!) {
    insert_messages(objects: $message)
    {
      affected_rows
    }
  }
`; 

export default INSERT_MESSAGE

