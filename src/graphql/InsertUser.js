import gql from "graphql-tag";

const INSERT_USER = gql`
  mutation AddUser($user: [users_insert_input!]!) {
    insert_users(objects: $user)
    {
      returning{
        email
        name
        id
      }
    }
  }
`;

export default INSERT_USER

/*const result = await fire
            .firestore()
            .collection("users")
            .doc(uid)
            .get();

          insertUser({
            variables: {
              user: {
                name: result.data().displayname,
                email: result.data().email,
                id: uid,
              },
            },
          });*/