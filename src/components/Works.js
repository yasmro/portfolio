import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Shodo from './Worklist'
import Watchface from './Watchface'

class Works extends Component {
  constructor() {
    super();
    this.works = {
      categories: [
        {
          id: 1,
          name: "Shodo",
          description: "shodo",
          imageUrl: "shodo"
        },
        {
          id: 2,
          name: "Watchface",
          description: "wf",
          imageUrl: "watchface"
        },
        {
          id: 3,
          name: "Miscelleneorus",
          description: "mis",
          imageUrl: "mis"
        }
      ]
    };
  }


  render(){
    const categories = this.works.categories.map( work =>
      <Link className="nav-link col-lg-4 col-md-6 col-12" to={process.env.PUBLIC_URL + "/works/" + work.name.toLowerCase()}>
        <div className="cover-img" Style="background-image:url('https://manablog.org/wp-content/uploads/2016/11/top-img.jpg');">
          <div className="about-text">
            <h3>{work.name}</h3>
            <p>{work.description}</p>
          </div>
        </div>
      </Link>
    )

    return(
      <div className="container mt-4">
        <h1>Works</h1>
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