import gql from "graphql-tag";

const SINGLE_USER = gql`

query SingleUser ($id: String!) {
 users(where: {id: {_eq: $id}}) {
    role
}}
`;
export default SINGLE_USER

  