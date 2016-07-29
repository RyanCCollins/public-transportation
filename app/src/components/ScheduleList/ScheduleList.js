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

const parseTime = (t) =>
  moment(t, ['HH:mm']).format('h:mm A');

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: '400px'
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
            {items && items.map((row, index) =>
              <TableRow key={index} selected={selectedItemIndex === index}>
                <TableRowColumn className={styles.hideSmall}>{index}</TableRowColumn>
                <TableRowColumn>{parseTime(row.departure_time)}</TableRowColumn>
                <TableRowColumn>{parseTime(row.arrival_time)}</TableRowColumn>
                <TableRowColumn>{row.duration}</TableRowColumn>
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
  selectedItemIndex: PropTypes.number
};

export default cssModules(ScheduleList, styles);
