import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import Spinner from '../spinner';

import './app.css';


export default class App extends Component {

    render() {
        return (
            <ErrorBoundry>
                <Spinner />
            </ErrorBoundry>
        );
    }
}

