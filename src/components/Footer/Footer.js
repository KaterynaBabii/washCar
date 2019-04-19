import styles from './Footer.scss';

import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({className}) => (
  <div className={styles.footer}>
    <div className="container">
      <div className="col-sm-12">
        <div className={styles.content}>
          <span className={styles.text}>© 2019 Автомийка Львів</span>
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