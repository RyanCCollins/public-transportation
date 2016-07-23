import React, { PropTypes, Component } from 'react';
import styles from './MapView.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'components';

const parseMarker = (item) => ({
  position: {
    lat: item.latitude,
    lng: item.longitude
  },
  key: item.station_code,
  defaultAnimation: 2
});

class MapView extends Component {
  render() {
    const {
      stations
    } = this.props;
    return (
      <section>
        <Map
          markers={
            stations.map(item => parseMarker(item))
          }
        />
      </section>
    );
  }
}

MapView.propTypes = {
  stations: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  stations: state.stations.items
});

const StyledComponent = cssModules(MapView, styles);

export default connect(
  mapStateToProps
)(StyledComponent);
