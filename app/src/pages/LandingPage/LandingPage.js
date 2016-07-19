import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { SelectStops, TrainSchedule, SelectRoute } from 'containers';
import {
  Paper
} from 'material-ui';

const Header = ({
  text
}) => (
  <div className={styles.header}>
    <h4 className="centered">
      {text}
    </h4>
  </div>
);

const LandingPage = () => (
  <div className={styles.container}>
    <Paper className={styles.fillScreen} zDepth={2}>
      <Header text="Washington Metro Train Schedule" />
      <SelectRoute />
      <SelectStops />
      <TrainSchedule />
    </Paper>
  </div>
);

export default cssModules(LandingPage, styles);
