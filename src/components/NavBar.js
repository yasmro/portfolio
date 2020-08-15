import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import P5Wrapper from 'react-p5-wrapper'
import testSketch from './animation/testSketch'

class NavBar extends Component {



  render(){
    

    // const menu = this.props.match.params.menu;
    // var color = (menu == "") ? "bg-dark" : "bg-light";{ location.href == "/" ? "d-none" : ""}

    const nav = 
      (
        <nav className={ "navbar navbar-expand-lg navbar-light fixed-top pl-lg-5"} id="navbar">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
            <img src={require('../images/name.png')} className="aligncenter mr-2 navBarLogo" alt="shodo03"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li> */}
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      )
      const nav_new =(
        <nav className={ "navbar navbar-expand-lg navbar-light pl-lg-5 position-fixed"} Style="top:10px; left:10px; width: 17vw; height:100vh; flex-direction: column;" id="navbar">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
            <img src={require('../images/name.png')} className="aligncenter mr-2 navBarLogo" alt="shodo03"/>
          </Link>
          <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarMenu">
            <ul className="navbar-nav d-inline">
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li> */}
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
          </div>
        </nav>
        
      )
    
  
    return(
      <div className="">
        <div className="d-none d-lg-inline">
        {nav}

        </div>

        <div className="d-lg-none d-inline">
          <div class="button_container" id="toggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
          </div>


          <div class="overlay" id="overlay">
            <nav class="overlay-menu">
              <ul>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/works"}>Works</Link></li>
                {/* <li className=""><Link className="" to={process.env.PUBLIC_URL + "/interests"}>Interests</Link></li> */}
                <li className=""><Link className="" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
              </ul>
              <div className="overflow-hidden ml-0 pl-0" Style=" left:0%;">
                <P5Wrapper sketch={testSketch} />
              </div>
            </nav>
          </div>
        </div>
      </div>


    )
  }
}
export default NavBar;