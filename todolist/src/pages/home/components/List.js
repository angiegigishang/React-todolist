import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';

class List extends Component {
    render() {
        return (
            <div>
                <ListItem>
                    <img className="pic" src="https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                    <ListInfo>
                        <h3 className='title'>想在2020年成为前端大师？就做这9个项目吧</h3>
                        <p className='desc'>无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img className="pic" src="https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                    <ListInfo>
                        <h3 className='title'>想在2020年成为前端大师？就做这9个项目吧</h3>
                        <p className='desc'>无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img className="pic" src="https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                    <ListInfo>
                        <h3 className='title'>想在2020年成为前端大师？就做这9个项目吧</h3>
                        <p className='desc'>无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...</p>
                    </ListInfo>
                </ListItem>
            </div>
        )
    }
}

export default List;