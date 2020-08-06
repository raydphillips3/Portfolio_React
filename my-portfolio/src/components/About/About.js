import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutStyle.css";



export default class Nav extends Component {


    render() {
        return (
            <div id="parent">
                <nav >
                    <ul className="nav justify-content-end" id="navLinks">
                        <li className="nav-item">
                            <Link to="/Portfolio_React/" className="nav-link"  >Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Portfolio_React/contacts" className="nav-link" >Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/raymond-phillips-5b4208a1/" className="nav-link" target="_blank">Linkedin</a>
                        </li>
                        <li className="nav-item" >
                            <Link to="/Portfolio_React/about" className="nav-link active" >About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container" id="guts">
                    <div className="row" id="aboutRow">
                        <div className="col-8">
                        <h1 id="about">About Ray Phillips</h1>
                        <p id="aboutPara"> I plan to have a lot more information in this section at  in the near future. Right now, I'm excited
                        about learning how to do all of these cool things!
                        This journey to learning the art of web development has been one of the most challenging things that
                        I have ever done. I've learned so much in such a short period of time, and I know my knowledge will
                        continue to grow. I've really taken a liking to React.js, and I plan to become an expert. The multitude
                        of information that I have taken in really has me excited about my new career. I look forward to honing my
                        skills in the coming weeks/months and contiuing the journey.</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}