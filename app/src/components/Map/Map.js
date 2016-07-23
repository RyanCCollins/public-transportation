import React, { PropTypes } from 'react';
import styles from './Map.module.scss';
import cssModules from 'react-css-modules';
import {
  GoogleMap,
  Marker,
  GoogleMapLoader
} from 'react-google-maps';
import { ComponentLoadingIndicator } from 'components';

const MapView = ({
  markers,
  onPinClick,
  onMapClick,
  isLoading
}) => (
  <div>
    {!isLoading && markers.length > 0 ?
      <GoogleMapLoader
        query={{ libraries: 'geometry,drawing,places,visualization' }}
        containerElement={
          <div
            {...this.props}
            className={styles.container}
          />
        }
        googleMapElement={
          <div className={styles.mapContainer}>
            <h1 className={styles.containerTitle}>Map</h1>
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={3}
              defaultCenter={{ lat: 51.4802, lng: -0.0193 }}
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
    {isLoading ?
      <ComponentLoadingIndicator />
    :
      <noscript />
    }
  </div>
);

MapView.propTypes = {
  markers: PropTypes.array.isRequired,
  onMapClick: PropTypes.func.isRequired,
  onPinClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default cssModules(MapView, styles);
