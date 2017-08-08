import asyncComponent from "lib/asyncComponent";

const dashBoard = asyncComponent(() =>
  import("components/staticPages/DashBoard")
);
const channelsList = asyncComponent(() =>
  import("components/channelList/ChannelListWithData")
);
const formBuilder = asyncComponent(() =>
  import("components/formBuilder/FormBuilderWithData")
);
const help = asyncComponent(() => import("components/staticPages/Help"));
const applications = asyncComponent(() =>
  import("components/applicationsPage/ApplicationsPageWithData")
);
const roles = asyncComponent(() =>
  import("components/rolesPage/RolesListWithData")
);
const editRole = asyncComponent(() =>
  import("components/rolesPage/EditRoleWithData")
);
const addRole = asyncComponent(() =>
  import("components/rolesPage/AddEditRoleContainer")
);

export default {
  dashBoard,
  channelsList,
  formBuilder,
  help,
  applications,
  roles,
  editRole,
  addRole
};
