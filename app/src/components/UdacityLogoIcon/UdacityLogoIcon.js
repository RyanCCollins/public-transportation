import React from 'react';
import UdacityLogo from './udacity-logo.png';
import styles from './UdacityLogoIcon.module.scss';
import cssModules from 'react-css-modules';

const UdacityLogoIcon = () => (
  <img
    src={UdacityLogo}
    alt="Udacity Logo"
    className="icon spin"
    className={styles.logo}
  />
);

export default cssModules(UdacityLogoIcon, styles);
