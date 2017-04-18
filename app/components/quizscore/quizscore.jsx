'use strict';

import React from 'react';
import Quizpage from './quizpage.jsx';
import Scorepage from './scorepage.jsx';

var userValue = {};

class QuizScore extends React.Component {
    passUserAns(val) {
        console.log('hello');
        userValue = val;
    }

    render() {
        return (
            <div className="quizscore__layout">
            <Quizpage  passUserAns={this.passUserAns} />
            <Scorepage radioValue={userValue}/>
            </div>
        );
    }
}

export default QuizScore;