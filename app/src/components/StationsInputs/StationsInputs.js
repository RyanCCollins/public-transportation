import React, { PropTypes } from 'react';
import { RaisedButton } from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';
import styles from './StationsInputs.module.scss';
import cssModules from 'react-css-modules';
import {
  StationSelectField
} from 'components';
import { MapView } from 'containers';

const StationsInputs = ({
  selectedDepartureStation,
  handleSelectDeparture,
  selectedArrivalStation,
  handleSelectArrival,
  stations,
  handleSubmit,
  isLoading,
  handleClear,
  mapMode,
  onMapClick,
  onMapPinClick
}) => (
  <Row>
    <Column small={12} medium={12} large={6}>
      <div className={styles.sectionHeader}>
        <h4>Train Station Selection</h4>
      </div>
      <Column
        isColumn
        small={12}
        medium={12}
        large={12}
        centerOnSmall
      >
        <StationSelectField
          value={selectedDepartureStation}
          onChange={handleSelectDeparture}
          stations={stations}
          whoAmI="Departure"
        />
      </Column>
      <Column
        className={styles.floatFix}
        isColumn
        small={12}
        medium={12}
        large={12}
        centerOnSmall
      >
        <StationSelectField
          value={selectedArrivalStation}
          onChange={handleSelectArrival}
          stations={stations}
          whoAmI="Arrival"
        />
      </Column>
    </Column>
    {mapMode ?
      <Column
        isColumn
        centerOnSmall
        small={12}
        medium={12}
        large={6}
      >
        <MapView
          isLoading={isLoading}
        />
      </Column>
    :
      <noscript />
    }
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


StationsInputs.propTypes = {
  selectedDepartureStation: PropTypes.string,
  handleSelectDeparture: PropTypes.func.isRequired,
  selectedArrivalStation: PropTypes.string,
  handleSelectArrival: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired,
  mapMode: PropTypes.bool.isRequired,
  onMapClick: PropTypes.func.isRequired,
  onMapPinClick: PropTypes.func.isRequired
};

export default cssModules(StationsInputs);
