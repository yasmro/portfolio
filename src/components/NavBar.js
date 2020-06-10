import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pl-lg-5" id="navbar">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>Yu Ohno</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>


    )
  }
}
export default NavBar;