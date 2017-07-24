import { graphql } from "react-apollo";

import { applicationListQuery } from "components/app/graphqlQueries";
import AppContainer from "components/app/AppContainer";

const applicationListQueryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    isLoading: loading,
    applicationList,
    error
  })
};

export default graphql(applicationListQuery, applicationListQueryOptions)(
  AppContainer
);
