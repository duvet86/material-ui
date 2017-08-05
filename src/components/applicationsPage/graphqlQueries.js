import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    label
  }
`;

export { applicationListQuery };
