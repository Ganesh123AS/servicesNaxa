import { all } from 'redux-saga/effects';
import serviceSaga from './sagas/serviceSaga';

function* rootSaga() {
  yield all([serviceSaga()]);
}

export default rootSaga;