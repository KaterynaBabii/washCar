import './styles/main.scss';
import './App.scss';

import React, {Component, Fragment} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LocationSection from './components/LocationSection/LocationSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app_header">
          <Header/>
        </header>
        
        <div className="app_content">
          <Home id="main"/>
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
