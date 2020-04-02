import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import {GlobalRestStyle} from './style.js';
import store from './store';

import { Fragment } from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <div>
                        <GlobalRestStyle/>
                        <Header/>
                        <BrowserRouter>
                            <div>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/detail' exact component={Detail}></Route>
                            </div>
                        </BrowserRouter>
                    </div>  
                </Provider>
            </Fragment>  
        )
    }
}

export default App;