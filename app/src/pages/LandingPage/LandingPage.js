import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { SelectStations } from 'containers';
import { Paper } from 'material-ui';
import { Header } from 'components';

const LandingPage = () => (
  <div className={styles.container}>
    <Paper className={styles.fillScreen} zDepth={2}>
      <div className={styles.hideForSmall}>
        <Header text="London Transit Scheduling" />
      </div>
      <SelectStations />
    </Paper>
  </div>
);

export default cssModules(LandingPage, styles);
