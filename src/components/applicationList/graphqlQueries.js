import { gql } from "react-apollo";

// const applicationFragment = gql`
//   fragment application on Application {
//     id
//     label
//     key
//     order
//     icon
//   }
// `;

const applicationListQuery = gql`
  query applicationList {
    id
    label
  }
`;

export { applicationListQuery };
