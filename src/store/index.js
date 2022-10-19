import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import productReducer from './products/productReducer'
import productSaga from './products/productSaga'
const INITIAL_STATE = {
  items: {},
  filteredItems: [],
  shoppingCart: [],
  companies: {},
  tags: {},
  totalCount: 0
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  productReducer,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(productSaga)
export default store