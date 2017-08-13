import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    applications {
      label
      key
      icon
    }
  }
`;

export { applicationListQuery };
