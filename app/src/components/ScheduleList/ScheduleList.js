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

const parseOfflineData = (data) => ({
  departureTime: data.aimed_departure_time,
  arrivalTime: data.aimed_arrival_time,
  duration: data.duration || '0:00'
});

const parseOnlineData = (data) => ({
  departureTime: data.departure_time,
  arrivalTime: data.arrival_time,
  duration: data.duration
});

const ScheduleTable = ({
  isOffline,
  items,
  onSelection,
  selectedItemIndex
}) => (
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

class ScheduleList extends Component {
  constructor(props) {
    super(props);
    this.parseItems = this.parseItems.bind(this);
    this.state = {
      maxHeight: '400px'
    };
  }
  parseItems() {
    const {
      isOffline,
      items
    } = this.props;
    /* eslint-disable no-confusing-arrow */
    return items.map((item) =>
      isOffline ? parseOfflineData(item) : parseOnlineData(item)
    );
    /* eslint-enable no-confusing-arrow */
  }
  render() {
    const {
      isOffline
    } = this.props;
    return (
      <div className={styles.container}>
        <ScheduleTable {...this.props} items={this.parseItems} />
      </div>
    );
  }
}

ScheduleList.propTypes = {
  items: PropTypes.array,
  onSelection: PropTypes.func.isRequired,
  selectedItemIndex: PropTypes.number,
  isOffline: PropTypes.bool.isRequired
};

export default cssModules(ScheduleList, styles);
