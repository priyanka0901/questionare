'use strict';

import React from 'react';
import Quizpage from './quizpage.jsx';
import Scorepage from './scorepage.jsx';
import Homepage from './homepage.jsx';

var userValue = {};
var Username;

class QuizAns extends React.Component {
    passUserAns(val) {
        userValue = val;
    }
    render() {
        return (
            <div className="quizscore__layout">
                <Quizpage passUserAns={this.passUserAns} />
            </div>
        );
    }
}

class UserScore extends React.Component {
    render() {
        return (
            <div>
                <Scorepage radioValue={userValue} username={Username}/>
            </div>
        )
    }
}

class UserName extends React.Component {
    handleUserName(value) {
        Username = value;
        console.log(Username);
    }
    render() {
        return (
            <div>
                <Homepage handleUserName={this.handleUserName} />
            </div>
        )
    }
}


export {QuizAns, UserScore, UserName};