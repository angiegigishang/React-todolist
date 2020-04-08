import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem} from '../style';

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl='https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'></RecommendItem>
                <RecommendItem imgUrl='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'></RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommend;