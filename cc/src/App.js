import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./components/Content";
import Person from "./components/Person";
import RefComponent from "./components/RefComponent";
import CounterButton from "./components/CounterButton";
import SvgComponent from "./components/SvgComponent";
import LocalStorage from "./components/LocalStorage";
import axios from "axios";
import UserMedia from "./components/UserMedia";
import Csstransition from "./components/Csstransition";
import ParentComponent from "./components/PropTypes/parent/ParentComponent";
import View1 from "./components/View1";
import View2 from "./components/View2";
import MotionComponent from "./components/MotionComponent";
import { Route, BrowserRouter, Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
import MainComponent from "./components/HOC/Main";
class App extends Component {
  render() {
    axios
      .get("https://api.github.com/users/KimberlyZou")
      .then(res => res.data)
      .then(res => console.log(res.login));

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <MainComponent />
          {/* <Content />
        <Person />
        <RefComponent />
        <CounterButton />
        <SvgComponent /> */}
          {/* <p>-------------------------------</p>
        <LocalStorage />
        <p>-------------------------------</p>
        <UserMedia /> */}
          {/* <Csstransition /> */}
          <ParentComponent />
          <MotionComponent />
          <div>
            <Link to="View1">View1</Link>
            <Link to="View2">View2</Link>
          </div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={300}
          >
            <Route path="/View1" component={() => <View1 />} />
            <Route path="/View2" component={() => <View2 />} />
          </ReactCSSTransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
