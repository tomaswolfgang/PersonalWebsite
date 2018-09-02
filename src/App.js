import React, { Component } from 'react';
import ProjectCard from './components/ProjectCard.js';
import PersonalCard from './components/PersonalCard.js';
import ProjectCard2 from './components/ProjectCard2.js';
import './css/page.css';
import {TABS, TABINFO, PERSONALTAB} from './constants.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 0,
      sidebar:false,
    }
  }

  constructNav(){
    let navCont = [];
    for(var i = 0; i < TABS.length; i++){
      const tabNum = i;
      navCont.push(
        <h2 key={"tab-"+tabNum} className={this.state.tab === i ? " active nav-item": "nav-item"} onClick={() => this.changeTab(tabNum)}>{TABS[tabNum]}</h2>
      )
    }
    return (<div className="nav-strip">{navCont}</div>)
  }

  constructSideBar(){
    let sbCont = [];
    for(var i = 0; i < TABS.length; i++){
      const tabNum = i;
      sbCont.push(
        <h2 key={"sidetab-"+tabNum} className={this.state.tab === i ? "side-active side-item": "side-item"} onClick={() => {this.changeTab(tabNum);this.closeSidebar()}}>{TABS[tabNum]}</h2>
      );
    }

    return (
      <div className={ this.state.sidebar ? "sidebar-container": "sidebar-container sidebar-container-hidden"}>
        <div className="sidebar ">
          {sbCont}
        </div>
      </div>
    )
  }

  constructTab(index){
    let tabCont = [];
    let info = TABINFO[TABS[index]];
    let count = 0;
    if(TABS[index] === "Personal"){
      count = 0;
      PERSONALTAB.forEach((item) => {
        tabCont.push(
          <PersonalCard key={TABS[index]+"-"+count} title={item.title} descriptions={item.descriptions}/>
        );
        count++;
      });
      return (
        <div className="personal-container">
          {tabCont}
        </div>
      )
    }
    else if(TABS[index] === "Work"){
      count = 0;
      info.forEach((item) => {
        tabCont.push(<ProjectCard details={item}  key={TABS[index]+"-"+count}/>)
        count++;
      })
      return <div className="container">{tabCont}</div>;
    }
    else{
      count = 0;
      info.forEach((item) => {
        tabCont.push(<ProjectCard2 details={item}  key={TABS[index]+"-"+count} />);
        count++;
      })
      return <div className="container">{tabCont}</div>;
    }
  }

  openSidebar(){
    this.setState({
      sidebar: true
    });
  }

  closeSidebar(){
    this.setState({
      sidebar: false
    });
  }

  changeTab(index){
    this.setState({
      tab: index
    });
  }

  render() {
    return (
      <div className="app">
        {this.constructSideBar()}
        <div className={this.state.sidebar ? "overlay" : "overlay overlay-hidden"} onClick={() => this.closeSidebar()}></div>
        <div className="mobile-hamburger-container">
          <i className="mobile-hamburger fa fa-bars fa-3x" onClick={()=> this.openSidebar()}></i>
        </div>
        <header>
          <div className="text-container">
            <h1 className="title">Thomas Wong</h1>
            <h3 className="description">Developer, Dancer, Dreamer</h3>
          </div>
        </header>
        {this.constructNav()}
        {this.constructTab(this.state.tab)}
      </div>
    );
  }
}

export default App;
