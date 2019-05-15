import './Footer.scss';

import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({className}) => (
  <div className="footer">
    <div className="container">
      <div className="col-sm-12">
        <div className="content">
          <span className="text">© 2019 Автомийка Львів</span>
        </div>
      </div>
    </div>
   </div>
);

Footer.propTypes = {
  className: PropTypes.string
};
Footer.defaultProps = {
  className: ''
};

export default Footer;