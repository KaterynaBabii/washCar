import './Address.scss';

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
        <div className="address">
            <h1>S.P.A Auto</h1>
            <p>
              Щоб до нас потрапити потрібно рухатися по вул. Джерельна, 
              після візового центру VFS Global перший поворот на 
              ліво на вул. Маєра Балабана, 26. Проїхати 30 км., повернути на ліво (паркінг).
               Ви на місці!
            </p>
            <br />
            <h5><b>Тел.:</b></h5>
            <a href="tel:+380638892716">+380638892716</a>
            <br /><br />
            <h5><b>Адрес:</b></h5>
            <p>м. Львів</p>
            <p>вул. Маєра Балабана, 26</p>
           
        </div>

      );
    }
  }
  
  export default Address;
