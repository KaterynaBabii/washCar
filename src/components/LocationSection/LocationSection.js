import styles from './LocationSection.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from "../Location/Location";

class LocationSection extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        <div className={styles.locationSection}>
            <div className="container">
              <div className="row">
              <br />
                <h1 className='text-center'>ЯК НАС ЗНАЙТИ?</h1>
                <br />
                <Location />
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default LocationSection;
