import './Address.scss';

import React from 'react';

const Address = () => (
  <div className="address">
      <h3>S.P.A Auto</h3>
      <p>
        Щоб до нас потрапити потрібно рухатися по вул. Джерельна, 
        після візового центру VFS Global перший поворот на 
        ліво на вул. Маєра Балабана, 26. Проїхати 30 км., 
        повернути на ліво (паркінг).Ви на місці!
      </p>
      <div className="address-phone">
        <h5><b>Тел.:</b></h5>
        <a href="tel:+380638892716">+380638892716</a>
      </div>
      <div>
        <h5><b>Адрес:</b></h5>
        <p>м. Львів</p>
        <p>вул. Маєра Балабана, 26</p>
      </div>
  </div>
);
export default Address;
