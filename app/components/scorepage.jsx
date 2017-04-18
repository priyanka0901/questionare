'use strict';

import React from 'react';
import jsonData from '../data/data.js';

var rightAnswer = 0;

class Scorepage extends React.Component {
    //handle user answer
    componentWillMount() {
        var radioValue = this.props.radioValue;
        for(var i = 0; i < 10; i++) {
            var ansindex = jsonData[i].rightans;
            if(radioValue[i + 1 + ''] == jsonData[i].options[ansindex]) {
                rightAnswer += 1;   
            }
        }
    }

    
    handleReQuiz() {
        window.location = "/#quizpage";
        location.reload();
    }

    render() {
        return (
            <div className ="scorepage__layout">
                <h1 className="scorepage__heading">Hello {this.props.username}</h1>
                <p className="scorepage__score">You scored {rightAnswer}/ out of 10 </p>
                <button type="submit" className="scorepage__button" onClick={this.handleReQuiz}>Re-take Quiz </button>
            </div>
        );
    }
}

export default Scorepage;