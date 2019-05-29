import './LocationSection.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from "../Location/Location";

class LocationSection extends Component {
    constructor (...args) {
      super(...args);
      this.state = {};
    }
  
    render () {
      return (
        <div className="locationSection">
          <h1 className="locat text-center">ЯК НАС ЗНАЙТИ?</h1>
          <div id={this.props.id} className="container"> 
              <div className="col-xs-12 col-sm-12">
                <Location  />
              </div>
          </div>
          </div>
      );
    }
  }
  
  export default LocationSection;
