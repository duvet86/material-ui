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

export { applicationsListQuery };
