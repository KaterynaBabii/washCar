import './Home.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Background from 'C:/Users/asus/Desktop/pasha/washCarService/src/images/drop.jpg';
import {Carousel, Item, Caption} from 'react-bootstrap';


class Home extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      render() {
        const { index, direction } = this.state;
        
        return (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="caroselImg d-block w-100"
                src={Background}
                alt="First slide"
              />
              <Carousel.Caption>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h3>м. Львів</h3>
                  <h3>М.Балабана 26</h3>
                  <br/>
                  <h5>Графік роботи:</h5>
                  <h5>9:00 - 00:00</h5>
                  <h5>Без вихідних</h5>
                  <br/>
                  <h3>+380638892716</h3>
                  <br/><br/>
                </div>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="caroselImg d-block w-100"
                src={Background}
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <div className="row">
                <div className="col-xs-12 col-sm-6">

                </div>
                <div className="col-xs-12 col-sm-6">
                  <h3>S.P.A Auto</h3>
                  <p className='desc'>Щоб до нас потрапити потрібно рухатися 
                  по вул. Джерельна, після візового центру VFS Global 
                  перший поворот на ліво на вул. Маєра Балабана, 26.
                  Проїхати 30 км., повернути на ліво (паркінг).
                  Ви на місці!</p>
                </div>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
    }
  export default Home;
