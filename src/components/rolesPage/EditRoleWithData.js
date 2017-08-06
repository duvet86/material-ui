import { graphql } from "react-apollo";

import utility from "lib/utility";

import { roleByIdQuery } from "components/rolesPage/graphqlQueries";
import EditRole from "components/rolesPage/EditRole";

const queryOptions = {
  options: ({ match: { params: { id } } }) => ({
    variables: { roleId: id }
  }),
  props: ({
    ownProps: { location: { pathname } },
    data: { loading, error, roleById }
  }) => ({
    isLoading: loading,
    role: roleById,
    error,
    path: utility.backOfAToken(pathname)
  })
};

export default graphql(roleByIdQuery, queryOptions)(EditRole);
