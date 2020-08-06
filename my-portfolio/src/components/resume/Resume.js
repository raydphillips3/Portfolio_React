import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ResumeStyle.css";
import Page1 from "../../Images/resumePage1.jpg";
import Page2 from "../../Images/resumePage2.jpg";



export default class Nav extends Component {


    render() {
        return (
            <div id="resParent">
                {/* <nav >
                    <ul className="nav justify-content-end" id="navLinks">
                        <li className="nav-item" >
                            <Link to="about.html" className="nav-link active">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/raymond-phillips-5b4208a1/" className="nav-link" target="_blank">Linkedin</a>
                        </li>
                    </ul>
                </nav> */}
                <div className="container" id="respages" >

                    <div className="row">
                        <div className="col">
                            <img src={Page1} id="resumePages" />
                        </div>
                    </div>
                    <div className="row" id="space">
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={Page2} id="resumePages" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}