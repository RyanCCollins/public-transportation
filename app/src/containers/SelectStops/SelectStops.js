import React, { PropTypes, Component } from 'react';
import styles from './SelectStops.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as StopsActionCreators from '../../actions/stops';
import {
  SelectField,
  Divider,
  RaisedButton,
  MenuItem
} from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';
import { ComponentLoadingIndicator } from 'components';

const StopsInputs = ({
  selectedDepartureStop,
  handleSelectDeparture,
  selectedArrivalStop,
  handleSelectArrival,
  stops,
  handleSubmit,
  isLoading
}) => (
  <Row>
    <Column isColumn small={12} medium={10} large={8} centerOnSmall>
      <SelectField
        value={selectedDepartureStop}
        onChange={handleSelectDeparture}
        floatingLabelText="Select a Departure Train Station"
        fullWidth
        autoWidth
      >
        {stops.map((stop, i) =>
          <MenuItem key={i} value={stop.id} primaryText={stop.display_name} />
        )}
      </SelectField>
    </Column>
    <Divider />
    <Column isColumn small={12} medium={10} large={8} centerOnSmall>
      <SelectField
        value={selectedArrivalStop}
        onChange={handleSelectArrival}
        floatingLabelText="Select an Arrival Train Station"
        fullWidth
        autoWidth
      >
        {stops.map((stop, i) =>
          <MenuItem key={i} value={stop.id} primaryText={stop.display_name} />
        )}
      </SelectField>
    </Column>
    <Column
      isColumn
      small={12}
      medium={10}
      large={8}
      centerOnSmall
      className={styles.buttonWrapper}
    >
      <RaisedButton
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Submit
      </RaisedButton>
    </Column>
  </Row>
);

StopsInputs.propTypes = {
  selectedDepartureStop: PropTypes.string,
  handleSelectDeparture: PropTypes.func.isRequired,
  selectedArrivalStop: PropTypes.string,
  handleSelectArrival: PropTypes.func.isRequired,
  stops: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

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
          <StopsInputs {...this.props} handleSubmit={this.handleSubmit} />
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
