import React, { PropTypes, Component } from 'react';
import styles from './SelectStops.module.scss';
import cssModules from 'react-css-modules';
import { Snackbar } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StationsActionCreators from '../../actions/stations';
import * as ScheduleActionCreators from '../../actions/schedule';
import * as GlobalActionCreators from '../../actions/index';
import { ComponentLoadingIndicator, StopsInputs } from 'components';

class SelectStops extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectDeparture = this.handleSelectDeparture.bind(this);
    this.handleSelectArrival = this.handleSelectArrival.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      snackbar: {
        message: ''
      }
    };
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
    actions.clearStationErrors();
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
      let errors = [];
      if (!departure) {
        errors.push(
          {
            message: 'Please select a Departure Train Station'
          }
        );
      }
      if (!arrival) {
        errors.push(
          {
            message: 'Please select an Arrival Train Station.'
          }
        );
      }
      actions.showStationErrors(errors);
    }
  }
  handleClear() {
    const {
      actions
    } = this.props;
    actions.reset();
  }
  handleErrors(errors) {
    if (errors.length > 1) {
      errors.forEach(item =>
        setTimeout(
          this.setState({
            snackbar: {
              message: item.message
            }
          }),
          2000
        )
      );
    } else if (errors.length > 0) {
      this.setState({
        snackbar: {
          message: errors[0].message
        }
      });
    } else {
      this.setState({
        snackbar: {
          message: null
        }
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
    } = this.state.snackbar;
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
            handleClear={this.handleClear}
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
  isLoading: PropTypes.bool.isRequired
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
      ScheduleActionCreators,
      GlobalActionCreators
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
