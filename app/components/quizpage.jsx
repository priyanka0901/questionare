'use strict';

import React from 'react';
import jsonData from '../data/data.js';

var store = [];
var click = 0;
class Quizpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: jsonData[0] };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleNext() {
        if(click < jsonData.length - 1) {
            click += 1;
            this.setState({store: jsonData[click]});
        }
    } 

    handleBack() {
        if(click < jsonData.length) {
            click -= 1;
            this.setState({store: jsonData[click]});
        }
    } 

    render() {
        return (
            <div className="quizpage__layout">
                <div className="quizpage__heading">
                    <p>JavaScript Online test</p>
                </div>
                <div className="quizpage__time-ques">
                    <p>03:26 min / 5 min</p>
                    <p> Question no. {click + 1} of 10</p>
                </div>
                <div className="quizpage__quest">
                    <p className="quest-para" id="js-quest-para">{this.state.store.quest}</p>
                </div>
                <ul className="quizpage__option">
                    <li>
                        <input type="radio" name="option" className="options" /><p>{this.state.store.option1}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" /><p>{this.state.store.option2}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" /><p>{this.state.store.option3}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" /><p>{this.state.store.option4}</p>
                    </li>
                </ul>
                <div className="quizpage__footer">
                    <p onClick={this.handleBack}>Back</p>
                    <p onClick={this.handleNext}>Next</p>
                </div>
            </div>
        );
    }
}

export default Quizpage;