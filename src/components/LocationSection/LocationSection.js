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
            <div className="container" id={this.props.id}>
              <div className="row">
              <br />
                <h1 className='text-center'>ЯК НАС ЗНАЙТИ?</h1>
                <br />
                <Location  />
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default LocationSection;
