import React, { PropTypes } from 'react';
import styles from './ScheduleTable.module.scss';
import cssModules from 'react-css-modules';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import moment from 'moment';

const parseTime = (t) =>
  moment(t, ['HH:mm']).format('h:mm A');

const ScheduleTable = ({
  items,
  onSelection,
  selectedItemIndex
}) => (
  <Table
    height={200}
    onRowSelection={onSelection}
    selectable
  >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn
          tooltip="The ID"
          className={styles.hideSmall}
        >
          ID
        </TableHeaderColumn>
        <TableHeaderColumn tooltip="The Departure Time">Departure Time</TableHeaderColumn>
        <TableHeaderColumn tooltip="The Arrival Time">Arrival Time</TableHeaderColumn>
        <TableHeaderColumn tooltip="The Duration">Duration</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox
      stripedRows={false}
      deselectOnClickaway={false}
      showRowHover
    >
      {items && items.map((item, index) =>
        <TableRow key={index} selected={selectedItemIndex === index}>
          <TableRowColumn className={styles.hideSmall}>{index}</TableRowColumn>
          <TableRowColumn>{parseTime(item.departureTime)}</TableRowColumn>
          <TableRowColumn>{parseTime(item.arrivalTime)}</TableRowColumn>
          <TableRowColumn>{item.duration}</TableRowColumn>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

ScheduleTable.propTypes = {
  isOffline: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number.isRequired
};

export default cssModules(ScheduleTable, styles);
