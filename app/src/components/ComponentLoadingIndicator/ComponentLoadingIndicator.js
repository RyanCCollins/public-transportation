import React from 'react';
import { FaCog } from 'react-icons/lib/fa';
import styles from './ComponentLoadingIndicator.module.scss';
import cssModules from 'react-css-modules';

const ComponentLoadingIndicator = () => (
  <div className={styles.container}>
    <div className={styles.flexCenter}>
      <FaCog className="icon icon-big spin" />
    </div>
  </div>
);

export default cssModules(ComponentLoadingIndicator, styles);
