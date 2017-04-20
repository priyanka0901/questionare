'use strict';

import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Homepage extends React.Component {
    //initail state of name
    constructor(props) {
        super(props);
        this.state = { username: ''};
        this.handleChange = this.handleChange.bind(this);
    }

     //handle by default nature of form
     handleSubmit(event) {
         event.preventDefault();
    }

    //button visible if target value is not empty
    handleChange (event) {
        var userName = event.target.value;
        this.setState({username: userName} );
        this.props.handleUserName(userName);
    }

    //on click change to quiz page
    handlePage() {
        window.location = '/#/quizpage';
    }

    render() {
        return (
            <div className="homepage__layout">
                <div className="homepage__inner">
                    <img className="home__inner_img"  src="../../assets/images/quiz.svg"/>
                    <p className="home__inner_heading">Quiz</p>
                    <form onSubmit = {this.handleSubmit}>
                        <p className="homer__inner_name">Name </p>
                        <input type="text" id="js-name" className="name_input" placeholder="Enter your name" value={this.state.username} onChange={this.handleChange}/>
                    </form>
                    {this.state.username   ? 
                    <button type="submit" value="submit" className="name_button" id="js-submit" onClick={this.handlePage}>Welcome to quiz</button>
                    :null
                    }
                </div>
            </div>
        );
    }
}


export default Homepage;
