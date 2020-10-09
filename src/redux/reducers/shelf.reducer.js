import { combineReducers } from 'redux';

// this is the set shelf state from our get request
const setShelfItem = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF_ITEM':
      return action.payload;
    default:
      return state;
  }
}

// this is the post shelf state from our post request
// const addShelfItem = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_SHELF_ITEM':
//             return action.payload;
//         default:
//             return state;
//     }
// } 
  




export default combineReducers({
setShelfItem,
// addShelfItem
});
