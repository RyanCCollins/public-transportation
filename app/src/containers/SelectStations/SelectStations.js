import React, { PropTypes, Component } from 'react';
import styles from './SelectStations.module.scss';
import cssModules from 'react-css-modules';
import { Snackbar } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StationsActionCreators from '../../actions/stations';
import * as ScheduleActionCreators from '../../actions/schedule';
import * as GlobalActionCreators from '../../actions/index';
import {
  ComponentLoadingIndicator,
  StationsInputs
} from 'components';

const toGeo = ({
  latitude,
  longitude
}) => `lonlat:-${longitude},${latitude}`;

class SelectStations extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectDeparture = this.handleSelectDeparture.bind(this);
    this.handleSelectArrival = this.handleSelectArrival.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    this.handleClearStations = this.handleClearStations.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.fetchStations = this.fetchStations.bind(this);
    this.fetchSchedule = this.fetchSchedule.bind(this);
    this.handleRouting = this.handleRouting.bind(this);
    this.state = {
      snackbar: {
        message: ''
      }
    };
  }
  componentDidMount() {
    this.fetchStations();
    const {
      errors,
      isOffline
    } = this.props;
    this.handleErrors(errors);
    this.fetchSchedule();
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
  handleClearStations() {
    const {
      actions
    } = this.props;
    actions.clearSelectedStations();
  }
  fetchSchedule() {
    const {
      actions
    } = this.props;
    //actions.cacheDefaultSchedule();
  }
  fetchStations() {
    const {
      actions,
      isOffline
    } = this.props;
    if (!navigator.onLine || isOffline) {
      actions.loadStationsOffline();
    } else {
      actions.fetchStations();
    }
  }
  handleMessage({ message }) {
    this.setState({
      snackbar: {
        message
      }
    });
  }
  handleSubmit() {
    const {
      actions,
      selectedDepartureStation,
      selectedArrivalStation
    } = this.props;
    const dCode = selectedDepartureStation;
    const aCode = selectedArrivalStation;
    if (dCode && aCode) {
      this.handleSuccess(dCode, aCode);
    } else {
      const errors = [];
      if (!dCode) {
        errors.push(
          {
            message: 'Please select a Departure Train Station'
          }
        );
      }
      if (!aCode) {
        errors.push(
          {
            message: 'Please select an Arrival Train Station.'
          }
        );
      }
      actions.showStationErrors(errors);
    }
  }
  handleSuccess(dep, arr) {
    const {
      actions,
      stations
    } = this.props;
    this.handleRouting();
    const departure = toGeo(
      stations.filter(item =>
        item.station_code === dep
      )[0]
    );
    const arrival = toGeo(
      stations.filter(item =>
        item.station_code === arr
      )[0]
    );
    if (navigator.offLine) {
      actions.fetchDefaultSchedule();
    } else {
      actions.fetchSchedule(
        departure,
        arrival
      );
    }
  }
  handleRouting() {
    const {
      router
    } = this.context;
    router.push('/schedule');
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
          message: ''
        }
      });
    }
  }
  render() {
    const {
      isLoading,
      errors,
      funMode,
      mapMode,
      selectedDepartureStation,
      selectedArrivalStation,
      stations
    } = this.props;
    const {
      message
    } = this.state.snackbar;
    return (
      <div className={styles.container}>
        {isLoading ?
          <ComponentLoadingIndicator funMode={funMode} />
        :
          <StationsInputs
            isLoading={isLoading}
            handleSelectArrival={this.handleSelectArrival}
            selectedArrivalStation={selectedArrivalStation}
            stations={stations}
            selectedDepartureStation={selectedDepartureStation}
            handleSelectDeparture={this.handleSelectDeparture}
            handleSubmit={this.handleSubmit}
            mapMode={mapMode}
            onClearStations={this.handleClearStations}
          />
        }
        <Snackbar
          open={errors.length > 0}
          message={message || 'An unknown error occured'}
          autoHideDuration={4000}
          action="Close"
          onActionTouchTap={this.handleCloseSnackbar}
          onRequestClose={this.handleCloseSnackbar}
        />
      </div>
    );
  }
}

SelectStations.propTypes = {
  stations: PropTypes.array.isRequired,
  selectedDepartureStation: PropTypes.string,
  errors: PropTypes.array.isRequired,
  selectedArrivalStation: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOffline: PropTypes.bool.isRequired,
  funMode: PropTypes.bool.isRequired,
  mapMode: PropTypes.bool.isRequired
};

SelectStations.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.stations.isLoading,
  stations: state.stations.items,
  errors: state.stations.errors,
  selectedArrivalStation: state.stations.selectedArrivalStation,
  selectedDepartureStation: state.stations.selectedDepartureStation,
  funMode: state.settings.funMode,
  mapMode: state.settings.mapMode,
  isOffline: state.settings.isOffline
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

const SelectStationsStyled = cssModules(
  SelectStations,
  styles
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectStationsStyled);
