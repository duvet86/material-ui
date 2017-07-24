import { graphql } from "react-apollo";

import { routesByAppKeyQuery } from "components/pageBody/graphqlQueries";
import PageBody from "components/pageBody/PageBody";

export default graphql(routesByAppKeyQuery, {
  options: ({ appKey }) => ({
    variables: { appKey }
  }),
  props: ({ ownProps, data: { loading, error, routesByAppKey } }) => ({
    isLoading: loading,
    routes: routesByAppKey,
    error
  })
})(PageBody);
