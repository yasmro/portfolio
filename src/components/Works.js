import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar'
import {BrowserRouter, Route, Link} from 'react-router-dom';

import { state as portfolios } from '../data/portfolios';

import { motion } from "framer-motion";

import Footer from './Footer'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsli = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


class Works extends Component {

  componentDidMount() {
    var section = "Works";
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;
  }

  constructor() {
    super();
    this.state = portfolios;
    window.scrollTo(0, 0);
  }


  render(){
    const categories_old = this.state.works.categories.map( (category, i) =>
        <Link className="nav-link col-lg-5 mr-lg-2 col-12 mb-2 bg-light text-dark" key={i} to={process.env.PUBLIC_URL + "/works/" + category.id}>
          <div className="cover-img pt-2 pr-md-2 works-category-box" Style="background-image:url('../images/shodo/1.png');">
            <div className="about-text">
              <h3>{category.name}</h3>
              <p className="" style={{"font-style" : "normal"}}>{category.description}</p>
            </div>
          </div>
        </Link>

    )

    const categories = this.state.works.categories.map( (category, i) =>
    <div className="cover-img col-lg-6 col-12 p-0 m-0 mb-2 pr-2" Style="background-image:url('../images/shodo/1.png');">
      <Link className="nav-link w-100 bg-light text-dark works-category-box category-box hvr-ripple-out" key={i} to={process.env.PUBLIC_URL + "/works/" + category.id}>
        <div className="about-text">
          <h3>{category.name}</h3>
          <p className="" style={{"font-style" : "normal"}}>{category.description}</p>
        </div>
      </Link>
    </div>

)


    return(
      <>
      <NavBar />
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
        <h1 className="mb-5 d-none d-md-block text-md-left display-4">Works</h1>
        <h1 className="mb-5 d-block d-md-none text-center">Works</h1>
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
          delay:0.1,
          duration: 0.2
        }}
     >
        <div className="container mb-5">
        <motion.div
            className="row"
            variants={variantsli}
        >
            {categories}
        </motion.div>            
        </div>
      </motion.div>
      </div>
      <Footer />
      </>
    )
  }


}


export default Works;