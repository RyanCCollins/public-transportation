import React, { PropTypes } from 'react';
import styles from './NoItemsFound.module.scss';
import cssModules from 'react-css-modules';

const NoItemsFound = ({
  itemName
}) => (
  <div className={styles.wrapper}>
    <h3>No {itemName} Found</h3>
    <p>Please try again later</p>
  </div>
);

NoItemsFound.propTypes = {
  itemName: PropTypes.string.isRequired
};

export default cssModules(NoItemsFound, styles);
