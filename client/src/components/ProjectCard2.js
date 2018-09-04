import React, { Component } from 'react';
import '../css/ProjectCard.css';
import '../css/page.css';

import 'font-awesome/css/font-awesome.min.css';

class ProjectCard2 extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      id: props.id,
      likes: props.likes,
      icon: props.details.icon,
      title: props.details.title,
      position: props.details.position,
      description: props.details.description,
      date: props.details.date,
      link: props.details.link,
      color: props.details.color,
      addLike: props.addLike
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({likes: nextProps.likes});
  }

  render() {
    let link = this.state.link !== null ?   <a href={this.state.link} className="card-link" target="_blank"><p>See GitHub</p></a> : null;
    let logo = <i className={this.state.icon + " logo2 fa-5x"}></i> ;
    let description = [];
    let pCount = 0;
    this.state.description.forEach((item) => {
      description.push(<p key={"project-description-"+pCount}>{item}</p>);
      pCount++;
    })

    return (
      <div className="card-wrapper" key={this.state.title}>
        <div className="card-container project-card" style={{backgroundImage: 'linear-gradient('+ this.state.color+' 0%, white 75%)'}}>
          <div className="likes" onClick={() => this.state.addLike(this.state.id)}>
            {this.state.likes}
            <i className="likon fa fa-thumbs-up"></i>
          </div>
          <div className="card-picture2">
            {logo}
            <h2 className="card-title">{this.state.title}</h2>
            <div className="date">
              {this.state.date}
            </div>
          </div>
          <div className="card-desc-container">
            <h4>
              {this.state.position}
            </h4>
            {description}
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard2;
