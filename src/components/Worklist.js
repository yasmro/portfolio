import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Worklist extends React.Component {

  render(){
    const category = this.props.match.params.category;
    var category_desc = "";
    if(category == "shodo"){
      category_desc = "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before."
    }else if(category == "watchface"){
      category_desc = "Design and Develop with XML, CSS and JavaScript on Fitbit Ionic"
    }

    return(
      <div className="container mt-1">
        <h2>{category}</h2>
        <p>{category_desc}</p>
          <div className="row">
            <div className="contents-work col-lg-4 col-md-6 col-12">
              <div className="about-text">
                <div className="thumbnail">
                  <img src={require('../images/clock05.png')} alt="test" data-toggle="modal" data-target="#img_clock05" className = "bwWrapper"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Worklist;