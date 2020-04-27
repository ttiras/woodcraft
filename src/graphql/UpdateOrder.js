import gql from "graphql-tag";

const UPDATE_ORDER = gql`
  mutation UpdateOrderToken($id: uuid!, $token: String!) {
    update_orders(where: {id: {_eq: $id}}, _set: {token: $token})
    {
      affected_rows
    }
  }
`; 

export default UPDATE_ORDER

