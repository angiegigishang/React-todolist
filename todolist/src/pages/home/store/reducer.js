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
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}