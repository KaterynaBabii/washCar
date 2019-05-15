import './Location.scss';

import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {Grid, Row} from 'react-bootstrap';

import MapContainer from "../MapContainer/MapContainer";
import FancyButton from "../../fancy-button/fancy-button";
import Address from "../Address/Address";

class Location extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        <div className="location">
              <div className="map">
                <MapContainer/>
              </div>
              <div className="adress"> 
                <div >
                <Address />
                </div>
          </div>
        </div>
      );
    }
  }
  
  export default Location;
