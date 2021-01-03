import { COLLECT, UN_COLLECT } from '../constants';

const collect = (state=[], action) => {
    switch(action.type){
        case COLLECT:
            state.push(action.data);
            return state;
        case UN_COLLECT:
            state.filter(item => item.houseid !== action.data.houseid);
            return state;
        default:
            return state;
             
    }
}

export default collect;