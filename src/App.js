import './styles/main.scss';
import './App.scss';

import React, {Component, Fragment} from 'react';
import FancyButton from "./fancy-button/fancy-button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import LocationSection from './components/LocationSection/LocationSection';
import ServiceSection from './components/ServiceSection/ServiceSection';

import Home from './components/Home/Home';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app_header">
          <Header/>
        </header>

        <div className="app_content">
        
          <FancyButton id="main"/>
          <Home />
          <ServiceSection id="service"/>
          <LocationSection id="location"/>
        </div>

        <footer className="app_footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
