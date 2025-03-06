import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import App from "../src/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
       <App/>
    </StrictMode>
)
