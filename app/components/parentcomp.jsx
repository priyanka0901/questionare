'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Quizpage from './quizpage.jsx';
import Scorepage from './scorepage.jsx';
import Homepage from './homepage.jsx';


class AppContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: '',
            userValue: {}
        };
        this.handleUserName = this.handleUserName.bind(this);
        this.passUserAns= this.passUserAns.bind(this);
  }

  handleUserName(value) {
        this.setState({ userName: value });
  }

  passUserAns(val) {
        this.setState({ userValue: val });
    }
 
  render () {
    return (
      <Router history={hashHistory}>  
          <Route path='/' component={() =>(<Homepage handleUserName={this.handleUserName} />)} />
          <Route path='/quizpage' component={() =>(<Quizpage passUserAns={this.passUserAns}/>)} />
          <Route path='/scorepage' component={() => (<Scorepage userName={this.state.userName} userValue={this.state.userValue} />)}/>
      </Router>
    );
  }
}

export default AppContainer;
