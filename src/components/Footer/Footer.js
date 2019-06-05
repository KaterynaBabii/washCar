import './Footer.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({className}) => (
  <div className="footer">
    <div className="container">
    <div className="row">
      <div className="col-sm-2">
          <span className="logo">S.P.A Auto</span>
      </div>
      <div className="col-sm-8">
        <div className="content">
          <div className="text">м. Львів, вул. Балабана, 26 </div>
          <div><a className="text" href="tel:+380638892716">+380638892716</a></div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="content">
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fs.p.a_auto%3Figshid%3D1fm85be6vw5vv%26fbclid%3DIwAR2IaBB6Yd1GAg2crbynBlTUeVux-o1SJLrO7ZJ1_udb9v8xvKKfTwZpInE&h=AT3b2lS21L0D5mDk37Fvi4ef5pXvUduMvkGmfv5Nvo0un1uyh8o-BqWxbsE8287OXql6qTbIEc4HqYwDu7cvw2Ciz4EY5SO6Y8XMVoaJt8hi-KyrWScYz3lg6OUjK42IXdSbxBdjNc3O" className="insta"><i className="fab fa-instagram"></i></a>
        </div>
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