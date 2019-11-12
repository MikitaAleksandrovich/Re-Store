import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';

import './app.css';


export default class App extends Component {
    render() {

        return (
            <div>
                <ErrorBoundry>
            
                    <ErrorButton/>
            
        
                </ErrorBoundry>
            </div>
        );
    }
}

