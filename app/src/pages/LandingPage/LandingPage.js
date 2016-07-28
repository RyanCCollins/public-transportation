import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { SelectStations, TrainSchedule } from 'containers';
import { Paper } from 'material-ui';

const Header = ({
  text
}) => (
  <div className={styles.header}>
    <h4 className="centered">
      {text}
    </h4>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

const LandingPage = () => (
  <div className={styles.container}>
    <Paper className={styles.fillScreen} zDepth={2}>
      <Header text="London Transit Scheduling" />
      <SelectStations />
      <TrainSchedule />
    </Paper>
  </div>
);

export default cssModules(LandingPage, styles);
