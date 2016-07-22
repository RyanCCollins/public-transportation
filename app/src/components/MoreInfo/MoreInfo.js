import React, { PropTypes } from 'react';
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui';

const MoreInfo = ({
  item
}) => (
  <Card>
    <CardHeader
      title="More Info For Trip"
      subtitle={`From ${item.orgin_name} to ${item.destination_name}`}
    />
    <CardText>
      {`Confirm details of your trip departing in ${item.aimed_departure_time} minutes.`}
    </CardText>
  </Card>
);

MoreInfo.propTypes = {
  item: PropTypes.object.isRequired
};

export default MoreInfo;
