import { gql } from "react-apollo";

const formItemsQuery = gql`
  query formItems {
    formItems {
      id
      name
      icon
      component
    }
  }
`;

export { formItemsQuery };
