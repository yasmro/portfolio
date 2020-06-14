import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";

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
    const categories = this.state.works.map( category =>
      <Link className="nav-link col-lg-4 col-md-6 col-12 mb-2 bg-light text-dark" to={process.env.PUBLIC_URL + "/works/" + category.id}>
        <div className="cover-img pt-5 pb-5 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
          <div className="about-text">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        </div>
      </Link>
    )

    return(
      <motion.div
        animate={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: 100,
          opacity: 0
        }}
        exit={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 0.2
        }}
     >
      <div className="container mt-5">
        <h1 className="mb-5 text-center text-md-left">Works</h1>
        <div className="">
          <div className="row">
            {categories}
          </div>     
            
        </div>
      </div>
      </motion.div>
    )
  }


}


export default Works;