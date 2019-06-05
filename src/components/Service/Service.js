import './Service.scss';

import React, {Component} from 'react';

const Service = () => (
  <div>
      <div className="row">
          <div className="col-xs-12 col-sm-6">
              <div className="service">
              <h3 className='text-center'>Легковий автомобіль</h3>
              <div className="row">
                <div className="col-sm-10">
                  <p>Мийка кузова</p>
                  <p>Комплексна мийка</p>
                  <p>Експрес мийка</p>
                  <p>Мийка двигуна</p>
                  <p>Натирання шкіри</p>
                </div>
                <div className="col-sm-2">
                  <p>160</p>
                  <p>200</p>
                  <p>80</p>
                  <p>100</p>
                  <p>80</p>
                </div>
              </div> 
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="service">
              <h3 className='text-center'>Позашляховик/Кросовер</h3>
              <div className="row">
                <div className="col-sm-10">
                  <p>Мийка кузова</p>
                  <p>Комплексна мийка</p>
                  <p>Експрес мийка</p>
                  <p>Мийка двигуна</p>
                  <p>Натирання шкіри</p>
                </div>
                <div className="col-sm-2">
                  <p>170</p>
                  <p>220</p>
                  <p>90</p>
                  <p>100</p>
                  <p>90</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="service">
                <h3 className='text-center'>Мікроавтобус</h3>
                <div className="row">
                <div className="col-sm-10">
                  <p>Мийка кузова</p>
                  <p>Комплексна мийка</p>
                  <p>Експрес мийка</p>
                  <p>Мийка двигуна</p>
                  <p>Натирання шкіри</p>
                </div>
                <div className="col-sm-2">
                  <p>180</p>
                  <p>230</p>
                  <p>110</p>
                  <p>100</p>
                  <p>100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="service">
              <h3 className='text-center'>Додаткові послуги</h3>
              <div className="row">
                <div className="col-sm-8">
                  <p>Чистка килимів</p>
                  <p>Воскування</p>
                  <p>Хімчистка</p>
                </div>
                <div className="col-sm-4">
                  <p>30грн/м2</p>
                  <p>500</p>
                  <p>300</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
);

export default Service;
