import { request } from './request';

export const getHomeHot1 = (city)=>{
    return request({
        url:'/api/homehot1',
        params: {
            city
        }
    })
}

export const getHomeHot2 = (city)=>{
    return request({
        url:'/api/homehot2',
        params: {
            city
        }
    })
}