import React, { PropTypes } from 'react';
import styles from './MapMarker.module.scss';
import cssModules from 'react-css-modules';
import {
  FaMapMarker
} from 'react-icons/lib/fa';

const MapMarker = ({
  text
}) => (
  <div className="marker">
    <div className={styles.markerHolder}>
      <FaMapMarker className={styles.marker} />
      <div className="popover above">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default cssModules(MapMarker, styles);
