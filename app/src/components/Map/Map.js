import React, { PropTypes } from 'react';
import styles from './Map.module.scss';
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
  <div>
    {markers.length > 0 ?
      <GoogleMapLoader
        query={{ libraries: 'geometry,drawing,places,visualization' }}
        containerElement={
          <div
            className={styles.container}
          />
        }
        googleMapElement={
          <div className={styles.mapContainer}>
            <h1 className={styles.containerTitle}>Map</h1>
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={6}
              defaultCenter={{ lat: 51.5074, lng: 0.1278 }}
              onClick={onMapClick}
            >
              {markers.map((marker, i) =>
                <Marker
                  {...marker}
                  key={i}
                  onRightClick={onPinClick}
                />
              )}
            </GoogleMap>
          </div>
        }
      />
    :
      <noscript />
    }
  </div>
);

MapView.propTypes = {
  markers: PropTypes.array.isRequired,
  onMapClick: PropTypes.func.isRequired,
  onPinClick: PropTypes.func.isRequired
};

export default cssModules(MapView, styles);
