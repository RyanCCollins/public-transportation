import React, { Component, PropTypes } from 'react';
import styles from './TrainSchedule.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import {
  ScheduleList
} from 'components';
import {
  Row,
  Column
} from 'react-foundation';

class TrainSchedule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      items,
      isLoading
    } = this.props;
    return (
      <Row>
        <Column small={12} medium={12} large={12}>
          {items && items.length > 0 ?
            <ScheduleList items={items} isLoading={isLoading} />
          :
            <noscript />
          }
        </Column>
      </Row>
    );
  }
}

TrainSchedule.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array
};

const mapStateToProps = (state) => ({
  items: state.schedule.items,
  isLoading: state.schedule.isLoading
});

const mapDispatchToProps = (dispatch) =>
  dispatch;

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSchedule);

export default cssModules(SmartComponent, styles);
