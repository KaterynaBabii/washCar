import './ServiceSection.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Service from "../Service/Service";
//TODO
import Background from 'C:/Users/asus/Desktop/pasha/washCarService/src/images/test1.jpg';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

class ServiceSection extends Component {
    constructor (...args) {
      super(...args);
      this.state = {};
    }
  
    render () {
      return (
        <div style={ sectionStyle } className="serviceSection">
          <h1 className='service text-center'>ПОСЛУГИ</h1>
            <div id={this.props.id} className="container">
                <Service />
            </div>
          </div>
      );
    }
  }
  
  export default ServiceSection;
