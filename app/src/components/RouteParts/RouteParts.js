import React, { PropTypes } from 'react';
import {
  Divider,
  Subheader
} from 'material-ui';
import { List, ListItem } from 'material-ui/List';
import styles from './RouteParts.module.scss';
import cssModules from 'react-css-modules';
import moment from 'moment';

const TotalTime = ({
  from,
  to
}) => (
  <span className={styles.right}>
    <p>
      {
        moment
          .utc(moment(from, 'HH:mm:ss')
          .diff(moment(to, 'HH:mm:ss')))
          .format('HH:mm:ss')
      }
    </p>
  </span>
);

TotalTime.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

const capitalized = (what) =>
  `${what.charAt(0).toUpperCase()}${what.slice(1)}`;

const RoutePart = ({
  part
}) => (
  <ListItem
    primaryText={
      `${part.departure_time}
      - ${part.arrival_time}
      by ${capitalized(part.mode)}`
    }
    secondaryText={
      <p className={styles.fill}>
        {`From ${part.from_point_name} to ${part.to_point_name}`}
      </p>
    }
    secondaryTextLines={4}
  />
);

RoutePart.propTypes = {
  part: PropTypes.object.isRequired
};

const RouteParts = ({
  parts
}) => (
  <List>
    <Subheader>Route Parts</Subheader>
    {parts.map(p =>
      <div>
        <RoutePart part={p} />
        <Divider />
      </div>
    )}
  </List>
);

RouteParts.propTypes = {
  parts: PropTypes.array.isRequired
};

export default cssModules(RouteParts, styles);
