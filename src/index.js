import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import counterReducer from "./store/reducers/counter"
import resultReducer from "./store/reducers/result"

const rootReducer = combineReducers({
   ctr: counterReducer,
   res: resultReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
)
registerServiceWorker()
