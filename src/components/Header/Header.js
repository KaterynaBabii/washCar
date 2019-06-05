import './Header.scss';

import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
class Header extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };


  render () {

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">S.P.A Auto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link eventKey={2} href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fs.p.a_auto%3Figshid%3D1fm85be6vw5vv%26fbclid%3DIwAR2IaBB6Yd1GAg2crbynBlTUeVux-o1SJLrO7ZJ1_udb9v8xvKKfTwZpInE&h=AT3b2lS21L0D5mDk37Fvi4ef5pXvUduMvkGmfv5Nvo0un1uyh8o-BqWxbsE8287OXql6qTbIEc4HqYwDu7cvw2Ciz4EY5SO6Y8XMVoaJt8hi-KyrWScYz3lg6OUjK42IXdSbxBdjNc3O" className="insta"><i className="fab fa-instagram"></i></Nav.Link> 
            </Nav>
          <Nav>

            <Navbar.Text className="links">
              <Link activeClass="active" to="main" spy={true} smooth={true} offset={-70} duration={500}>
              Головна
              </Link>
            </Navbar.Text>
            <Navbar.Text className="links">
              <Link activeClass="active" to="service" spy={true} smooth={true} offset={-70} duration={500}>
                Послуги
              </Link>
            </Navbar.Text>
            <Navbar.Text className="links">
              <Link activeClass="active" to="location" spy={true} smooth={true} offset={-70} duration={500}>
                Розташування
              </Link>
            </Navbar.Text>
            {/* <Nav.Link eventKey={2} href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fs.p.a_auto%3Figshid%3D1fm85be6vw5vv%26fbclid%3DIwAR2IaBB6Yd1GAg2crbynBlTUeVux-o1SJLrO7ZJ1_udb9v8xvKKfTwZpInE&h=AT3b2lS21L0D5mDk37Fvi4ef5pXvUduMvkGmfv5Nvo0un1uyh8o-BqWxbsE8287OXql6qTbIEc4HqYwDu7cvw2Ciz4EY5SO6Y8XMVoaJt8hi-KyrWScYz3lg6OUjK42IXdSbxBdjNc3O" className="insta"><i className="fab fa-instagram"></i></Nav.Link>   */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}
export default Header;
