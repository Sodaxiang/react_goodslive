import { request } from './request';

export const getSearchContent = (city, content) =>{
    return request({
        url:'/api/search',
        params: {
            city,
            content
        }
    })
}