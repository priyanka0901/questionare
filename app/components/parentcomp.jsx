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
          <Route path='/' component={Homepage} handleUserName={this.handleUserName} />
          <Route path='/quizpage' component={Quizpage} passUserAns={this.passUserAns} />
          <Route path='/scorepage' component={() => (<Scorepage userName={this.state.userName} userValue={this.state.userValue} />)}/>
      </Router>
    );
  }
}

export default AppContainer;

// var userValue = {};
// var userName;

// class QuizAns extends React.Component {
//     passUserAns(val) {
//         userValue = val;
//     }
//     render() {
//         return (
//             <div className="quizscore__layout">
//                 <Quizpage passUserAns={this.passUserAns} />
//             </div>
//         );
//     }
// }

// class UserScore extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Scorepage radioValue={userValue} userName={userName}/>
//             </div>
//         );
//     }
// }

// class UserName extends React.Component {
//     handleUserName(username) {
//         userName = username;
//         console.log(userName);
//     }
//     render() {
//         return (
//             <div>
//                 <Homepage handleUserName={this.handleUserName} />
//             </div>
//         );
//     }
// }


// export {QuizAns, UserScore, UserName};

