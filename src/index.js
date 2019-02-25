import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>,document.getElementById("root"));
registerServiceWorker();
