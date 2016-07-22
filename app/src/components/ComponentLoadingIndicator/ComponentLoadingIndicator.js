import React from 'react';
import { FaCog } from 'react-icons/lib/fa';
import styles from './ComponentLoadingIndicator.module.scss';
import cssModules from 'react-css-modules';

const ComponentLoadingIndicator = () => (
  <div className={styles.container}>
    <FaCog className="icon icon-big spin" />
  </div>
);

export default cssModules(ComponentLoadingIndicator, styles);
