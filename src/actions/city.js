import {INIT_CITY, UPDATE_CITY} from '../constants';


export const initCity = (city) =>{
    return {
        type: INIT_CITY,
        city,
    }
}

export const updateCity = (city) => {
    return {
        type: UPDATE_CITY,
        city,
    }
}