import { combineReducers } from 'redux';

// this is the set shelf state from our get request
const setShelf = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF_ITEM':
      return action.payload;
    default:
      return state;
  }
}
  




export default combineReducers({
setShelf
});
