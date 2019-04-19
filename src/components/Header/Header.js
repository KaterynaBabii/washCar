import styles from './Header.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {

    return (
      <nav className="styles.header navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#">Головна</a></li>
            <li><a href="#">Мийка</a></li>
            <li><a href="#">Ціни</a></li>
            <li><a href="#">Розташування</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
