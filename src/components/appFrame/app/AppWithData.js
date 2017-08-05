import { graphql } from "react-apollo";

import { applicationListQuery } from "components/appFrame/app/graphqlQueries";
import AppContainer from "components/appFrame/app/AppContainer";

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
