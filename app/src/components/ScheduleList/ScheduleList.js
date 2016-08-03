import React, { PropTypes, Component } from 'react';
import styles from './ScheduleList.module.scss';
import cssModules from 'react-css-modules';
import { ScheduleTable } from 'components';

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
    return (
      <div className={styles.container}>
        <ScheduleTable
          {...this.props}
          items={this.parseItems}
        />
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
