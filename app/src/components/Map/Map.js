import React, { PropTypes } from 'react';
import styles from './Map.module.scss';
import cssModules from 'react-css-modules';
import { ComponentLoadingIndicator, MapMarker } from 'components';
import GoogleMap from 'google-map-react';

const Map = ({
  markers,
  isLoading,
  onChildClick,
  onChange,
  onChildMouseEnter,
  onChildMouseLeave,
  apiKey
}) => (
  <div>
    {isLoading &&
      <ComponentLoadingIndicator />
    }
    {markers.length > 0 ?
      <div className={styles.container}>
        <h1 className={styles.containerTitle}>Map of Stations</h1>
        <div className={styles.mapContainer}>
          <GoogleMap
            center={{ lat: 51.491061, lng: 0.121394 }}
            zoom={11}
            className={styles.map}
            onChange={onChange}
            onChildClick={onChildClick}
            onChildMouseLeave={onChildMouseLeave}
            onChildMouseEnter={onChildMouseEnter}
            bootstrapURLKeys={{
              key: apiKey
            }}
          >
            {markers.map((item, i) =>
              <MapMarker
                key={i}
                isSelected={item.selected}
                {...item}
              />
            )}
          </GoogleMap>
        </div>
      </div>
    :
      <noscript />
    }
  </div>
);

Map.propTypes = {
  markers: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChildClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onChildMouseEnter: PropTypes.func,
  onChildMouseLeave: PropTypes.func,
  apiKey: PropTypes.string.isRequired
};

export default cssModules(Map, styles);
