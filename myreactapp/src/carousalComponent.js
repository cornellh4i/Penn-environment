import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";
import billPage from "./billPage"
import { Link } from "react-router-dom";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class CarouselComponent extends React.Component {

  constructor() {
    super();
    this.state = { data: [] };
    fetch("http://localhost:3001/showall")
      .then(data => data.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    return (
      <div className="App">
        <Carousel breakPoints={breakPoints} style={{marginBottom: "3%"}}>
          {this.state.data.map((stateInfo, index) => (
            <Item>
              <Link to={{
                pathname: "/bill",
                state: { data: stateInfo }
              }}>
                <div className="billCard">
                  <div className="bill">
                    <h2 className="senateBillText">Bill {stateInfo.bill_number}</h2>
                    <p className="referred"> Referred to as {stateInfo.bill_name}</p>
                    <p className="introduced">Introduced on {stateInfo.bill_intro_date}</p>
                  </div>
                  <div className="billImg">
                  </div>
                </div>
              </Link>
            </Item>
          ))}
          {this.state.data.map((stateInfo, index) => (
            <Item>
              <Link to={{
                pathname: "/bill",
                state: { data: stateInfo }
              }}>
              <div className="billCard">
                <div className="bill">
                  <h2 className="senateBillText">Bill {stateInfo.bill_number}</h2>
                  <p className="referred"> Referred to as {stateInfo.bill_name}</p>
                  <p className="introduced">Introduced on {stateInfo.bill_intro_date}</p>
                </div>
                <div className="billImg">
                </div>
              </div>
              </Link>
            </Item>
          ))}

        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
