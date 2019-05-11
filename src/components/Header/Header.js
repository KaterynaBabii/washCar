import styles from './Header.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">S.P.A Auto</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#">Головна</a></li>
            <li><a href="#">Сервіс/Послуги</a></li>
            <li><a href="#">Розташування</a></li>
            {/* <li><Link to="#with-hash-fragment">Link to Hash Fragment</Link></li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
