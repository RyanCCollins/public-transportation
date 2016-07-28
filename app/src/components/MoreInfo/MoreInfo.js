import React, { PropTypes } from 'react';
import { RouteParts } from 'components';
import styles from './MoreInfo.module.scss';
import cssModules from 'react-css-modules';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui';

const createSubtitle = (item) =>
`From ${item.route_parts[0].from_point_name || 'Unknown'}
  to ${item.route_parts[item.route_parts.length - 1].to_point_name || 'Unknown'}`;

const MoreInfo = ({
  item
}) => (
  <Card style={{ overflow: 'scroll', height: '400px' }}>
    <CardHeader
      title={"More Info For Trip"}
      subtitle={createSubtitle(item)}
    />
    <CardText>
      <p className="center">
        {
          `Confirm details of your
          trip departing at
          ${item.departure_time}.`
        }
      </p>
      {item.route_parts.length > 0 ?
        <RouteParts parts={item.route_parts} />
      :
        <noscript />
      }
    </CardText>
  </Card>
);

MoreInfo.propTypes = {
  item: PropTypes.object
};

export default cssModules(MoreInfo, styles);
