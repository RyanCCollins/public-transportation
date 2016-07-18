import React from 'react';
import cssModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
import { TrainSearch, TrainSchedule } from 'containers';

const LandingPage = () => (
  <div className={styles.container}>
    <TrainSearch />
    <TrainSchedule />
  </div>
);

export default cssModules(LandingPage, styles);
