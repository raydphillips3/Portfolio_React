import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactsStyle.css";



export default class Nav extends Component {


    render() {
        return (
            <div>
                <nav >
                    <ul className="nav justify-content-end" id="navLinks">
                        <li className="nav-item">
                            <Link to="/Portfolio_React/" className="nav-link"  >Portfolio</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/Portfolio_React/about" className="nav-link active" >About</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/raymond-phillips-5b4208a1/" className="nav-link" target="_blank">Linkedin</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/Portfolio_React/contacts" className="nav-link" >Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <img id="conImg" src="http://cdn.lowgif.com/full/42d6dcc85c2e70fc-image-under-construction-2-gif-fareer-wiki-fandom.gif" />
                </div>
            </div>
        )
    }
}