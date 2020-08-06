import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../../src/App.css';
import About from "./About";




const Aboutpage = () => {

    return (
        <div className="App" id="app">
            <About />
        </div>
    );
};

export default Aboutpage;