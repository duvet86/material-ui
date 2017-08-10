import { gql } from "react-apollo";

const roleInfoFragment = gql`
  fragment roleInfo on Role {
    id
    name
    description
    isSystem
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
      }
      startApp {
        id
      }
    }
  }
  ${roleInfoFragment}
`;

const updateRoleMutation = gql`
  mutation updateRole($roleId: ID!, $payload: RoleInput!) {
    updateRole(roleId: $roleId, payload: $payload) {
      ...roleInfo
      appList {
        id
      }
      startApp {
        id
      }
    }
  }
  ${roleInfoFragment}
`;

const createRoleMutation = gql`
  mutation createRole($payload: RoleInput!) {
    createRole(payload: $payload) {
      ...roleInfo
      appList {
        id
      }
      startApp {
        id
      }
    }
  }
  ${roleInfoFragment}
`;

const archiveRoleMutation = gql`
  mutation archiveRole($roleId: ID!) {
    archiveRole(roleId: $roleId)
  }
`;

export {
  rolesListQuery,
  roleByIdQuery,
  updateRoleMutation,
  createRoleMutation,
  archiveRoleMutation
};
