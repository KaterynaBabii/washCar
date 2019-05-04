import React, {Component} from 'react';

import MapContainer from "../MapContainer/MapContainer";
import FancyButton from "../../fancy-button/fancy-button";


class Address extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        <div >
            <h1>Автомийка</h1>
            <h4><b>Телефон:</b></h4>
            <p>2345566754323456</p>
            <h4><b>Адрес:</b></h4>
            <p>м. Львів</p>
            <p>М.Балабана 26</p>
            
        </div>

      );
    }
  }
  
  export default Address;
