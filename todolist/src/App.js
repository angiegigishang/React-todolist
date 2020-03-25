import React, { Component } from 'react';
import Header from './common/header';
import {GlobalRestStyle} from './style.js';

import { Fragment } from 'react';

class App extends Component {
    render() {
        return (
            <Fragment>
                
                <GlobalRestStyle/>
                <Header/>
            </Fragment>  
        )
    }
}

export default App;