import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import from redux
import { createStore, combineReducers } from "redux"; // tao store
import { Provider } from "react-redux"; // phuong thuc ket noi react voi redux de xai
import cateReducer from "./reducers/category"; // export defaul nen k can dau ngoac
import productReducer from "./reducers/product";
import selectedCateReducer from "./reducers/selectedCategory";
import selectedProductReducer from "./reducers/selectedProduct";

// create rootreducer
const reducer = combineReducers({
  // toan bo state cua store
  // key : reducerName
  // cart : cartReducer
  categories: cateReducer,
  productList: productReducer,
  selectedCategory: selectedCateReducer,
  seletedProducts: selectedProductReducer,
});

//create store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
