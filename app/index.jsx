'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Homepage from './components/homepage.jsx';
import QuizScore from './components/quizscore/quizscore.jsx';
import Quizpage from './components/quizscore/quizpage.jsx';
import Scorepage from './components/quizscore/scorepage.jsx';

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
     <IndexRoute component={Homepage} />
     <Route path="/quizpage" component={Quizpage} />
     <Route path="/scorepage" component={Scorepage} />
    </Route>
  </Router>
), document.getElementById('app'));