import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import { GlobalStyle } from "./styled-components/global";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
