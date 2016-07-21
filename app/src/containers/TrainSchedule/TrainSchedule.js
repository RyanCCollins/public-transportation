import React, { Component, PropTypes } from 'react';
import styles from './TrainSchedule.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import {
  ScheduleList,
  ComponentLoadingIndicator
} from 'components';
import {
  Row,
  Column
} from 'react-foundation';

const TrainSchedule = ({
  items,
  isLoading
}) => (
  <Row className={styles.rowWrapper}>
    <Column small={12} medium={12} large={12}>
      {items && items.length > 0 ?
        <ScheduleList items={items} isLoading={isLoading} />
      :
        <noscript />
      }
    </Column>
    {isLoading && !items.length > 0 ?
      <ComponentLoadingIndicator />
    :
      <noscript />
    }
  </Row>
);

TrainSchedule.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array
};

const mapStateToProps = (state) => ({
  items: state.schedule.items,
  isLoading: state.schedule.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSchedule);

export default cssModules(SmartComponent, styles);
