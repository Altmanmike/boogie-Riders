import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";
import Main from "./js/Main";
import Navbar from "./js/components/navbar";
import Footer from "./js/components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Main />
        <Footer />
    </React.StrictMode>
);