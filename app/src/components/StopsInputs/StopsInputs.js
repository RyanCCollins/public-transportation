import React, { PropTypes, Component } from 'react';
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

class StopsInputs extends Component {
  render() {
    const {
      selectedDepartureStop,
      handleSelectDeparture,
      selectedArrivalStop,
      handleSelectArrival,
      stops,
      handleSubmit,
      isLoading
    } = this.props;
    return (
      {selectedStop === null ?
        <div>
          <h1>Select a route</h1>
        </div>
      :
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
      }
    );
  }
}

StopsInputs.propTypes = {
  selectedDepartureStop: PropTypes.string,
  handleSelectDeparture: PropTypes.func.isRequired,
  selectedArrivalStop: PropTypes.string,
  handleSelectArrival: PropTypes.func.isRequired,
  stops: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const NoSelectedRoute = () => (
  <div className={styles.noRoute}>
    <h1>No Selected Route</h1>
  </div>
);
