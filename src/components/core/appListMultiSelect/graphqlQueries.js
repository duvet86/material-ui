import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    applicationList {
      id
      label
      key
      icon
    }
  }
`;

export { applicationListQuery };
