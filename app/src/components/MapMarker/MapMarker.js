import React, { PropTypes } from 'react';
import styles from './MapMarker.module.scss';
import cssModules from 'react-css-modules';
import {
  FaMapMarker
} from 'react-icons/lib/fa';

const MapMarker = ({
  text,
  onSelectDeparture,
  onSelectArrival
}) => (
  <div className="marker">
    <div className={styles.markerHolder}>
      <FaMapMarker className={styles.marker} />
      <div className="popover above">
        <p>{text}</p>
        <button onClick={onSelectDeparture}>
          Departure
        </button>
        <button onClick={onSelectArrival}>
          Arrival
        </button>
      </div>
    </div>
  </div>
);

MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
  onSelectDeparture: PropTypes.func.isRequired,
  onSelectArrival: PropTypes.func.isRequired
};

export default cssModules(MapMarker, styles);
