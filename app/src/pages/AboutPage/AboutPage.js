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
      <h1>About</h1>
      <img src="http://www.eurail.com/sites/eurail.com/files/tgv_high-spped_train_france.jpg" />
    </Column>
  </Row>
);

export default cssModules(AboutPage, styles);
