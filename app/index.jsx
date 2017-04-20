'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './components/parentcomp.jsx';

class Layout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Layout>
      <AppContainer />
    </Layout>
), document.getElementById('app'));