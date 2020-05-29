import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render(){
    return(
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/works">Works</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>


    )
  }
}
export default NavBar;