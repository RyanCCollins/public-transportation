import React, { PropTypes } from 'react';
import styles from './Header.module.scss';

const Header = ({
  text
}) => (
  <div className={styles.container}>
    <h4 className="centered">
      {text}
    </h4>
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
