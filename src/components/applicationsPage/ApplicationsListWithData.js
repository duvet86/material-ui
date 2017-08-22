import { graphql } from "react-apollo";

import { applicationsListQuery } from "components/applicationsPage/graphqlQueries";
import ApplicationsListContainer from "components/applicationsPage/ApplicationsListContainer";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, applications } }) => ({
    isLoading: loading,
    data: applications,
    error
  })
};

export default graphql(applicationsListQuery, queryOptions)(
  ApplicationsListContainer
);
