import React, { PropTypes, Component } from 'react';
import { FaCog } from 'react-icons/lib/fa';

const ComponentLoadingIndicator = () => (
  <div className="flex-center">
    <FaCog className="icon icon-big spin" />
  </div>
);

export default ComponentLoadingIndicator;
