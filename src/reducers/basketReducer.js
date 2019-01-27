import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/basketAction';

const initialState = {
    basketList: []
};

export default function basketReducer(state = initialState, action){
    let updatedList = state.basketList;
    let count = 1;
    switch(action.type) {
        case ADD_PRODUCT:
            let isExistItem = updatedList.find(list => {
                return list.id === action.payload.id;                        
            })            
			if(isExistItem === undefined) {
                action.payload['count'] = count;
                updatedList.push(action.payload);
                
            } else {
                action.payload.count += count;
            }
            return {
                ...state,
                basketList: updatedList
            };
        case REMOVE_PRODUCT:
            updatedList.forEach(list => {
                if(list.id === action.payload.id) {
                    if(list.count === 1) {
                        updatedList.splice(updatedList.indexOf(list),1);
                    } else {
                        list.count -=1;
                    }
                }
            })
            return {
                ...state,
                basketList: updatedList
            };
        default:
            return state;
    }
}