import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import './map.css';


const lat = 5.3536;
const lon = -4.0012;

function MapComponent() {

    const defaultProps = {
        center: {
          lat: lat,
          lng: lon,
        },
        zoom: 11
      };

      const LocationPin = () => (
        <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
        </div>
      )
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDP3gcoIZACasIjr2_fETApGXWEKeh-qJc" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin />
          </GoogleMapReact>
        </div>
      );
}

export default MapComponent