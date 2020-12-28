import { request } from './request';

export const getSearchContent = (city, content, page) =>{
    return request({
        url:'/api/search',
        params: {
            city,
            content, 
            page
        }
    })
}