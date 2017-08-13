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
  query roleById($id: ID!) {
    roleById(id: $id) {
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
  mutation updateRole($id: ID!, $payload: RoleInput!) {
    updateRole(id: $id, payload: $payload) {
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
  mutation archiveRole($id: ID!) {
    archiveRole(id: $id)
  }
`;

export {
  rolesListQuery,
  roleByIdQuery,
  updateRoleMutation,
  createRoleMutation,
  archiveRoleMutation
};
