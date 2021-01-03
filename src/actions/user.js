import { LOGIN_USER, UPDATE_USER } from '../constants';

export const userLogin = user => {
    return {
        type: LOGIN_USER,
        user,
    }
}

export const userUpdate = user => {
    return {
        type: UPDATE_USER,
        user
    }
}