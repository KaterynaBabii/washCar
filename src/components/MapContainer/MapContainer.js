import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

const mapStyles = {
  width: '90%',
  height: '90%'
};


export class MapContainer extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this)
  }
 

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
    

  onClose (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render() {
      return (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
            lat: 49.847084,
            lng: 24.021313
          }}
          >
          <Marker
            onClick={this.onMarkerClick}
            name={'S.P.A Auto'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
          </InfoWindow>
          </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcT5s_ypKmLSNn6JR0zeIXeNi69-5t0gA'
  })(MapContainer)