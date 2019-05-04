import styles from './styles/main.scss';
import styl from './App.scss';

import React, {Component, Fragment} from 'react';
import FancyButton from "./fancy-button/fancy-button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import LocationSection from './components/LocationSection/LocationSection'

class App extends Component {
  render() {
    return (
      <div className={styl.app}>
        <header className={styl.app_header}>
          <Header/>
        </header>

        <div className={styl.app_content}>
        <FancyButton />
          {/* <Button label="Regular Button"/> */}
          <LocationSection />
          <FancyButton />           
        </div>

        <footer className={styl.app_footer}>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
