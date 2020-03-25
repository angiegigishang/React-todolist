import React, { Component } from 'react';
import Header from './common/header';
import {GlobalRestStyle} from './style.js';
import {GlobalStyle} from './statics/iconfont/iconfont.js';
import { Fragment } from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <GlobalRestStyle/>
                <Header/>
            </Fragment>  
        )
    }
}

export default App;