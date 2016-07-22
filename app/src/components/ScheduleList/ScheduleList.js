import React, { PropTypes, Component } from 'react';
import styles from './ScheduleList.module.scss';
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

const getDuration = (first, second) => {
  return moment.utc(
    moment(first, 'DD/MM/YYYY HH:mm:ss')
      .diff(moment(second, 'DD/MM/YYYY HH:mm:ss')))
      .format('HH:mm:ss');
};

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '400px'
    };
  }
  render() {
    const {
      items,
      onSelection,
      selectedItemIndex
    } = this.props;
    return (
      <div className={styles.container}>
        <Table
          height={this.state.height}
          onRowSelection={onSelection}
          selectable
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Departure Time">Departure Time</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Arrival Time">Arrival Time</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Duration">Duration</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Destination">Destination</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox
            stripedRows={false}
            deselectOnClickaway={false}
            showRowHover
          >
            {items && items.map((row, index) =>
              <TableRow key={index} selected={selectedItemIndex === index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.aimed_departure_time}</TableRowColumn>
                <TableRowColumn>{row.aimed_arrival_time}</TableRowColumn>
                <TableRowColumn>
                  {getDuration(row.aimed_departure_time, row.aimed_arrival_time)}
                </TableRowColumn>
                <TableRowColumn>{row.destination_name}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ScheduleList.propTypes = {
  items: PropTypes.array,
  onSelection: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number.isRequired
};

export default cssModules(ScheduleList, styles);
