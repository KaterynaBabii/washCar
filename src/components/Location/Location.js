// import styles from './Location.scss';

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import MapContainer from "../MapContainer/MapContainer";


class Location extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        // <div className="container">
        //     <div className="row">
                <MapContainer />
        //     </div>
        // </div>

      );
    }
  }
  
  export default Location;