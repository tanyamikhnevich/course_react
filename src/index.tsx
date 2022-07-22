import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import "./index.css";
import SamuraiJSApp from "./App";
import ReactDOM from "react";
import { createRoot } from 'react-dom/client';


//const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SamuraiJSApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
