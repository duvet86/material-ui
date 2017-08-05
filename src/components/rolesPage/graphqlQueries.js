import { gql } from "react-apollo";

const applicationListQuery = gql`
  query roles {
    roles {
      name
      description
      startApp {
        label
      }
      appList {
        label
      }
    }
  }
`;

export { applicationListQuery };
