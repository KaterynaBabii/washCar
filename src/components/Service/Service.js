import './Service.scss';

import React, {Component} from 'react';

class Service extends Component {
    constructor (props) {
      super(props);
      this.state = {};
    }
  
    render () {
      return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <div className="service">
                      <h3 className='text-center'>Комплексна мийка легкового авто</h3>
                      <p>Vacuum and hand wash</p>
                      <p>Hand dry w 'micro-fiber' towels</p>
                      <p>Clean windows</p>
                      <p>Light wipe down of dash & tire dressing</p>
                      <p>Професійна сучасна 3х-етапна чистка та сушка килимів.
                        Килими чисті та дезинфіковані. Безпечна - німецька сертифікована хімія.
                        Прцаює Доставка. Термін виконання 3 дні.</p>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6">
                  <div className="service">
                    <h3 className='text-center'>Комплексна мийка кросовера </h3>
                    <p>Хімчистка салону авто</p>
                    <p>Hand dry w 'micro-fiber' towels</p>
                    <p>Clean windows</p>
                    <p>Light wipe down of dash & tire dressing</p>
                  </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="service">
                      <h3 className='text-center'>Хімчистка килимів</h3>
                      <p>Професійна сучасна 3х-етапна чистка та сушка килимів.
                        Килими чисті та дезинфіковані. Безпечна - німецька сертифікована хімія.
                        Прцаює Доставка. Термін виконання 3 дні. Професійна сучасна 3х-етапна чистка та сушка килимів.
                        Килими чисті та дезинфіковані. Безпечна - німецька сертифікована хімія.
                        Прцаює Доставка. Термін виконання 3 дні. </p>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6">
                  <div className="service">
                    <h3 className='text-center'>Додаткові послуги</h3>
                    <p>Vacuum and hand wash</p>
                    <p>Hand dry w 'micro-fiber' towels</p>
                    <p>Clean windows</p>
                    <p>Light wipe down of dash & tire dressing</p>
                  </div>
                </div>
            </div>
            
        </div>
      );
    }
  }
  
  export default Service;
