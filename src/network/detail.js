import { request } from './request';

export const getHouseDetail = id =>{
    return request({
        url:'/api/detail',
        params: {
            id
        }
    })
}

export const getHouseComment = id => {
    return request({
        url: '/api/comment',
        params: {
            id
        }
    })
}