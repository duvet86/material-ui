import { gql } from "react-apollo";

const applicationsListQuery = gql`
  query applications {
    id
    label
    order
    icon
    isSystem
  }
`;

export { applicationsListQuery };
