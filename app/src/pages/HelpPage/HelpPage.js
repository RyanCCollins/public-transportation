import React, { PropTypes } from 'react';
import styles from './HelpPage.module.scss';
import cssModules from 'react-css-modules';
import {
  Column,
  Row
} from 'react-foundation';

const HelpPage = () => (
  <Row>
    <Column small={12} medium={12} large={12} className={styles.outer}>
      <Column small={12} medium={8} large={6} className={styles.inner}>
        <h4>Public Transportation App</h4>
        <p>This app was made to demonstrate utilizing service worker to making offline first web applications</p>
        <p>If was made as project 2 to the senior web nanodegree</p>
        <p>Made by <a href="https://www.ryancollins.io">Ryan Collins</a></p>
      </Column>
      <Column small={12} medium={4} large={6}>
        <img
          alt="Big train"
          className="img-responsive"
          src="http://www.eurail.com/sites/eurail.com/files/tgv_high-spped_train_france.jpg"
        />
      </Column>
    </Column>
  </Row>
);

export default cssModules(HelpPage, styles);
