import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
import {GlobalStyle} from '../.././statics/iconfont/iconfont.js';

class Header extends Component {
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
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe614;</i>
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

export default Header;