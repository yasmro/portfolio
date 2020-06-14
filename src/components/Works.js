import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import { state as portfolios } from '../data/portfolios';

import { motion } from "framer-motion";

class Works extends Component {
  constructor() {
    super();
    this.state = portfolios;
  }


  render(){
    const categories = this.state.works.categories.map( category =>
      <Link className="nav-link col-lg-5 mr-lg-2 col-12 mb-2 bg-light text-dark" to={process.env.PUBLIC_URL + "/works/" + category.id}>
        <div className="cover-img pt-2 pr-md-2 works-category-box" Style="background-image:url('../images/shodo/1.png');">
          <div className="about-text">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        </div>
      </Link>
    )

    return(
      <div className="container mt-5">
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
        <h1 className="mb-5 text-center text-md-left">Works</h1>
      </motion.div>
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
          duration: 0.2,
          delay: 0.2
        }}
     >
        <div className="container">
          <div className="row">
            {categories}
          </div>     
            
        </div>
        </motion.div>
      </div>
      
    )
  }


}


export default Works;