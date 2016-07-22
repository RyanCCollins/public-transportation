import React, { PropTypes } from 'react';
import { FaCog } from 'react-icons/lib/fa';
import styles from './ComponentLoadingIndicator.module.scss';
import cssModules from 'react-css-modules';

const EmojiLoader = ({
  value
}) => (
  <i className="icon icon-big spin spin__fast">{value}</i>
);

EmojiLoader.propTypes = {
  value: PropTypes.string.isRequired
};

const ComponentLoadingIndicator = ({
  funMode
}) => (
  <div className={styles.container}>
    {!funMode || typeof funMode === 'undefined' ?
      <FaCog className="icon icon-big spin" />
    :
      <EmojiLoader value={'⚔'} />
    }
  </div>
);

ComponentLoadingIndicator.propTypes = {
  funMode: PropTypes.bool
};

export default cssModules(ComponentLoadingIndicator, styles);
