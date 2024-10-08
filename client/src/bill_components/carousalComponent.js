import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import '../css/style.css';
import { Link } from 'react-router-dom';

//make sure the endpoint reflects whether app is hosted or no
var API_URL = 'https://ecobilltracker.herokuapp.com';
// if (process.env.PORT) {
//   API_URL = 'https://ecobilltracker.herokuapp.com';
// } else {
//   API_URL = 'http://localhost:3001';
// }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

//takes care of the carousel component of bills
class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    //fetch data from mongodb
    fetch(`${API_URL}/showall`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div className='App'>
        <Carousel breakPoints={breakPoints}>
          {this.state.data.map((stateInfo, index) => {
            //if the bill is featured, add it to the top carousel
            if (this.props.featured && stateInfo.featured) {
              return (
                <Item key={index}>
                  <Link
                    to={{
                      pathname: '/bill',
                      state: { data: stateInfo },
                    }}
                  >
                    <div id='billCard' className='billCard'>
                      <div className='bill' id='wrapper'>
                        <div id='billInfo'>
                          <h2 className='senateBillText'>
                            Senate Bill {stateInfo.bill_number}
                          </h2>
                          <h2 className='senatorName'>
                            Senator {stateInfo.bill_sponsor}
                          </h2>
                          <h2 className='introduced'>
                            Introduced on {stateInfo.bill_intro_date}
                          </h2>
                          <p className='referred'>
                            {' '}
                            Referred to as {stateInfo.bill_name}
                          </p>
                        </div>

                        <div id='wrapper'>
                          <p className='text'>
                            <div class='center'>
                              <u>Bill Summary</u> <br />
                              <br />
                              {stateInfo.bill_summary}
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className='billImg'></div>
                    </div>
                  </Link>
                </Item>
              );
            }
            //if bill is not featured, add all the bills on bottom carousel
            else if (!this.props.featured) {
              return (
                <Item key={index}>
                  <Link
                    to={{
                      pathname: '/bill',
                      state: { data: stateInfo },
                    }}
                  >
                    <div id='billCard' className='billCard'>
                      <div className='bill' id='wrapper'>
                        <div id='billInfo'>
                          <h2 className='senateBillText'>
                            Senate Bill {stateInfo.bill_number}
                          </h2>
                          <h2 className='senatorName'>
                            Senator {stateInfo.bill_sponsor}
                          </h2>
                          <h2 className='introduced'>
                            Introduced on {stateInfo.bill_intro_date}
                          </h2>
                          <p className='referred'>
                            {' '}
                            Referred to as {stateInfo.bill_name}
                          </p>
                        </div>

                        <div id='wrapper'>
                          <p className='text'>
                            <div class='center'>
                              <u>Bill Summary</u> <br />
                              <br />
                              {stateInfo.bill_summary}
                            </div>
                          </p>
                        </div>
                      </div>
                      <div className='billImg'></div>
                    </div>
                  </Link>
                </Item>
              );
            }
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
