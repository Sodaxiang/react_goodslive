import { request } from './request';

export const getHomeHot1 = ()=>{
    return request({
        url:'/api/homehot1'
    })
}

export const getHomeHot2 = ()=>{
    return request({
        url:'/api/homehot2'
    })
}