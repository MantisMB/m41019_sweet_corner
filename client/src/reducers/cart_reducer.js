import types from '../actions/types';

const DEFAULT_STATE = {
    cartId: null,
    items: null,
    total: null,
    details: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.ADD_ITEM_TO_CART:
            // console.log('Cart Reducer Action:', action);
            return { ...state, total: action.cartTotal 
            };
        case types.GET_ACTIVE_CART:
            // console.log('Cart Reducer Action:', action);
            return { ...state, cartId: action.cart.cartId, items: action.cart.items, total: action.cart.total 
            };          
        case types.GET_CART_TOTALS:
            // console.log('Cart Reducer - Get Cart Totals Action:', action);
            return { ...state, total: action.total };
            case types.GET_GUEST_ORDER_DETAILS:
                return {
                    ...state,
                };
        case types.CREATE_GUEST_ORDER:
            return {
                DEFAULT_STATE,
            };

        
        default:
            return state;
    }
}

