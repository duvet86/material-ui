import { gql } from "react-apollo";

const credentialsFragment = gql`
  fragment credentials on User {
    name
    role {
      appList {
        label
        key
        icon
      }
    }
  }
`;

const userByIdQuery = gql`
  query userById($id: ID!) {
    userById(id: $id) {
      ...credentials
    }
  }
  ${credentialsFragment}
`;

export { userByIdQuery };
