import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchServiceStart, fetchServiceSuccess, fetchServiceError } from '../slice/serviceSlice';
import axios from 'axios';


const url = 'https://admin.naxa.com.np/api/services';

function* fetchServiceSaga() {
  try {
    yield put(fetchServiceStart());
    const response = yield call(axios.get, url);
    yield put(fetchServiceSuccess(response.data));
  } catch (error) {
    yield put(fetchServiceError(error.message));
  }
}

export default fetchServiceSaga;