import React, { PropTypes, Component } from 'react';
import { RaisedButton } from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';
import styles from './StationsInputs.module.scss';
import cssModules from 'react-css-modules';
import { StationSelectField } from 'components';
import { MapView } from 'containers';

const NoSelectedRoute = () => (
  <div className={styles.noRoute}>
    <h4>No Selected Route</h4>
  </div>
);

const StopsInputs = ({
  selectedDepartureStation,
  handleSelectDeparture,
  selectedArrivalStation,
  handleSelectArrival,
  stations,
  handleSubmit,
  isLoading,
  handleClear
}) => (
  <Row>
    <Column small={12} medium={8} large={6}>
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
    </Column>
    <Column
      small={12}
      medium={4}
      large={6}
    >
      <MapView />
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
        style={{ width: 150, height: 50, color: 'white' }}
        primary
        onClick={handleSubmit}
      >
        SEARCH TRAINS
      </RaisedButton>
      <RaisedButton
        disabled={isLoading}
        style={{ width: 150, height: 50, color: 'white' }}
        secondary
        onClick={handleClear}
      >
        RESET
      </RaisedButton>
    </Column>
  </Row>
);


StopsInputs.propTypes = {
  selectedDepartureStation: PropTypes.string,
  handleSelectDeparture: PropTypes.func.isRequired,
  selectedArrivalStation: PropTypes.string,
  handleSelectArrival: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired
};

export default cssModules(StopsInputs);
