import React, { PropTypes } from 'react';
import styles from './MapMarker.module.scss';
import cssModules from 'react-css-modules';

const MapMarker = () => (
  <div className={styles.marker} />
);

export default cssModules(MapMarker, styles);
