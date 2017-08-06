import { gql } from "react-apollo";

const roleInfoFragment = gql`
  fragment roleInfo on Role {
    id
    name
    description
  }
`;

const rolesListQuery = gql`
  query roles {
    roles {
      ...roleInfo
    }
  }
  ${roleInfoFragment}
`;

const roleByIdQuery = gql`
  query roleById($roleId: ID!) {
    roleById(id: $roleId) {
      ...roleInfo
      appList {
        id
        label
      }
      startApp {
        id
      }
    }
  }
  ${roleInfoFragment}
`;

export { rolesListQuery, roleByIdQuery };
