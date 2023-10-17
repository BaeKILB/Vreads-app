import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

//React.StrictMode 는 개발용도로 사용하기 때문에
// 몇몇 Link 동작이 url 만 바뀌고 안될 수 있음
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <React.StrictMode>*/}
    <App />
    {/* </React.StrictMode> */}
  </>
);
