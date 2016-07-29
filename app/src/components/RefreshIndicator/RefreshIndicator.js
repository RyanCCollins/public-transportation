import React from 'react';
import Indicator from 'material-ui/RefreshIndicator';
import styles from './RefreshIndicator.module.scss';
import cssModules from 'react-css-modules';

const RefreshIndicator = () => (
  <div style={styles.container}>
    <Indicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={styles.refresh}
    />
  </div>
);

export default cssModules(RefreshIndicator, styles);
