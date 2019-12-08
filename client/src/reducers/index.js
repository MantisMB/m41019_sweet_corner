import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './products_reducer';
import cartReducer from './cart_reducer';
import ordersReducer from './orders_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
});

export default rootReducer;