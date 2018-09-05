import React, { Component } from 'react';
import '../css/PersonalCard.css';

class PersonalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      descriptions: props.descriptions,
    };
  }

  renderDesc(){
    let desc = [];
    let descCount = 0;
    this.state.descriptions.forEach((d) => {
      desc.push(
        <div key={"personal-description-"+ descCount} className="inner-tab-container" >
          <div className="left-col">
            <h3>{d.subtitle}</h3>
            <p>{d.subdesc}</p>
            <a className="link" href={d.link} target="_blank">See video</a>
          </div>
          <div className="right-col">
            <p className="date">{d.date}</p>
          </div>
        </div>
      );
      descCount++;
    })


    return (
    <div className="personal-tab-container">
      <h1 className="personal-tab-title">{this.state.title}</h1>
      {desc}
    </div>);
  }

  render() {
    return this.renderDesc();
  }
}

export default PersonalCard;
