import React, { PropTypes, Component } from 'react';
import styles from './MapView.module.scss';
import cssModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Map } from 'components';

class MapView extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleChildMouseEnter = this.handleChildMouseEnter.bind(this);
    this.handleChildMouseLeave = this.handleChildMouseLeave.bind(this);
    this.handleChildMouseClick = this.handleChildMouseClick.bind(this);
    this.parseMarkerItem = this.parseMarkerItem.bind(this);
  }
  handleChange() {
    console.log('Calling handleChange in map container');
  }
  handleChildMouseEnter() {
    console.log('Calling handleChildMouseEnter in map container');
  }
  handleChildMouseLeave() {
    console.log('Calling handleChildMouseLeave in map container');
  }
  handleChildMouseClick() {
    console.log('Calling handleChildMouseClick in map container');
  }
  parseMarkerItem(item) {
    return {
      position: {
        lat: item.latitude,
        lng: item.longitude
      },
      key: item.station_code
    };
  }
  render() {
    const {
      stations,
      apiKey
    } = this.props;
    return (
      <section>
        <Map
          {...this.props}
          onChange={this.handleChange}
          apiKey={apiKey}
          onChildClick={this.handleChildMouseClick}
          onChildMouseEnter={this.handleChildMouseEnter}
          onChildMouseLeave={this.handleChildMouseLeave}
          markers={
            stations.map(item => this.parseMarkerItem(item))
          }
        />
      </section>
    );
  }
}

MapView.propTypes = {
  stations: PropTypes.array.isRequired,
  apiKey: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  stations: state.stations.items,
  apiKey: state.settings.map.apiKey
});

const StyledComponent = cssModules(MapView, styles);

export default connect(
  mapStateToProps
)(StyledComponent);
