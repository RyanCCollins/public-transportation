import React, { PropTypes, Component } from 'react';
import styles from './SelectStops.module.scss';
import cssModules from 'react-css-modules';
import { Snackbar } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StationsActionCreators from '../../actions/stations';
import * as ScheduleActionCreators from '../../actions/schedule';
import { ComponentLoadingIndicator, StopsInputs } from 'components';

class SelectStops extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectDeparture = this.handleSelectDeparture.bind(this);
    this.handleSelectArrival = this.handleSelectArrival.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }
  componentDidMount() {
    const {
      actions,
      errors
    } = this.props;
    actions.fetchStations();
    this.handleErrors(errors);
  }
  componentWillReceiveProps(nextProps) {
    const {
      errors
    } = nextProps;
    if (errors.length > 0) {
      this.handleErrors(errors);
    }
  }
  handleSelectArrival(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectArrivalStation(value);
  }
  handleSelectDeparture(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectDepartureStation(value);
  }
  handleCloseSnackbar() {
    const {
      actions
    } = this.props;
    actions.clearStationsErrors();
  }
  handleSubmit() {
    const {
      actions,
      selectedDepartureStation,
      selectedArrivalStation
    } = this.props;
    const departure = selectedDepartureStation;
    const arrival = selectedArrivalStation;
    if (departure && arrival) {
      actions.fetchSchedule(
        selectedDepartureStation,
        selectedArrivalStation
      );
    } else {
      const errors = [
        {
          message: 'Please select an Arrival Train Station.'
        },
        {
          message: 'Please select a Departure Train Stateion'
        }
      ];
      actions.showStationErrors(errors);
    }
  }
  handleErrors(errors) {
    if (errors.length > 1) {
      errors.forEach(item =>
        setTimeout(
          this.setState({
            message: item.message
          }),
          2000
        )
      );
    } else {
      this.setState({
        message: errors[0].message
      });
    }
  }
  render() {
    const {
      isLoading,
      errors
    } = this.props;
    const {
      message
    } = this.state;
    return (
      <div className={styles.container}>
        {isLoading ?
          <ComponentLoadingIndicator />
        :
          <StopsInputs
            {...this.props}
            handleSelectArrival={this.handleSelectArrival}
            handleSelectDeparture={this.handleSelectDeparture}
            handleSubmit={this.handleSubmit}
          />
        }
        <Snackbar
          open={errors.length > 0}
          message={message}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
      </div>
    );
  }
}

SelectStops.propTypes = {
  stations: PropTypes.array.isRequired,
  selectedDepartureStation: PropTypes.string,
  errors: PropTypes.array.isRequired,
  selectedArrivalStation: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.stations.isLoading,
  stations: state.stations.items,
  errors: state.stations.errors,
  selectedArrivalStation: state.stations.selectedArrivalStation,
  selectedDepartureStation: state.stations.selectedDepartureStation
});

const mapDispatchToProps =
(dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      StationsActionCreators,
      ScheduleActionCreators
    ), dispatch)
});

const SelectStopsStyled = cssModules(
  SelectStops,
  styles
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectStopsStyled);
