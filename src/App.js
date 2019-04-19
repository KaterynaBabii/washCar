import React, {Component, Fragment} from 'react';
import Button from "./button/button";
import styles from './styles/main.scss';
import FancyButton from "./fancy-button/fancy-button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import MapContainer from "./components/MapContainer/MapContainer";
import Location from "./components/Location/Location";

import styl from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styl.app}>
        <header className={styl.app_header}>
          <Header/>
        </header>
        <div className={styl.app_content}>
        
          {/* <Button label="Regular Button"/> */}
          <Location />
          {/* <FancyButton /> */}

            {/* <MapContainer /> */}
           
        </div>
        <footer className={styl.app_footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;


// М.Балабана 26