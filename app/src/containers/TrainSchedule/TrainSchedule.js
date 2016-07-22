import React, { Component, PropTypes } from 'react';
import styles from './TrainSchedule.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  RaisedButton,
  Snackbar
} from 'material-ui';
import {
  ScheduleList,
  ComponentLoadingIndicator
} from 'components';
import {
  Row,
  Column
} from 'react-foundation';
import * as ScheduleActionCreators from '../../actions/schedule';

class TrainSchedule extends Component {
  constructor() {
    super();
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }
  handleSelectItem() {
    const {
      actions
    } = this.props;
    actions.selectScheduleItem();
  }
  handleCloseSnackbar() {
    const {
      actions
    } = this.props;
    actions.clearScheduleErrors();
  }
  render() {
    const {
      errors,
      items,
      isLoading
    } = this.props;
    return (
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
        <Snackbar
          open={errors.length > 0}
          message={errors.length > 0 && errors[0].message}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
        <Column>
          <RaisedButton
            label="MORE INFO"
            disabled={false}
            primary
          />
        </Column>
        <div>

        </div>
      </Row>
    );
  }
}

TrainSchedule.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  items: PropTypes.array,
  errors: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  items: state.schedule.items,
  isLoading: state.schedule.isLoading,
  errors: state.schedule.errors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ScheduleActionCreators, dispatch)
});

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSchedule);

export default cssModules(SmartComponent, styles);
