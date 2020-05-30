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
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works/shodo"}>Shodo</Link></li>
            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/works/watchface"}>Watchface</Link></li>
          </ul>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="about-text">
                    <h3>HTML5 / CSS3</h3>
                    <p>Bootstrap and Web design</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="about-text">
                    <h3>JavaScript</h3>
                    <p>Available for jQuery and native</p>
                </div>
            </div>
          </div>     
            
        </div>
      </div>
    )
  }


}


export default Works;