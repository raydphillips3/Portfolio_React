import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PortfolioStyle.css";



export default class Nav extends Component {


    render() {
        return (
            <div id="parent"> 
            <nav >
                <span className="navbar-brand mb-0 h1" id="ray">Ray Phillips</span>
                <ul className="nav justify-content-end" id="navLinks">
                    <li className="nav-item" >
                        <Link to="/Portfolio_React/about" className="nav-link active" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio_React/contacts" className="nav-link" >Contacts</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/raymond-phillips-5b4208a1/" className="nav-link" target="_blank">Linkedin</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portfolio_React/" className="nav-link"  >Portfolio</Link>
                    </li>
                </ul>
            </nav>
            <div className="container" id="guts">
             <div className="row">
                 <div className="col-md-6">
                     {/* <div className="row">
                         <div className="col">
                             <h2 id="port">Portfolio</h2>
                         </div>
                     </div> */}
                     <div className="row" >
                         <div className="col" id="gitHub">
                             <div className="card bg-dark text-white">
                                 <img src="https://www.pngitem.com/pimgs/m/128-1280162_github-logo-png-cat-transparent-png.png"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                     <h5 className="card-title"><a href="https://github.com/raydphillips3" target="_blank">GitHub Profile</a></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col" id="resume">
                             <div className="card bg-dark text-white">
                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvm-Q9Nlvit25jmfyn6d7CSaWPL_deLSOlF726IHpUybDGUFdB&usqp=CAU"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                 <Link to="/Portfolio_React/resume" className="nav-link" id="resumeLink" target="_blank"><h5 id="resume">Resume</h5></Link>
                                 </div>
                             </div>
                         </div>
     
                     </div>
                     <div className="row" id="projRow">
                         <div className="col" id="proj">
                             <div className="card bg-dark text-white">
                                 <img src="https://i.ytimg.com/vi/4Q8A-WoZFoE/maxresdefault.jpg"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                     <h5 className="card-title"><a href="https://pet-n-parent.herokuapp.com/" target="_blank">Pets-N-Parents</a></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col" id="sched">
                             <div className="card bg-dark text-white">
                                 <img src="https://paper-media.com/media/image/product/6500/md/bla5-2002_notepads-daily-planner-pad-bloom-din-a5-format.jpg"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                     <h5 className="card-title"><a href="https://raydphillips3.github.io/HM-5/" target="_blank">Scheduler</a></h5>
                                 </div>
                             </div>
                         </div>
     
                     </div>
                     <div className="row" id="cinesearchRow">
                         <div className="col" id="cinesearch">
                             <div className="card bg-dark text-white">
                                 <img src="https://unothegateway.com/wp-content/uploads/2016/03/movie-reel.png"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                     <h5 className="card-title"><a href="https://alextagg392.github.io/CineSearch/" target="_blank">CineSearch</a></h5>
                                 </div>
                             </div>
                         </div>
                         <div className="col" id="hobby">
                             <div className="card bg-dark text-white">
                                 <img src="https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/Numark_MixtrackProFX_ortho_hires_815492-86b103e55059f30da1d09423bd92f6e9.jpg"
                                     className="card-img" />
                                 <div className="card-img-overlay" id="cardBan">
                                     <h5 className="card-title"><a href="https://www.facebook.com/djray1906/" target="_blank">Hobby</a></h5>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
     
             </div>
         </div>
         </div>
        )
    }
}
