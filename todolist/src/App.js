import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import {GlobalRestStyle} from './style.js';
import store from './store';

import { Fragment } from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <GlobalRestStyle/>
                    <Header/>
                </Provider>
            </Fragment>  
        )
    }
}

export default App;