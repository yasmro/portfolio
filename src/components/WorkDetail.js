import React, { Component } from 'react';
import { useState } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import NavBar from './NavBar'

import { motion, AnimatePresence } from "framer-motion";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ShuffleText from 'react-shuffle-text';

import { state as portfolios } from '../data/portfolios';
import ScrollAnimation from 'react-animate-on-scroll';

import Footer from './Footer'

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

// const postVariants = {
//   initial: {x: 0, y: 100, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
//   enter: {  x:0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: {x: 0, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
// };

const postVariants = {
  initial: {x: 0, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
  enter: {  x:0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {x: 0, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
};

const postVariants2L = {
  initial: {x: 20, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
  enter: {  x:0, y: 0, scale: 1, opacity: 1, transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96], delay:0.75 } },
  exit: {x: 0, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
};

const postVariants2R = {
  initial: {x: -20, y: 0, scale: 1, opacity: 0, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }},
  enter: {  x:0, y: 0, scale: 1, opacity: 1, transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96], delay:0.75 } },
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
    window.scrollTo(0, 0);
  }

  render(){
    const category_id = this.props.match.params.category;
    const id = this.props.match.params.id;
    const category = this.state.works[category_id];
    const work = category.portfolios[id];
    const key = work.key;

    var section = work.title;
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;

    var description, description2;
    try{
      description = this.state.works[category_id].portfolios[id].description.map( section =>
        <div className="mb-3">
          <h5 className = "d-none d-md-block">{section.header}</h5>
          <h6 className = "d-block text-uppercase d-md-none font-weight-bold">{section.header}</h6>

          {
            section.type == 'paragraph' &&
            <div>
              <p>{section.contents}</p>
            </div>
          }
          {
            section.type == 'link' &&
            <div>
              { section.links.map((link) => <a href={link.href}>{link.name}<br/></a>)}
            </div>
          }
          {
            section.type == 'images' &&
            <div>
              <div id="carouselExampleIndicators" className="carousel slide hover w-100 w-lg-75" data-ride="carousel">
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

      description2 = this.state.works[category_id].portfolios[id].description.map( section =>
        <div className="mb-3">
          <h5 className = "d-none d-md-block">{section.header}</h5>
          <h6 className = "d-block text-uppercase d-md-none font-weight-bold">{section.header}</h6>

          {
            section.type == 'paragraph' &&
            <div>
              <p>{section.contents}</p>
            </div>
          }
          {
            section.type == 'link' &&
            <div>
              { section.links.map((link) => <a href={link.href}>{link.name}<br/></a>)}
            </div>
          }
          {
            section.type == 'images' &&
            <div>
              <div id="carouselExampleIndicators2" className="carousel slide hover w-100 w-lg-75" data-ride="carousel">
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
                      <li data-target="#carouselExampleIndicators2" data-slide-to= {index} className={ ((index) == 0) ? ("active") : ("")}></li>
                    )  
                  }
                </ol>
                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              
             </div>
          }
        </div>
      )
      
      var present_id = parseInt(id);
      var pageNumber = parseInt(id) + 1 ;
      var max_id = category.portfolios.length;
      var prev_id = (present_id - 1 + max_id) % max_id;
      var prev_name = category.portfolios[prev_id].title;
      var next_id = (present_id + 1 + max_id) % max_id;
      var next_name = category.portfolios[next_id].title;

    }catch{
      
    }
    
    return(
      <>
      <NavBar />

        <div className="container mt-lg-5">
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
                <span className="h2 font-weight-bolder counter">{('0' + (pageNumber)).slice(-2)}</span><span className="text-dark counter">/{('0' + max_id).slice(-2)}</span>
              </div>
              <div className = "justify-content-between">
                <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className="" onClick={change(-1)}><button className="btn btn-sm btn-light rounded-0 mr-2">&lt;</button></Link>
                <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className="" onClick={change(1)}><button className="btn btn-sm btn-light rounded-0">&gt;</button></Link>
              </div>
            </div>

            <div className="counter d-none d-md-block col-md-4 col-lg-3 text-right pr-0">
              <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className="" onClick={change(-1)}><button className="btn btn-sm btn-light rounded-0">&lt;</button></Link>
              <div className = "ml-3 mr-3 d-inline-block">
                <span className="display-4 font-weight-bolder counter">{('0' + (pageNumber)).slice(-2)}</span><span className="text-dark counter">/{('0' + max_id).slice(-2)}</span>
              </div>
              <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className="" onClick={change(1)}><button className="btn btn-sm btn-light rounded-0">&gt;</button></Link>
            </div>
          </div>
          
        </motion.div>

        <AnimatePresence exitBeforeEnter>
        <motion.div initial="initial" animate="enter" exit="exit" key={work.id} className="row">

          <motion.div variants={postVariants} className="col-12">
              {/* <div className="counter position-absolute" style={{right: 0 + 'em'}}> */}
              

              <div className="d-block d-lg-none">
              <span className="badge badge-dark rounded-0 h6">{work.category}</span>
                <h2 className = "h4 font-weight-bold">{work.title}</h2>
              </div>

              <div className="d-none d-lg-block pl-0" >
              <span className="badge badge-dark rounded-0 h5">{work.category}</span>
                {/* <h2 className = "display-4 font-weight-bold"><ShuffleText content={work.title} /></h2> */}
                <h2 className = "display-4 ">{work.title}</h2>
              </div>


            </motion.div>
          
          <div className="col-12 col-lg-6">
            <motion.div variants={postVariants} className="">
              {/* <div className="counter position-absolute" style={{right: 0 + 'em'}}> */}
              {/* <h4><span className="badge badge-dark rounded-0">{work.category}</span></h4> */}

              <div className="d-block d-lg-none">
                {/* <h2 className = "h4 font-weight-bold">{work.title}</h2> */}
                <p className="text-justify">{work.abstract}</p>
                
              </div>

              <div className="d-none d-lg-block pl-0" >
                {/* <h2 className = "h1">{work.title}</h2> */}
                <p className="text-justify w-100">{work.abstract}</p>
                <motion.div variants={postVariants} className="mb-5">
                  <div className="mt-2">
                    {description}
                  </div>
                </motion.div>
              </div>
              

            </motion.div>
          </div>

          <motion.div variants={postVariants} className="col-12 col-lg-6 ">
            <div className="mt-2 mb-3">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
            </div>
          </motion.div>
  

          <div className="col-12 d-block d-lg-none">
            <motion.div variants={postVariants} className="mb-5">
                  <div className="mt-2">
                    {description2}
                  </div>
            </motion.div>
          </div>

          {/* </CSSTransition>
          </SwitchTransition> */}

          <motion.div variants={postVariants2L} className="col-6 mb-5 mt-5 pt-3 pb-3 position-relative" id="prevButton">
           {/* <ScrollAnimation animateIn="fadeInLeft" animateOnce={false}> */}
              <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className="text-dark w-100" onClick={window.scrollTo(0, 0)}>
                <div className="w-100">
                  <h1 className="position-absolute display-1 position-absolute" style={{"top": "-10%", "left": "3%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (prev_id + 1).toString()).slice(-2)}</h1>
                  <h2 className="h2 font-weight-bold counter d-none d-lg-block">&lt; PREV</h2>
                  <h2 className="h5 font-weight-bold counter d-block d-lg-none">&lt; PREV</h2>
                  <span className="h6 counter">{prev_name}</span>
                </div>
              </Link>
            {/* </ScrollAnimation> */}
          </motion.div>

          <motion.div variants={postVariants2R} className="col-6 text-right mb-5 mt-5 pt-3 pb-3 position-relative" id="nextButton">
            <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className="text-dark w-100" onClick={ window.scrollTo(0, 0)}>
              <div className="w-100">
                <h1 className="position-absolute display-1 position-absolute" style={{"top": "-10%","right": "3%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (next_id + 1).toString()).slice(-2)}</h1>
                <h2 className="h2 counter font-weight-bold d-none d-lg-block">NEXT &gt;</h2>
                <h2 className="h5 counter font-weight-bold d-block d-lg-none">NEXT &gt;</h2>
                <span className="h6 counter">{next_name}</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        
        
        </AnimatePresence>
      </div>
      <Footer />
      </>
      
      
      )

      
  }
}

export default WorkDetail;