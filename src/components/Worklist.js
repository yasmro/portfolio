import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";

import { state as portfolios } from '../data/portfolios';

class Worklist extends React.Component {
  constructor() {
    super();
    this.state = portfolios;
  }

  render(){
    const category_id = this.props.match.params.category;
    const category = this.state.works[category_id];

    var works;
    if(category_id == "miscelleneous"){
      works = this.state.works[category_id].portfolios.map( work =>
        <Link className="nav-link col-lg-4 col-md-6 col-12 text-dark" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + work.id}>
          <div className="cover-img pb-5 thumbnail">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} className = "bwWrapper pb-1 w-100"/>
            <div className="about-text">
              <h5>{work.title}</h5>
            </div>
          </div>
        </Link>

      )
    }else{
      works = this.state.works[category_id].portfolios.map( work =>
        <div className="nav-link col-lg-4 col-md-6 col-12 text-dark" >
          <div className="cover-img pb-5 thumbnail">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} data-toggle="modal" data-target= { "#" + category_id + work.id } className = "bwWrapper pb-1 w-100"/>
            <div className="about-text">
              <h5>{work.title}</h5>
            </div>
          </div>
        </div>
      )
    }

    var modal;
    if(category_id != "miscelleneous"){
      modal = this.state.works[category_id].portfolios.map( work =>
        <div className="modal fade" id={category_id + work.id } tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-body mb-0 p-0">
                <div className="embed-responsive-16by9 z-depth-1-half">
                  <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} className="aligncenter w-100"/>
                </div>  
              </div>
              <button type="button" className="btn btn-outline-light text-dark" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      )
    }

    

    const lis = this.state.works[category_id].portfolios.map( work =>
      <li data-target="#carouselExampleIndicators" data-slide-to= {work.id - 1} className={ ((work.id) == 1) ? ("active") : ("")}></li>
    )

    var slides;
    if(category_id == "miscelleneous"){
      slides = this.state.works[category_id].portfolios.map( work =>
          <div class={ ((work.id) == 1) ? ("carousel-item active") : ("carousel-item")}>
            <Link className="" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + work.id}>
              <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
              <div className="mt-3 text-dark text-center">
                <h6>{work.title}</h6>
              </div>
            </Link>
          </div>

      )
      
    }else{
      slides = this.state.works[category_id].portfolios.map( work =>
        <div className={ ((work.id) == 1) ? ("carousel-item active") : ("carousel-item")}>
          <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
          <div className="mt-3 text-dark text-center">
            <h6>{work.title}</h6>
          </div>
        </div>
        
      )
    }

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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white pl-0">
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{category.name}</li>
          </ol>
        </nav>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        
        <div className="row d-none d-md-flex">
          {works}          
        </div>
          {modal}

        <div id="carouselExampleIndicators" className="carousel slide  hover d-md-none" data-ride="carousel">
          <div className="carousel-inner">
            {slides}
          </div>
          <ol className="carousel-indicators">
            {lis}
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
      </motion.div>
    )
  }
}
export default Worklist;