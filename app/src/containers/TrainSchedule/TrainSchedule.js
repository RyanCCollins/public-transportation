import React, { Component, PropTypes } from 'react';
import styles from './TrainSchedule.module.scss';
import cssModules from 'react-css-modules';
import {
  ScheduleList
} from 'components';
import {
  Row,
  Column
} from 'react-foundation';

class TrainSchedule extends Component {
  render() {
    return (
      <Row>
        <Column small={12} medium={12} large={12}>
          <ScheduleList />
        </Column>
      </Row>
    );
  }
}

export default cssModules(TrainSchedule, styles);
