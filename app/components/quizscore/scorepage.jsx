'use strict';

import React from 'react';
import jsonData from '../../data/data.js';


var rightAnswer;
class Scorepage extends React.Component {
    //handle user answer
    componentWillMount() {
        // console.log(this.props.radioValue);
        // for(var i = 0; i<=radioValue; i++) {
        //     if(radioValue[i] ===store.rightans.val) {
        //         rightAnswer +=1;
        //         console.log(rightAnswer);
        //     }
        // }
    }
    
    handleReQuiz() {
        window.location = "/#quizpage";
    }

    render() {
        return (
            <div className ="scorepage__layout">
                <h1 className="scorepage__heading">Hello Username!</h1>
                <p className="scorepage__score">You scored {rightAnswer}/ out of 10 </p>
                <button className="scorepage__button" onClick={this.handleReQuiz}>Re-take Quiz </button>
            </div>
        );
    }
}

export default Scorepage;