import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import NavBar from './NavBar'
import { motion } from "framer-motion";

import { state as portfolios } from '../data/portfolios';
import Footer from './Footer'

import ShuffleText from 'react-shuffle-text';

class Worklist extends React.Component {

  componentDidMount() {

  }

  constructor() {
    super();
    this.state = portfolios;
    window.scrollTo(0, 0);
  }

  render(){
    const category_id = this.props.match.params.category;
    const category = this.state.works[category_id];

    var section = category.name;
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;

    var works;
    if(category_id == "miscelleneous" || category_id == "webdesign"){
      works = this.state.works[category_id].portfolios.map( (work,index) =>
        <Link className="nav-link col-lg-4 col-md-6 col-12 text-dark"  to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + index} Style="align-items: left; ">
          <div className="cover-img pb-3">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} className = "bwWrapper pb-1 w-100" Style="height: 200px; object-fit: contain;"/>
            <div className="about-text">
              <h5>{work.title}</h5>
            </div>
          </div>
        </Link>

      )
    }else{
      works = this.state.works[category_id].portfolios.map( (work,index) =>
        <div className="nav-link col-lg-4 col-md-6 col-12 text-dark" Style="align-item: left; ">
          <div className="cover-img pb-3 thumbnail">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} data-toggle="modal" data-target= { "#" + category_id + work.id } className = "bwWrapper pb-1 w-100" Style="object-fit: contain;"/>
            <div className="about-text">
              <h5>{work.title}</h5>
            </div>
          </div>
        </div>
      )
    }

    var modal;
    if(category_id != "miscelleneous" || category_id != "webdesign"){
      modal = this.state.works[category_id].portfolios.map( (work,index) =>
        <div className="modal fade" id={category_id + work.id } tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            
            <div className="modal-content bg-none border-none" Style="border: none !important; background-color: rgba(0,0,0,0) !important;">
              <div className="modal-body mb-0 p-0">
                <div className="embed-responsive-16by9 z-depth-1-half">
                  <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt={category_id + "_" + work.id} className="aligncenter w-100"/>
                </div>  
              </div>
              {/* <button type="button" className="btn btn-outline-light text-dark" data-dismiss="modal">Close</button> */}
            
            <div className="pt-2" style={{"background": "rgba(255,255,255,0);"}}>
                <h1 className="position-absolute display-1" style={{"bottom": "-6%", "left": "0%", "color": "rgba(255,255,255, 0.1)"}}>{('0' + (index+1).toString()).slice(-2)}</h1>
                <h3 className="text-white">{work.title}</h3>
                <span className="text-white h5">{work.jpname}</span>
            </div>
              
            </div>
            
            
          </div>
        </div>

      )
    }

    

    const lis = this.state.works[category_id].portfolios.map( (work, index) =>
      <li data-target="#carouselExampleIndicators" data-slide-to= {index} className={ ((index) == 0) ? ("active") : ("")}></li>
    )

    var slides;
    if(category_id == "miscelleneous" || category_id == "webdesign"){
      slides = this.state.works[category_id].portfolios.map( (work, index) =>
          <div className={ ((index) == 0) ? ("carousel-item active") : ("carousel-item")}>
            <Link className="" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + index}>
              <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
              <div className="mt-3 text-dark text-center">
                {/* <h1 className="position-absolute display-4 text-center" style={{"bottom": "-8%", "left": "42%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (index+1).toString()).slice(-2)}</h1> */}
                <h6>{work.title}</h6>
              </div>
            </Link>
          </div>

      )
      
    }else{
      slides = this.state.works[category_id].portfolios.map( (work, index) =>
        <div className={ ((index) == 0) ? ("carousel-item active") : ("carousel-item")}>
          <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
          <div className="mt-3 text-dark text-center">
            {/* <h1 className="position-absolute display-4 text-center" style={{"bottom": "-4%", "left": "42%", "color": "rgba(0,0,0, 0.1)"}}>{('0' + (index+1).toString()).slice(-2)}</h1> */}
            <h6>{work.title}</h6>
            <span className="">{work.jpname}</span>
          </div>
        </div>
        
      )
    }

    return(
      <>
      <NavBar />
      <div className="container mt-lg-5">
 
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white pl-0">
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
            <li className="breadcrumb-item active d-md-inline d-none" aria-current="page">{category.name}</li>
          </ol>
        </nav>
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
        <h2 className="h2 d-block d-lg-none font-weight-bold">{category.name}</h2>
        <h2 className="display-4 d-none d-lg-block ">{category.name}</h2>
        <p>{category.description}</p>
        
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
        delay:0.2
      }}
      >
        <div className="row d-none d-md-flex">
          {works}          
        </div>
          {modal}

        <div id="carouselExampleIndicators" className="carousel slide hover d-md-none" data-ride="carousel">
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

          {/* <div className = "text-center">
            <a className="" href="#carouselExampleIndicators" role="button" data-slide="prev"><button className="btn btn-sm btn-light rounded-0">&lt;</button></a>
              <span className="h2 font-weight-bolder pl-3">{('0' + "2").slice(-2)}</span><span className="pr-3 text-dark">/{('0' + category.portfolios.length).slice(-2)}</span>
            <a className="" href="#carouselExampleIndicators" role="button" data-slide="next"><button className="btn btn-sm btn-light rounded-0">&gt;</button></a>
          </div> */}
          
        </div>


        


   
        </motion.div>
      </div>
      <Footer />
      
      </>
    )
  }
}
export default Worklist;

