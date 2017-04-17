'use strict';

import React from 'react';
import jsonData from '../data/data.js';

var store = [];
var click = 0;
var timer;
var radioVal = {};

class Quizpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: jsonData[0],
                        sec : 0,
                        min : 0}

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
            alert('time up');
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
        if(click < jsonData.length - 1) {
            click += 1;
            this.setState({store: jsonData[click]});
        }
    } 

    //on click handle prev ques
    handleBack() {
        if(click < jsonData.length) {
            click -= 1;
            this.setState({store: jsonData[click]});
        }
    } 

    handleRadioVal(e) {
        // this.setState({selectedOption: e.target.value});
        // console.log(this.state.selectedOption);
        radioVal[click + 1] = e.target.value;
        if(radioVal === ''){
            alert('selectans');
        }
        console.log(radioVal);
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
                <ul className="quizpage__option" onChange={this.handleRadioVal.bind(this)}>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.option1} checked={this.state.store.option1 === 'option1'} /><p>{this.state.store.option1}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.option2} checked={this.state.store.option2 === 'option2'} /><p>{this.state.store.option2}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.option3} checked={this.state.store.option3 === 'option3'} /><p>{this.state.store.option3}</p>
                    </li>
                    <li>
                        <input type="radio" name="option" className="options" value={this.state.store.option4} checked={this.state.store.option4 === 'option4'} /><p>{this.state.store.option4}</p>
                    </li>
                </ul>
                <div className="quizpage__footer">
                    <p onClick={this.handleBack} id="js-back">Back</p>
                    <p onClick={this.handleNext} id="js-next">Next</p>
                </div>
            </div>
        );
    }
}

export default Quizpage;