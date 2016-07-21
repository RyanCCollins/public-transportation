import React, { PropTypes, Component } from 'react';
import styles from './SelectStops.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StationsActionCreators from '../../actions/stations';
import { ComponentLoadingIndicator, StopsInputs } from 'components';

class SelectStops extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectDeparture = this.handleSelectDeparture.bind(this);
    this.handleSelectArrival = this.handleSelectArrival.bind(this);
  }
  componentDidMount() {
    const {
      actions
    } = this.props;
    actions.fetchStations();
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
  handleSubmit() {

  }
  render() {
    const {
      isLoading
    } = this.props;
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
      </div>
    );
  }
}

SelectStops.propTypes = {
  stations: PropTypes.array.isRequired,
  selectedDepartureStation: PropTypes.string,
  selectedArrivalStation: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.stations.isLoading,
  stations: state.stations.items,
  errors: state.stations.errors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(StationsActionCreators, dispatch)
});

const SelectStopsStyled = cssModules(SelectStops, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectStopsStyled);
