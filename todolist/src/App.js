import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
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
                                <Route path='/' exact render={() => <div>home</div>}></Route>
                                <Route path='/detail' exact render={() => <div>detail</div>}></Route>
                            </div>
                        </BrowserRouter>
                    </div>  
                </Provider>
            </Fragment>  
        )
    }
}

export default App;