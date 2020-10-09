import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchShelf(action) {
    // get request to server to get all items from shelf DB
    let response = yield axios({
        method: 'GET',
        url: '/api/shelf'
    })
    //Sending to reducer we will create
    yield put({
        type: 'SET_SHELF_ITEM',
        payload: response.data
    })
}

function* shelfSaga() {
    //we think this works the same as the watcher, but this is new to us?
    yield takeLatest('FETCH_SHELF_ITEM', fetchShelf)
}

export default shelfSaga; 