import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllProduct, getFilterProducts, getCompanies, getTags } from '../../service'
import { getProductRequestSuccess, setSortedProductsSuccess, setSortedProductsFail, getCompanyRequestSuccess, getTagsRequestSuccess, getShoppingCartSuccess } from './productAction'
function* fetchData(action) {
  try {
    const data = yield call(getAllProduct, action.params)
    yield put(getProductRequestSuccess(data))
  } catch (err) {
    console.log('err', err)
  }
}
function* getFilterData(action) {
  try {
    const data = yield call(getFilterProducts, action.params)
    yield put(setSortedProductsSuccess(data))
  } catch (err) {
    yield put(setSortedProductsFail(err))
    console.log('err', err)
  }
}

function* getCompanyData() {
  try {
    const data = yield call(getCompanies)
    yield put(getCompanyRequestSuccess(data))
  } catch (err) {
    console.log('err', err)
  }
}

function* getTagsData() {
  try {
    const data = yield call(getTags)
    yield put(getTagsRequestSuccess(data))
  } catch (err) {
    console.log('err', err)
  }
}

function* getCartData(action) {
  try {
    yield put(getShoppingCartSuccess(action.data))
  } catch (err) {
    console.log('err', err)
  }
}

export default function* productSaga() {
  yield takeEvery('GET_PRODUCT_REQUEST', fetchData)
  yield takeEvery('GET_PRODUCT_SORTED_REQUEST', getFilterData)
  yield takeEvery('GET_COMPANY_REQUEST', getCompanyData)
  yield takeEvery('GET_TAGS_REQUEST', getTagsData)
  yield takeEvery('GET_CART_REQUEST', getCartData)
}