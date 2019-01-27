export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export function addBasket(type,payload) {
    return {
        type: ADD_PRODUCT,
        payload:payload
    }
}

export function removeBasket(type,payload) {
    return {
        type: REMOVE_PRODUCT,
        payload:payload
    }
}