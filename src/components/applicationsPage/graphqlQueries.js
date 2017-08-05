import { gql } from "react-apollo";

const applicationsListQuery = gql`
  query applicationList {
    label
  }
`;

export { applicationsListQuery };
