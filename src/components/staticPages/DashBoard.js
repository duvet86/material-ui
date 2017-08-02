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
import { Row, Col } from "react-flexbox-grid";

import PageHeader from "components/core/PageHeader";
import SubHeader from "components/core/SubHeader";
import SimpleLineChart from "components/charting/SimpleLineChart";
import SpecifiedDomainRadarChart from "components/charting/SpecifiedDomainRadarChart";

const DashBoard = () =>
  <div>
    <PageHeader>Dashboard</PageHeader>
    <Row>
      <Col xs={12} md={6}>
        <Paper>
          <SimpleLineChart />
        </Paper>
      </Col>
      <Col xs={12} md={6}>
        <Paper>
          <SpecifiedDomainRadarChart />
        </Paper>
      </Col>
    </Row>
    <SubHeader>Section title</SubHeader>
    <Paper>
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
  </div>;

export default DashBoard;
