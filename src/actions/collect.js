import { COLLECT, UN_COLLECT } from '../constants';

export const setCollect = data => {
    return {
        type: COLLECT,
        data,
    }
}

export const cancelCollect = data => {
    return {
        type:  UN_COLLECT,
        data,
    }
}