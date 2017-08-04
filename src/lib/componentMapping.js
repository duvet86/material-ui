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
const applicationList = asyncComponent(() =>
  import("components/applicationList/ApplicationListWithData")
);

export default { dashBoard, channelsList, formBuilder, help, applicationList };
