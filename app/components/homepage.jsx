'use strict';

import React from 'react';
import {Link} from 'react-router'; 

var username = [];
class Homepage extends React.Component {
    //initail state of name 
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

     //handle by default nature of form
     handleSubmit(event) {
         event.preventDefault();
    }

    //button visible if target value is not empty
    handleChange(event) {
        this.setState({value: event.target.value});
        username = this.state.value;
        if(this.state.value.length > 0) {
            $("#js-submit").css('display','block');
        }else{
            $("#js-submit").css('display','none');
        }
    }

    //on click change to quiz page 
    handlePage() {
        window.location = "#/quizpage";
    }

    render() {
        return (
            <div className="homepage__layout">
                <div className="homepage__inner">
                    <img className="home__inner_img"  src="../../assets/images/quiz.svg"/>
                    <p className="home__inner_heading">Quiz</p>
                    <form onSubmit = {this.handleSubmit}>
                        <p className="homer__inner_name">Name </p>
                        <input type="text" id="js-name" className="name_input" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange}/>
                    </form>
                    <button type="submit" value="submit" className="name_button" id="js-submit" onClick={this.handlePage}>Welcome to quiz</button>
                </div>
            </div>
        );
    }
}


export default Homepage;