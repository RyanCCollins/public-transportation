import React, { PropTypes } from 'react';
import { RouteParts } from 'components';
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
  <Card>
    <CardHeader
      title="More Info For Trip"
      subtitle={createSubtitle(item)}
    />
    <CardText>
      {`Confirm details of your trip departing at ${item.departure_time}.`}
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

export default MoreInfo;
