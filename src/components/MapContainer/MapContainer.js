import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

const mapStyles = {
  width: '60%',
  height: '90%'
};


export class MapContainer extends Component {
    render() {
      return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 49.8464244,
         lng: 24.024062
        }}
      >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Lalla</h1>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcT5s_ypKmLSNn6JR0zeIXeNi69-5t0gA'
  })(MapContainer)