import React from 'react';
import Indicator from 'material-ui/RefreshIndicator';
import styles from './RefreshIndicator.module.scss';
import cssModules from 'react-css-modules';

const RefreshIndicator = () => (
  <div className={styles.container}>
    <Indicator
      className={styles.refresh}
      size={60}
      left={-10}
      top={0}
      status="loading"
    />
  </div>
);

export default cssModules(RefreshIndicator, styles);
