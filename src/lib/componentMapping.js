import asyncComponent from "lib/asyncComponent";

const dashBoard = asyncComponent(() =>
  import("components/staticPages/DashBoard")
);
const channelsList = asyncComponent(() =>
  import("components/channelList/ChannelListWithData")
);
const formBuilder = asyncComponent(() =>
  import("components/formBuilder/FormBuilderContainer")
);
const help = asyncComponent(() => import("components/staticPages/Help"));
const applicationList = asyncComponent(() =>
  import("components/applicationList/ApplicationListWithData")
);

export { dashBoard, channelsList, formBuilder, help, applicationList };
