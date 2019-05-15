import './Header.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };


  render () {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">S.P.A Auto</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <Link
                  activeClass="active"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                Головна
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Сервіс/Послуги
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Розташування
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
