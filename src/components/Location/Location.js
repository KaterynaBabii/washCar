import './Location.scss';

import React, {Component} from 'react';
import MapContainer from "../MapContainer/MapContainer";
import Address from "../Address/Address";

class Location extends Component {
    constructor (props) {
      super(props);
    }
  
    render () {
      return (
        <div className="location row" id={this.props.id}>
          <div className="map col-xs-12 col-sm-8">
            <MapContainer/>
          </div>
          <div className="adress col-xs-12 col-sm-4">
            <Address />
          </div>
        </div>
      );
    }
  }
  
  export default Location;
