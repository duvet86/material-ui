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

const setStartAppForRoleMutation = gql`
  mutation setStartAppForRole($roleId: ID!, $startAppId: ID!) {
    setStartAppForRole(roleId: $roleId, startAppId: $startAppId) {
      startApp {
        id
      }
    }
  }
`;

export { rolesListQuery, roleByIdQuery, setStartAppForRoleMutation };
