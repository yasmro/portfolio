import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Shodo from './Worklist'
import Watchface from './Watchface'

class Works extends Component {
  render(){

    return(
      <div className="container mt-4">
        <h1>Works</h1>
        <div className="">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to="/works/shodo">Shodo</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/works/watchface">Watchface</Link></li>
          </ul>
        </div>
      </div>
    )
  }


}


export default Works;