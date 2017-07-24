import { gql } from "react-apollo";

const startAppByUserIdQuery = gql`
  query startAppByUserId($id: ID!) {
    startAppByUserId(id: $id) {
      key
    }
  }
`;

export { startAppByUserIdQuery };
