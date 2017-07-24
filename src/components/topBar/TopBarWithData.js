import { graphql } from "react-apollo";

import { getUserIdFromToken } from "lib/localStorageAPI";

import { userByIdQuery } from "components/topBar/graphqlQueries";
import TopBar from "components/topBar/TopBar";

const queryOptions = {
  options: () => ({
    variables: { id: getUserIdFromToken() }
  }),
  props: ({ ownProps, data: { loading, error, userById } }) => ({
    ...ownProps,
    isLoading: loading,
    user: userById,
    error
  })
};

export default graphql(userByIdQuery, queryOptions)(TopBar);
