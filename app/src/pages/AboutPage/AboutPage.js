import React, { PropTypes } from 'react';
import styles from './AboutPage.module.scss';
import cssModules from 'react-css-modules';
import {
  Column,
  Row
} from 'react-foundation';

const AboutPage = () => (
  <Row>
    <Column small={12} medium={12} large={12}>
      <h1 className={styles.header}>About</h1>
      <Column small={12} medium={8} large={6}>
        <img
          alt="Big train"
          className="img-responsive"
          src="http://www.eurail.com/sites/eurail.com/files/tgv_high-spped_train_france.jpg"
        />
      </Column>
      <Column small={12} medium={4} large={6}>

      </Column>
    </Column>
  </Row>
);

export default cssModules(AboutPage, styles);
