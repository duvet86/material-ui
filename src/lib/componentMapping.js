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

export default { dashBoard, channelsList, formBuilder, help, applications };
