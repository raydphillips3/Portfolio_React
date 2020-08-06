import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css";
// import { Link } from "react-router-dom";
import '../../../src/App.css';
import Contacts from "./Contacts";




const Tacts = () => {

    return (
        <div className="App" id="app">
            <Contacts />
        </div>
    );
};

export default Tacts;