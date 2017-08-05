import { gql } from "react-apollo";

const rolesListQuery = gql`
  query roles {
    roles {
      id
      name
      description
    }
  }
`;

export { rolesListQuery };
