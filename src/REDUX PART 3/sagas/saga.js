import axios from 'axios'
import { takeEvery, put, delay, takeLatest, call } from 'redux-saga/effects'

function fetchTheUser(id) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/'+id)
}

function* ageUpAsync() {               // 0 sec        
    const todoData = yield fetchTheUser(5)
    console.log(todoData.data);
    yield put( { type: "AGE_UP_ASYNC", payload: todoData.data.id  } )
}

export function* watchAgeUp()   {
    yield takeEvery('AGE_UP', ageUpAsync)
} 