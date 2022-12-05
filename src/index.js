import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './components/redux/store';
import DataProvider from "./components/context/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <DataProvider>
      <App />
      </DataProvider>
      
    </React.StrictMode>
  </Provider>
);
