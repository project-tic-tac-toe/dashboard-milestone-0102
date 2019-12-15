import { takeLatest, call, put } from "redux-saga/effects";

export function* watcherSagaFetchAPI() {
    yield takeLatest("API_CALL_REQUEST", workerSagaFetchAPI);
  }
  
  function fetchProductsApi() {
    return fetch(
      `https://api.unsplash.com/photos?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&page=1`
    )
      .then(res => (res.json()))
      .catch(err =>{throw(err)});
  }
  
  function* workerSagaFetchAPI() {
    try {
      var response = yield call(fetchProductsApi);
      yield put({ type: "API_CALL_SUCCESS", response });
    } catch (error) {
      yield put({ type: "API_CALL_FAILURE", error });
    }
  }