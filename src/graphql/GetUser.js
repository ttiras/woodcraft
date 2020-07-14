import gql from "graphql-tag";

const SINGLE_USER = gql`

query SingleUser ($id: String!) {
 users(where: {id: {_eq: $id}}) {
    role
    name
    surname
    phone
}}
`;
export default SINGLE_USER

  