import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import { Responsive, WidthProvider } from "react-grid-layout";

import PageHeader from "components/core/PageHeader";
import SimpleLineChart from "components/charting/SimpleLineChart";
import SpecifiedDomainRadarChart from "components/charting/SpecifiedDomainRadarChart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 5, h: 2 },
    { i: "b", x: 5, y: 0, w: 5, h: 2 },
    { i: "c", x: 0, y: 10, w: 12, h: 2 }
  ]
};

const DashBoard = () =>
  <div>
    <PageHeader>Dashboard</PageHeader>
    <ResponsiveReactGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      rowHeight={160}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <Paper key={"a"}>
        <SimpleLineChart />
      </Paper>
      <Paper key={"b"}>
        <SpecifiedDomainRadarChart />
      </Paper>
      <Paper key={"c"}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>Christopher Nolan</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </ResponsiveReactGridLayout>
  </div>;

export default DashBoard;
