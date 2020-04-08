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
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    }, {
        id: 2,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    }, {
        id: 3,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    }, {
        id: 4,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}