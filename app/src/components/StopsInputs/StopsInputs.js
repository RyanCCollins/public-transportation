import React, { PropTypes, Component } from 'react';
import { RaisedButton } from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';
import styles from './StopsInput.module.scss';
import cssModules from 'react-css-modules';
import { StationSelectField } from 'components';

const NoSelectedRoute = () => (
  <div className={styles.noRoute}>
    <h4>No Selected Route</h4>
  </div>
);

class StopsInputs extends Component {
  render() {
    const {
      selectedDepartureStation,
      handleSelectDeparture,
      selectedArrivalStation,
      handleSelectArrival,
      stations,
      handleSubmit,
      isLoading
    } = this.props;
    return (
      <Row>
        <Column small={12} medium={12} large={12}>
          <Column isColumn small={12} medium={10} large={8} centerOnSmall>
            <StationSelectField
              value={selectedDepartureStation}
              onChange={handleSelectDeparture}
              stations={stations}
              whoAmI="Departure"
            />
          </Column>
          <Column isColumn small={12} medium={10} large={8} centerOnSmall>
            <StationSelectField
              value={selectedArrivalStation}
              onChange={handleSelectArrival}
              stations={stations}
              whoAmI="Arrival"
            />
          </Column>
          <Column
            isColumn
            small={12}
            medium={12}
            large={12}
            centerOnSmall
            className={styles.buttonWrapper}
          >
            <RaisedButton
              disabled={isLoading}
              className={styles.button}
              onClick={handleSubmit}
            >
              Submit
            </RaisedButton>
          </Column>
        </Column>
      </Row>
    );
  }
}

StopsInputs.propTypes = {
  selectedDepartureStation: PropTypes.string,
  handleSelectDeparture: PropTypes.func.isRequired,
  selectedArrivalStation: PropTypes.string,
  handleSelectArrival: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default cssModules(StopsInputs);
