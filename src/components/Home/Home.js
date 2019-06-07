import './Home.scss';

import React, {Component} from 'react';
import Background from '../../images/drop.jpg';
import car from '../../images/car.jpg';

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
          <div id={this.props.id} className="carousel-section">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect} >
            <Carousel.Item>
              <img className="caroselImg d-block w-100" src={Background} alt="First slide" />
              <Carousel.Caption>
              <div className="row carouselBlock">
                <div className="col-xs-12 col-sm-6 desc-img">
                  <img className="carWash d-block" src={car} alt="First image" />
                </div>
                <div className="col-xs-12 col-sm-6 desc">
                  <h3>м. Львів</h3>
                  <h3>М. Балабана 26</h3>
                  <div className="">
                    <p>Графік роботи:</p>
                    <p>9:00 - 00:00</p>
                    <p>Без вихідних</p>
                    <p><a className="phone-num" href="tel:+380638892716">+380638892716</a></p>
                  </div>
                </div>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="caroselImg d-block w-100" src={Background} alt="Second slide" />
              <Carousel.Caption>
              <div className="row">
                <div className="col-xs-12 col-sm-6 desc-img">
                  <img  className="carWash d-block" src={car} alt="Second image" />
                </div>
                <div className="col-xs-12 col-sm-6 desc">
                  <h3>S.P.A Auto</h3>
                  <p>Щоб до нас потрапити потрібно рухатися 
                  по вул. Джерельна, після візового центру VFS Global 
                  перший поворот на ліво на вул. Маєра Балабана, 26.
                  Проїхати 30 км., повернути на ліво (паркінг).
                  Ви на місці!</p>
                </div>
              </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        );
      }
    }
  export default Home;
