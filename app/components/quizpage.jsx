'use strict';

import React from 'react';
import { PropTypes } from 'react';
import jsonData from '../data/data.js';

var store = [];
var click = 0;
var timer;
var radioVal = {};
var selectedOption = {};

class Quizpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: jsonData[0],
                        sec : 0,
                        min : 0,
                        selectedOption: ''}

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.tick = this.tick.bind(this);
        this.handleRadioVal = this.handleRadioVal.bind(this);
    }

    // setstate of min and sec
    tick () {
        this.setState({sec: (this.state.sec + 1)})
        if(this.state.sec === 60) {
            this.setState({sec: 0})
            this.setState({min: (this.state.min + 1)})
        }
        if(this.state.min === 5){
            window.location = "/#scorepage";
        }
     } 

     //set interval
    componentDidMount() {    
        this.timer = setInterval(this.tick.bind(this), 1000)
    }

    //remove setinterval
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    
    //on click handle next ques
    handleNext() {
        //check conition if user has answer
        if(radioVal.hasOwnProperty(click+1)) {
            if(click < jsonData.length - 1) {
                click += 1;
                this.setState({store: jsonData[click]});
                $(".warning").css("display","none");
            } 
        } else{
            $(".warning").css("display","block");
        }
    } 
 
    //on click handle prev ques
    handleBack() {
        if(click < jsonData.length) {
            click -= 1;
            this.setState({store: jsonData[click]});
        }
    } 

    //store user answer in object
    handleRadioVal(e) {
        this.setState({selectedOption: e.target.value});
        radioVal[click + 1] = e.target.value;
        if((click) === 9) {
            this.props.passUserAns(radioVal);
        }
        if((click +1) === 10) {
             window.location = "/#scorepage";
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
                    <p> Question no. {click + 1} of 10</p>
                </div>
                <div className="quizpage__quest">
                    <p className="quest-para" id="js-quest-para">{this.state.store.quest}</p>
                </div>
                <ul className="quizpage__option" onChange={this.handleRadioVal}>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.options[0]} checked={radioVal[click+1] ===this.state.store.options[0] }/><p>{this.state.store.options[0]}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.options[1]} checked={radioVal[click+1] ===this.state.store.options[1] } /><p>{this.state.store.options[1]}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.options[2]}  checked={radioVal[click+1] ===this.state.store.options[2] }/><p>{this.state.store.options[2]}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.options[3]}  checked={radioVal[click+1] ===this.state.store.options[3]}/><p>{this.state.store.options[3]}</p>
                    </li>
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