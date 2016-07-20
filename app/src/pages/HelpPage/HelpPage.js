import React, { PropTypes } from 'react';
import styles from './HelpPage.module.scss';
import cssModules from 'react-css-modules';
import {
  Column,
  Row
} from 'react-foundation';

const HelpPage = () => (
  <Row>
    <Column small={12} medium={12} large={12}>
      <h1 className="section-title">Help</h1>
    </Column>
  </Row>
);

export default cssModules(HelpPage, styles);
