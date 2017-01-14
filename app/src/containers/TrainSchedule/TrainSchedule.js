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
  ComponentLoadingIndicator,
  NoItemsFound
} from 'components';
import { ScheduleItemInfo } from 'containers';
import {
  Row,
  Column
} from 'react-foundation';
import * as ScheduleActionCreators from '../../actions/schedule';

const MoreInfoButton = ({
  selectedItem,
  onClick,
  isHidden
}) => (
  <Column
    className={styles.buttonWrapper}
    style={isHidden ? { display: 'none' } : {}}
  >
    <RaisedButton
      label="MORE INFO"
      onClick={onClick}
      disabled={selectedItem === null}
      primary
    />
  </Column>
);

MoreInfoButton.propTypes = {
  selectedItem: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
};

class TrainSchedule extends Component {
  constructor() {
    super();
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleMoreInfo = this.handleMoreInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      scheduleItems: []
    };
  }
  componentDidMount() {
    const {
      items,
      isOffline,
      defaultItems
    } = this.props;
    if (isOffline === true) {
      this.state = {
        scheduleItems: defaultItems
      };
    } else {
      this.state = {
        scheduleItems: items
      };
    }
  }
  componentWillReceiveProps(newProps) {
    const {
      defaultItems
    } = this.props;
    if (newProps.isOffline === true) {
      this.setState({
        scheduleItems: defaultItems
      });
    }
  }
  handleSelectItem(indices) {
    const {
      actions
    } = this.props;
    const newIndex = indices[0];
    if (typeof newIndex === 'undefined') {
      actions.clearSelectedScheduleItem();
    } else {
      actions.selectScheduleItem(newIndex);
    }
  }
  handleMoreInfo() {
    const {
      actions
    } = this.props;
    actions.toggleMoreInfo();
  }
  handleCloseSnackbar() {
    const {
      actions
    } = this.props;
    actions.clearScheduleErrors();
  }
  handleSubmit() {
    /* eslint-disable no-alert, no-console */
    alert("Sorry, but we aren't actually selling anything here.");
  }
  render() {
    const {
      scheduleItems
    } = this.state;
    const {
      errors,
      isLoading,
      selectedItemIndex,
      isViewingMoreInfo,
      funMode,
      isOffline
    } = this.props;
    return (
      <Row className={styles.rowWrapper}>
        <Column small={12} medium={12} large={12}>
          {!isLoading && scheduleItems && scheduleItems.length > 0 ?
            <ScheduleList
              items={scheduleItems}
              isOffline={isOffline}
              isLoading={isLoading}
              selectedItemIndex={selectedItemIndex}
              onSelection={this.handleSelectItem}
            />
          :
            <NoItemsFound itemName="Train Schedule" />
          }
        </Column>
        <Column small={12} medium={12} large={12}>
          <MoreInfoButton
            onClick={this.handleMoreInfo}
            selectedItem={scheduleItems[selectedItemIndex]}
            isHidden={selectedItemIndex === null ||
              typeof selectedItemIndex === 'undefined'
            }
            keyboardFocused={selectedItemIndex !== null}
          />
        </Column>
        {isLoading && !scheduleItems.length > 0 ?
          <ComponentLoadingIndicator funMode={funMode} />
        :
          <noscript />
        }
        {scheduleItems.length > 0 && scheduleItems !== null ?
          <ScheduleItemInfo
            style={{ width: '90%' }}
            item={scheduleItems[selectedItemIndex]}
            isOpen={isViewingMoreInfo}
            disabled={selectedItemIndex === null}
            onSubmit={this.handleSubmit}
            onClose={this.handleMoreInfo}
          />
        :
          <noscript />
        }
        <Snackbar
          open={errors.length > 0}
          message={errors.length > 0 ? errors[0].message : ''}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
      </Row>
    );
  }
}

TrainSchedule.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  items: PropTypes.array,
  defaultItems: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  selectedItemIndex: PropTypes.number,
  isViewingMoreInfo: PropTypes.bool.isRequired,
  funMode: PropTypes.bool.isRequired,
  isOffline: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  items: state.schedule.items,
  defaultItems: state.schedule.defaultSchedule.items,
  isLoading: state.schedule.isLoading,
  errors: state.schedule.errors,
  selectedItemIndex: state.schedule.selectedItemIndex,
  isViewingMoreInfo: state.schedule.isViewingMoreInfo,
  funMode: state.settings.funMode,
  isOffline: state.settings.offlineMode
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ScheduleActionCreators, dispatch)
});

const SmartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSchedule);

export default cssModules(SmartComponent, styles);
