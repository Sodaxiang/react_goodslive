import { LOGIN_USER, UPDATE_USER } from '../constants';

const initialState = {};
const user = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
              return action.user;
        case UPDATE_USER:
              return action.user;
        default:
              return state;
    }
}

export default user;