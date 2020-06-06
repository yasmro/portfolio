import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Works extends Component {
  constructor() {
    super();
    this.state = {
      works: [
        {
          id: "shodo",
          name: "Shodo",
          description: "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before.",
          imageUrl: "shodo",
        },
        {
          id: "watchface",
          name: "Watchface",
          description: "Design and Develop with XML, CSS and JavaScript on Fitbit Ionic",
          imageUrl: "watchface"
        },
        {
          id: "miscelleneous",
          name: "Miscelleneous",
          description: "Others",
          imageUrl: "mis"
        }
      ]
    };
  }


  render(){
    const categories = this.state.works.map( work =>
      <Link className="nav-link col-lg-4 col-md-6 col-12" to={process.env.PUBLIC_URL + "/works/" + work.id}>
        <div className="cover-img pt-5 pb-5" Style="background-image:url('../images/shodo/1.png');">
          <div className="about-text">
            <h3>{work.name}</h3>
            <p>{work.description}</p>
          </div>
        </div>
      </Link>
    )

    return(
      <div className="container mt-5">
        <h1 className="mb-5">Works</h1>
        <div className="">
          <div className="row">
            {categories}
          </div>     
            
        </div>
      </div>
    )
  }


}


export default Works;