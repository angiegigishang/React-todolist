import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import {GlobalStyle} from '../.././statics/iconfont/iconfont.js';

class Header extends Component {
    getListArea(show) {
        if(show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>文化</SearchInfoItem>
                        <SearchInfoItem>科技</SearchInfoItem>
                        <SearchInfoItem>生活</SearchInfoItem>
                        <SearchInfoItem>电影</SearchInfoItem>
                        <SearchInfoItem>娱乐</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <GlobalStyle/>
                <Logo href="/"/>
                <Nav>
                    <NavItem className='left'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>        
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>            
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>    
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        //focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);