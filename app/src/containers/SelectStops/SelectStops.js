import React, { PropTypes, Component } from 'react';
import styles from './SelectStops.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StopsActionCreators from '../../actions/stops';
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
      actions,
      selectedRoute
    } = this.props;
    actions.fetchRouteStops(selectedRoute);
  }
  handleSelectArrival(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectArrivalStop(value);
  }
  handleSelectDeparture(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectDepartureStop(value);
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
  stops: PropTypes.array.isRequired,
  selectedRoute: PropTypes.string.isRequired,
  selectedDepartureStop: PropTypes.string.isRequired,
  selectedArrivalStop: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  isLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedRoute: state.routes.selectedRoute,
  isLoading: state.stops.isLoading,
  stops: state.stops.items,
  errors: state.stops.errors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(StopsActionCreators, dispatch)
});

const SelectStopsStyled = cssModules(SelectStops, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectStopsStyled);
