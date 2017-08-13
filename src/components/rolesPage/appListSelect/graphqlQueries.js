import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    applications {
      id
      label
      key
      icon
    }
  }
`;

export { applicationListQuery };
