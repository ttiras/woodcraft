import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_TEST = gql`
  mutation AddTodo($test: [test_insert_input!]!) {
    insert_test(objects: $test) {
      affected_rows
    }
  }
`;

function Test() {
  const [addTest] = useMutation(ADD_TEST, {
    onCompleted(data) {
      console.log(data);
    }
  });

  const handleMutation = () => {
    console.log("this");
    addTest({
      variables: {
        test: {
          name: "tests",
          tests_demo: { data: [{ demo_id: "3", test_id: "3" }] }
        }
      }
    });
  };
  return (
    <button type='button btn btn-primary' onClick={handleMutation}>
      Ekle
    </button>
  );
}
