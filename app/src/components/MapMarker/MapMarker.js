import React, { PropTypes } from 'react';
import styles from './MapMarker.module.scss';
import cssModules from 'react-css-modules';

const MapMarker = ({
  text,
  isSelected
}) => (
  <div className="marker">
    <div className={styles.markerHolder}>
      <div className="pin-wrapper">
        <div className={isSelected ? 'pin selected bounce' : 'pin'} />
        <div className={isSelected ? 'pulse' : ''} />
      </div>
      <div className="popover above">
        <h4 className={styles.centerBig}>{text}</h4>
      </div>
    </div>
  </div>
);

MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default cssModules(MapMarker, styles);
