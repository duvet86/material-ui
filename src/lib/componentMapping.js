import asyncComponent from "lib/asyncComponent";

const dashBoard = asyncComponent(() =>
  import("components/staticPages/DashBoard")
);
const channelsList = asyncComponent(() =>
  import("components/channelList/ChannelListWithData")
);
const pageBuilder = asyncComponent(() =>
  import("components/pageBuilder/PageBuilderContainer")
);
const help = asyncComponent(() => import("components/staticPages/Help"));
const applicationList = asyncComponent(() =>
  import("components/applicationList/ApplicationListWithData")
);

export { dashBoard, channelsList, pageBuilder, help, applicationList };
