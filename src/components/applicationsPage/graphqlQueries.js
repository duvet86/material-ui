import { gql } from "react-apollo";

const applicationsListQuery = gql`
  query applications {
    applications {
      id
      label
      key
      order
      icon
      isSystem
    }
  }
`;

const archiveApplicationMutation = gql`
  mutation archiveApplication($id: ID!) {
    archiveApplication(id: $id)
  }
`;

export { applicationsListQuery, archiveApplicationMutation };
