import { gql } from "react-apollo";

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      error
      jwtToken {
        token
        userId
        appKey
        createdAt
      }
    }
  }
`;

export { loginMutation };
