import styles from './Location.scss';

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
        <div className={styles.location}>
              <div className={styles.map}>
                <MapContainer/>
              </div>
              <div className={styles.adress}> 
                <div >
                <Address />
                </div>
          </div>
        </div>
      );
    }
  }
  
  export default Location;
