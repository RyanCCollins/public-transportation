import React, { PropTypes } from 'react';
import { FaCog } from 'react-icons/lib/fa';
import styles from './ComponentLoadingIndicator.module.scss';
import cssModules from 'react-css-modules';
import { UdacityLogoIcon } from 'components';

const ComponentLoadingIndicator = ({
  funMode
}) => (
  <div className={styles.container}>
    {!funMode || typeof funMode === 'undefined' ?
      <FaCog className="icon icon-big spin" />
    :
      <UdacityLogoIcon className="icon icon-big spin" />
    }
  </div>
);

ComponentLoadingIndicator.propTypes = {
  funMode: PropTypes.bool
};

export default cssModules(ComponentLoadingIndicator, styles);
