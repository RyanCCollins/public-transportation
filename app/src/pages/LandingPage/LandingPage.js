import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { SelectStops, TrainSchedule, SelectRoute } from 'containers';
import {
  Paper
} from 'material-ui';

const LandingPage = () => (
  <div className={styles.container}>
    <Paper zDepth={2}>
      <SelectRoute />
      <SelectStops />
      <TrainSchedule />
    </Paper>
  </div>
);

export default cssModules(LandingPage, styles);
