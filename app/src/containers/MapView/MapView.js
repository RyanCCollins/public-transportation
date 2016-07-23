import React, { PropTypes } from 'react';
import styles from './MapView.module.scss';
import cssModules from 'react-css-modules';
import {
  GoogleMap,
  Marker,
  GoogleMapLoader
} from 'react-google-maps';

const MapView = ({
  markers,
  onPinClick,
  onMapClick
}) => (
  <section>
    <GoogleMapLoader
      containerElement={
        <div
          className={styles.container}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={3}
          defaultCenter={{ lat: 51.5074, lng: 0.1278 }}
          onClick={onMapClick}
        >
          {markers.map((marker, i) =>
            <Marker {...marker} onRightClick={onPinClick} />
          )}
        </GoogleMap>
      }
    />
  </section>
);

MapView.propTypes = {
  markers: PropTypes.array.isRequired,
  onMapClick: PropTypes.func.isRequired,
  onPinClick: PropTypes.func.isRequired
};

export default cssModules(MapView, styles);
