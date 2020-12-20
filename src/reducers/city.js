import {INIT_CITY, UPDATE_CITY} from '../constants';


const city = (state={}, action) => {
    switch(action.type){
        case INIT_CITY:
          return action.city;
        case UPDATE_CITY:
          return action.city;
        default:
        return state;
    }
}

export default city;