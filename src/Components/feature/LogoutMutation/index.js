import { commitMutation, graphql } from "react-relay";
import environment from "../../../Environment";

const mutation = graphql`
  mutation LogoutMutation {
    logout {
      status
      message
    }
  }
`;

export default function LoginMutation(result) {
  var variables = {};

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, error) => {
      result(response, error);
      console.log("Response received from server.");
    },
    onError: err => result(null, err)
  });
}
