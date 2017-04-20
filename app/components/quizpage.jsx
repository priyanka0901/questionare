'use strict';

import React from 'react';
import { PropTypes } from 'react';
import questionData from '../data/data.js';
import $ from 'jquery';

class Quizpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: questionData[0],
                        sec : 0,
                        min : 0,
                        selectedOption: ''};

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.tick = this.tick.bind(this);
        this.handleRadioVal = this.handleRadioVal.bind(this);

        this.store = [];
        this.nextClick = 0;
        this.timer;
        this.userAnsVal = {};
        this.selectedOption = {};

    }

    // setstate of min and sec
    tick () {
        this.setState({sec: (this.state.sec + 1)});
        if(this.state.sec === 60) {
            this.setState({sec: 0});
            this.setState({min: (this.state.min + 1)});
        }
        if(this.state.min === 5){
            window.location = '/#scorepage';
        }
     }

     //set interval
    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    //remove setinterval
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    //on click handle next ques
    handleNext() {
        //check conition if user has answer
        if(this.userAnsVal .hasOwnProperty(this.nextClick+1)) {
            if(this.nextClick < questionData.length - 1) {
                this.nextClick += 1;
                this.setState({store: questionData[this.nextClick]});
                $('.warning').css('display','none');
            }
        } else{
            $('.warning').css('display','block');
        }
    }

    //on click handle prev ques
    handleBack() {
        if(this.nextClick < questionData.length) {
            this.nextClick -= 1;
            this.setState({store: questionData[this.nextClick]});
        }
    }

    //store user answer in object
    handleRadioVal(e) {
        this.setState({selectedOption: e.target.id});
        this.userAnsVal[this.nextClick + 1] = e.target.id;
        if((this.nextClick) === 9) {
            this.props.passUserAns(this.userAnsVal);
        }
        if((this.nextClick) === 9) {
             window.location = '/#scorepage';
        }
    }

    render() {
        return (
            <div className="quizpage__layout">
                <div className="quizpage__heading">
                    <p>JavaScript Online test</p>
                </div>
                <div className="quizpage__time-ques">
                    <p>0{this.state.min}:{this.state.sec} min / 05 min</p>
                    <p> Question no. {this.nextClick + 1} of 10</p>
                </div>
                <div className="quizpage__quest">
                    <p className="quest-para" id="js-quest-para">{this.state.store.quest}</p>
                </div>
                <ul className="quizpage__option" onChange={this.handleRadioVal}>
                    {this.state.store.options.map((value, index) => {
                        return (
                            <li key={'option_'+index}>
                                <input type="radio" id={this.state.store.questid + index} name="option" className="options" value={this.state.store.options[index]} checked={this.userAnsVal[this.nextClick+1] ===this.state.store.questid + index }/><p>{this.state.store.options[index]}</p>
                            </li>
            
                        );
                    })}
                        <h1 className="warning">Please select the answer</h1>
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
