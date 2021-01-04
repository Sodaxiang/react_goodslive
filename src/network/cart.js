import { request } from './request';

export const getCartList = city =>{
    return request({
        url:'/api/cartlist',
        params:{
            city
        }
    })
}

export const addComment = data => {
    return request({
        method:'POST',
        url:'/api/addcomment',
        data
    })
}