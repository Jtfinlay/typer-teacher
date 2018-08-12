import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const Root = () => (
    <div>
        <Header/>
        <Route path="/" exact={ true } component={ Main }/>
        <Footer/>
    </div>
)

export default Root;
