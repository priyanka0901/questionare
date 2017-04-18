'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Homepage from './components/homepage.jsx';
import {QuizAns, UserScore, UserName} from './components/parentcomp.jsx';

class Layout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    <IndexRoute component={UserName} />
    <Route path="/quizpage" component={QuizAns} />
    <Route path="/scorepage" component={UserScore}/>
    </Route>
  </Router>
), document.getElementById('app'));