import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../../src/App.css';
import Portfolio from "./Portfolio";




const Landpage = () => {

    return (
        <div className="App" id="app">
            <Portfolio />
        </div>
    );
};

export default Landpage;