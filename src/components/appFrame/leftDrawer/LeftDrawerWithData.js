import { graphql } from "react-apollo";

import { menuByAppKeyQuery } from "components/appFrame/leftDrawer/graphqlQueries";
import LeftDrawer from "components/appFrame/leftDrawer/LeftDrawer";

export default graphql(menuByAppKeyQuery, {
  options: ({ appKey }) => ({
    variables: { appKey: appKey }
  }),
  props: ({
    ownProps: { appKey },
    data: { loading, error, applicationByAppKey }
  }) => ({
    isLoading: loading,
    menu: applicationByAppKey && applicationByAppKey.menu,
    appKey: appKey,
    error
  })
})(LeftDrawer);
