import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import TopBarWithData from "components/appFrame/topBar/TopBarWithData";
import LeftDrawerWithData from "components/appFrame/leftDrawer/LeftDrawerWithData";
import PageBodyWithData from "components/appFrame/pageBody/PageBodyWithData";

const App = ({
  muiTheme,
  drawerState,
  handleToggle,
  contentStyle,
  appList,
  currentAppLabel,
  currentAppKey,
  location,
  match
}) =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TopBarWithData
        handleToggle={handleToggle}
        appList={appList}
        appLabel={currentAppLabel}
        appKey={currentAppKey}
        match={match}
      />
      <LeftDrawerWithData
        open={drawerState}
        handleToggle={handleToggle}
        appKey={currentAppKey}
        location={location}
      />
      <PageBodyWithData style={contentStyle} appKey={currentAppKey} />
    </div>
  </MuiThemeProvider>;

export default App;
