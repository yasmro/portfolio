import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>Yu Ohno</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>


    )
  }
}
export default NavBar;