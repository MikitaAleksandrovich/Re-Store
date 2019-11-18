import React from 'react';
import { WithBookstoreService } from '../hoc';


import './app.css';


const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return <div>App</div>
};

export default WithBookstoreService()(App);

