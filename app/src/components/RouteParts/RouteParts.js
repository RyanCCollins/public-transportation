import React, { PropTypes } from 'react';
import {
  Divider,
  Subheader
} from 'material-ui';
import { List, ListItem } from 'material-ui/List';

const RoutePart = ({
  part
}) => (
  <ListItem
    primaryText={`${part.departure_time} - ${part.arrival_time}`}
    secondaryText={`From ${part.from_point_name} to ${part.to_point_name}`}
    secondaryTextLines={1}
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

export default RouteParts;
