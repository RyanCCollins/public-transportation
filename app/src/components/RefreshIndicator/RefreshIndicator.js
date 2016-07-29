import React from 'react';
import Indicator from 'material-ui/RefreshIndicator';
import styles from './RefreshIndicator.module.scss';
import cssModules from 'react-css-modules';

const RefreshIndicator = () => (
  <div className={styles.container}>
    <Indicator
      size={60}
      left={0}
      top={0}
      status="loading"
      className={styles.refresh}
    />
  </div>
);

export default cssModules(RefreshIndicator, styles);
