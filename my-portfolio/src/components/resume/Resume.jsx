import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../../src/App.css';
import Resume from "./Resume";




const Pager = () => {

    return (
        <div className="App" id="app">
            <Resume />
        </div>
    );
};

export default Pager;