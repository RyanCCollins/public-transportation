import React, { PropTypes } from 'react';
import styles from './StationsInputs.module.scss';
import cssModules from 'react-css-modules';
import { MapView } from 'containers';
import { StationSelectField } from 'components';
import {
  RaisedButton,
  FloatingActionButton
} from 'material-ui';
import {
  Column,
  Row
} from 'react-foundation';
import ContentClear from 'material-ui/svg-icons/content/clear';

const StationsInputs = ({
  selectedDepartureStation,
  handleSelectDeparture,
  selectedArrivalStation,
  handleSelectArrival,
  stations,
  handleSubmit,
  isLoading,
  mapMode,
  onClearStations
}) => (
  <Row>
    <Column small={12} medium={12} large={mapMode ? 6 : 12}>
      <div className={styles.sectionHeader}>
        <h4>Train Station Selection</h4>
      </div>
      <Column
        small={12}
        medium={12}
        large={12}
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
        small={12}
        medium={12}
        large={12}
      >
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
          style={{ width: 150, height: 50, color: 'white' }}
          primary
          disabled={selectedArrivalStation !== null &&
            selectedDepartureStation !== null
          }
          onClick={handleSubmit}
        >
          SEARCH TRAINS
        </RaisedButton>
        <FloatingActionButton
          onClick={onClearStations}
          disabled={!selectedArrivalStation && !selectedDepartureStation}
        >
          <ContentClear />
        </FloatingActionButton>
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
  mapMode: PropTypes.bool.isRequired,
  onClearStations: PropTypes.func.isRequired
};

export default cssModules(StationsInputs);
