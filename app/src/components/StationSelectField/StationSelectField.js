import React, { PropTypes } from 'react';
import {
  SelectField,
  MenuItem
} from 'material-ui';

const StationSelectField = ({
  value,
  onChange,
  stations
}) => (
  <SelectField
    value={value}
    onChange={onChange}
    floatingLabelText="Select an Arrival Train Station"
    fullWidth
    autoWidth
  >
    {stations.map((station, i) =>
      <MenuItem
        key={i}
        value={station.station_code}
        primaryText={station.name}
      />
    )}
  </SelectField>
);

StationSelectField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired
};

export default StationSelectField;
