import React, { Component } from 'react';
import { useState } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { state as portfolios } from '../data/portfolios';

import '../style.css';

// var postVariants = {
//   initial: (direction: number) => {
//     return {
//       x: direction > 0 ? -100 : 100,
//       scale: 1, y: 0, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } 
//     };
//   },
//   enter: { scale: 1, x:0, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: (direction: number) => {
//     return {
//       x: direction > 0 ? 100 : -100,
//       scale: 1, y: 0, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } 
//     };
//   },
// };

const postVariants = {
  initial: {x: 0, y: 100, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
  enter: {  x:0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {x: 0, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
};

var direction = -1;
function change(newDirection) {
  direction = newDirection
}

class WorkDetail extends React.Component {

  constructor() {
    super();
    this.state = portfolios;
    
    
  }

  render(){
    const category_id = this.props.match.params.category;
    const id = this.props.match.params.id - 1;
    const category = this.state.works[category_id];
    const work = category.portfolios[id];
    const key = work.key;

    var description;
    try{
      description = this.state.works[category_id].portfolios[id].description.map( section =>
        <div className="mb-1">
          {
            section.type == 'paragraph' &&
            <div>
              <h4>{section.header}</h4>
              <p>{section.contents}</p>
            </div>
          }
          {
            section.type == 'link' &&
            <div>
              <h4>{section.header}</h4>
              { section.links.map((link) => <a href={link.href}>{link.name}<br/></a>)}
            </div>
          }
          {
            section.type == 'images' &&
            <div>
              <h4>{section.header}</h4>
              <div id="carouselExampleIndicators" className="carousel slide hover" data-ride="carousel">
                <div className="carousel-inner">
                  {
                    section.images.map( (image, index) =>
                    <div className={ ((index) == 0) ? ("carousel-item active") : ("carousel-item")}>
                        <img src={require('../images/' + category_id + '/' + key + '/' + image)} alt="test" className="d-block w-100"/>
                    </div>
                    )
                  }
                </div>
                <ol className="carousel-indicators">
                  {
                    section.images.map( (image, index) =>
                      <li data-target="#carouselExampleIndicators" data-slide-to= {index} className={ ((index) == 0) ? ("active") : ("")}></li>
                    )  
                  }
                </ol>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              
             </div>
          }
        </div>
      )
      
      var present_id = work.id - 1;
      var max_id = category.portfolios.length;
      var prev_id = ( (present_id - 1 + max_id) % max_id) + 1;
      var next_id = ( (present_id + 1 + max_id) % max_id) + 1;
    }catch{
      
    }
    
    return(

        <div className="container mt-3 mt-md-5">
        <motion.div variants={postVariants} >
          <div className="container row mb-1 pl-0 pr-0">
            <nav aria-label="breadcrumb" className="col-9 col-md-8 col-lg-9">
              <ol className="breadcrumb bg-white pl-0">
                <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
                <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/"}>{category.name}</Link></li>
                <li className="breadcrumb-item active d-md-inline d-none" aria-current="page">{work.title}</li>
              </ol>
            </nav>
            <div className="counter col-3 d-md-none text-right pr-0">
              <div className = "d-block mb-1">
                <span className="h2 font-weight-bolder">{('0' + work.id).slice(-2)}</span><span className="text-dark">/{('0' + category.portfolios.length).slice(-2)}</span>
              </div>
              <div className = "justify-content-between">
                <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className="" onClick={change(-1)}><button className="btn btn-sm btn-light rounded-0 mr-2">&lt;</button></Link>
                <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className="" onClick={change(1)}><button className="btn btn-sm btn-light rounded-0">&gt;</button></Link>
              </div>
            </div>
            <div className="counter d-none d-md-block col-md-4 col-lg-3 text-right pr-0">
              <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className="" onClick={change(-1)}><button className="btn btn-sm btn-light rounded-0">&lt;</button></Link>
              <div className = "ml-3 mr-3 d-inline-block">
                <span className="h2 font-weight-bolder">{('0' + work.id).slice(-2)}</span><span className="text-dark">/{('0' + category.portfolios.length).slice(-2)}</span>
              </div>
              <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className="" onClick={change(1)}><button className="btn btn-sm btn-light rounded-0">&gt;</button></Link>
            </div>
          </div>
          
        </motion.div>

        <AnimatePresence exitBeforeEnter>
        <motion.div initial="initial" animate="enter" exit="exit" key={work.id} >
        <motion.div variants={postVariants} >
        {/* <div className="counter position-absolute" style={{right: 0 + 'em'}}> */}
        
        <h4><span class="badge badge-dark rounded-0">{work.category}</span></h4>
        <h2>{work.title}</h2>
        </motion.div>

        {/* <SwitchTransition mode="out-in">
          <CSSTransition
            key="true"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          > */}

        <motion.div variants={postVariants} >
        <p className="text-justify">{work.abstract}</p>
        </motion.div>

        <motion.div variants={postVariants} >
        <div className="pt-1">
          {description}
        </div>

        </motion.div>

        {/* </CSSTransition>
        </SwitchTransition> */}
        </motion.div>
        </AnimatePresence>
      </div>

      
      
      )

      
  }
}

export default WorkDetail;