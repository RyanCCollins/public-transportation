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
    actions.selectedArrivalStop(value);
  }
  handleSelectDeparture(event, index, value) {
    const {
      actions
    } = this.props;
    actions.selectedDepartureStop(value);
  }
  handleSubmit() {
    const {
      departureInput,
      arrivalInput
    } = this.refs;
    console.log(`Submitting value for train: ${departureInput} and ${arrivalInput}`)
  }
  render() {
    const {
      stops,
      selectedArrival,
      selectedDeparture
    } = this.props;
    return (
      <div className={styles.container}>
        <Row>
          <Column isColumn small={12} medium={10} large={8} centerOnSmall>
            <SelectField
              value={selectedArrival}
              onChange={this.handleSelectArrival}
            >
              {stops.map((stop, i) =>
                <MenuItem key={i} value={stop.id} primaryText={stop.display_name} />
              )}
            </SelectField>
          </Column>
          <Divider />
          <Column isColumn small={12} medium={10} large={8} centerOnSmall>
            <SelectField
              value={selectedDeparture}
              onChange={this.handleSelectDeparture}
            >
              {stops.map((stop, i) =>
                <MenuItem key={i} value={stop.id} primaryText={stop.display_name} />
              )}
            </SelectField>
          </Column>
        </Row>
      </div>
    );
  }
}

SelectStops.propTypes = {
  stops: PropTypes.array.isRequired,
  selectedRoute: PropTypes.number.isRequired,
  selectedDeparture: PropTypes.number.isRequired,
  selectedArrival: PropTypes.number.isRequired
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
