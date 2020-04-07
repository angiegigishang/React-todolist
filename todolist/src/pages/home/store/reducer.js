import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'       
    }, {
        id: 2,
        title: "社会热点",
        imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '想在2020年成为前端大师？就做这9个项目吧',
        desc: '无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 2,
        title: '想在2020年成为前端大师？就做这9个项目吧',
        desc: '无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 3,
        title: '想在2020年成为前端大师？就做这9个项目吧',
        desc: '无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 4,
        title: '想在2020年成为前端大师？就做这9个项目吧',
        desc: '无论你是编程新手，还是经验丰富的开发人员，都需要不断学习新的概念和语言 / 框架，才能跟得上这个快速变化的行业。以 React 为例——它在 4...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18747287-1918facae980a5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}