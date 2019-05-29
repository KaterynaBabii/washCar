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
