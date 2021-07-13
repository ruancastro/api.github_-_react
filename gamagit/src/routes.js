import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';

import Repositories from './pages/Repositories';
import home from './pages/Home';

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={home}/>
            <Route path='/repositories' component={Repositories} />
        </Switch>
    </BrowserRouter>
    
    )
}