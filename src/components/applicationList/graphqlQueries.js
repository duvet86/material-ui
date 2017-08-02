import { gql } from "react-apollo";

const applicationListQuery = gql`
  query applicationList {
    id
    label
  }
`;

export { applicationListQuery };
