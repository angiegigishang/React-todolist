import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2148318713,3960000066&fm=26&gp=0.jpg"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            dispatch(action);
        })
    }
})

export default connect(null, mapDispatch)(Home);