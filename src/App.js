import styles from './styles/main.scss';
import styl from './App.scss';

import React, {Component, Fragment} from 'react';
import FancyButton from "./fancy-button/fancy-button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import LocationSection from './components/LocationSection/LocationSection';
import ServiceSection from './components/ServiceSection/ServiceSection';

// import { HashLink } from "react-router-hash-link";

// import { HashLink } from "react-router-hash-link";

// <HashLink to="/my-cool-page#my-cool-section">Goto Cool Section</HashLink>

// <div id="my-cool-section">The coolest</div>

class App extends Component {
  render() {
    return (
      <div className={styl.app}>
        <header className={styl.app_header}>
          {/* <HashLink to="/my-cool-page#my-cool-section">Goto Cool Section</HashLink> */}
          <Header/>
        </header>

        <div className={styl.app_content}>
        <FancyButton />
          {/* <Button label="Regular Button"/> */}
          <ServiceSection />
          {/* <div id="my-cool-section">The coolest</div> */}
          <LocationSection />
        </div>

        <footer className={styl.app_footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
