import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { state as portfolios } from '../data/portfolios';

import '../style.css';

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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white pl-0">
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/"}>{category.name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{work.title}</li>
          </ol>
        </nav>

        {/* <div className="counter position-absolute" style={{right: 0 + 'em'}}> */}
        <div className="counter mb-1">
          <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + prev_id} className=""><button className="btn btn-sm btn-light rounded-0">&lt;</button></Link>
          <div className = "ml-3 mr-3 d-inline-block">
            <span className="h4 font-weight-bolder">{('0' + work.id).slice(-2)}</span><span className="">/{('0' + category.portfolios.length).slice(-2)}</span>
          </div>
          <Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + next_id} className=""><button className="btn btn-sm btn-light rounded-0">&gt;</button></Link>
        </div>

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
        delay:0.2
      }}
      >
        <p>{work.abstract}</p>
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
        delay:0.4
      }}
      >
        <div className="pt-1">
          {description}
        </div>

        </motion.div>

        {/* </CSSTransition>
        </SwitchTransition> */}

      </div>
      
      
      )

      
  }
}

export default WorkDetail;