import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';

const Root = () => (
    <div>
        <Header/>
        <Route path="" exact={true} component={Main}/>
    </div>
)

export default Root;
