import React, { PropTypes } from 'react';
import {
  SelectField,
  MenuItem
} from 'material-ui';

const StationSelectField = ({
  value,
  onChange,
  stations,
  whoAmI
}) => (
  <SelectField
    value={value}
    onChange={onChange}
    floatingLabelText={`Select a ${whoAmI} Train Station`}
    floatingLabelFixed={false}
    fullWidth
    autoWidth
  >
    {stations.map((station, i) =>
      <MenuItem
        key={i}
        label={`${station.name} - ${station.station_code}`}
        value={station.station_code}
        primaryText={station.name}
      />
    )}
  </SelectField>
);

StationSelectField.propTypes = {
  whoAmI: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  stations: PropTypes.array.isRequired
};

export default StationSelectField;
