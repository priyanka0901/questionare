'use strict';

import React from 'react';
import questionData from '../data/data.js';

var rightAnswer = 0;

class Scorepage extends React.Component {
    //handle user answer
    componentWillMount() {
        var userValue = this.props.userValue;
        for(var i = 0; i < 10; i++) {
            if(userValue[i+1] === questionData[i].questid + questionData[i].rightans) {
                rightAnswer += 1;
            }
        }
    }


    handleReQuiz() {
        window.location = '/#quizpage';
        location.reload();
    }

    render() {
        return (
            <div className ="scorepage__layout">
                <h1 className="scorepage__heading">Hello {this.props.userName}</h1>
                <p className="scorepage__score">You scored {rightAnswer}/ out of 10 </p>
                <button type="submit" className="scorepage__button" onClick={this.handleReQuiz}>Re-take Quiz </button>
            </div>
        );
    }
}

export default Scorepage;
