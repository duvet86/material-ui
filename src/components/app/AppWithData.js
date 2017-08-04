import { graphql } from "react-apollo";

import { applicationListQuery } from "components/app/graphqlQueries";
import AppContainer from "components/app/AppContainer";

const applicationListQueryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    applicationList,
    error,
    isLoading: loading
  })
};

export default graphql(applicationListQuery, applicationListQueryOptions)(
  AppContainer
);
