import { graphql } from "react-apollo";

import { getUserIdFromToken } from "lib/localStorageAPI";

import { userByIdQuery } from "components/topBar/graphqlQueries";
import TopBar from "components/topBar/TopBar";

const queryOptions = {
  options: () => ({
    variables: { id: getUserIdFromToken() }
  }),
  props: ({ ownProps, data: { loading, error, userById } }) => ({
    isLoading: loading,
    user: userById,
    error,
    ...ownProps
  })
};

export default graphql(userByIdQuery, queryOptions)(TopBar);
