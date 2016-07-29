import React, { PropTypes } from 'react';
import styles from './ComponentLoadingIndicator.module.scss';
import cssModules from 'react-css-modules';
import {
  UdacityLogoIcon,
  RefreshIndicator
} from 'components';

const ComponentLoadingIndicator = ({
  funMode
}) => (
  <div className={styles.container}>
    {!funMode || typeof funMode === 'undefined' ?
      <RefreshIndicator />
    :
      <UdacityLogoIcon className="icon icon-big spin" />
    }
  </div>
);

ComponentLoadingIndicator.propTypes = {
  funMode: PropTypes.bool
};

export default cssModules(ComponentLoadingIndicator, styles);
