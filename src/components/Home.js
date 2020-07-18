import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import ShuffleText from 'react-shuffle-text';
import ScrollAnimation from 'react-animate-on-scroll';

let easing = [0.175, 0.85, 0.42, 0.96];

// const postVariants = {
//   initial: { scale: 1, y: 100, opacity: 0},
//   enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: {
//     scale: 0.6,
//     y: 0,
//     opacity: 0,
//     transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
//   }
// };

const postVariants = {initial:{ opacity: 0 }, enter:{ opacity: 1 }, exit:{ opacity: 0 }, transition:{duration: 20, delay: 0.5}};
// const postVariants2 = {initial:{ opacity: 0 }, enter:{ opacity: 1, dela }, exit:{ opacity: 0 }, transition:{duration: 0.2, delay:20}};

class Home extends Component {
  componentDidMount() {
    var section = "";
    var title = "Yasmro's Portfolio 2020"
    document.title = section + title;
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className="bg-dark vh-100 vw-100" Style="margin-top:-56px; min-height: 600px;">
        <div className="pl-lg-5 container-fluid container-fluid jumbotron jumbotron-fluid text-white bg-dark w-100 h-100 mb-0" id="topmessage">
        <AnimatePresence exitBeforeEnter>
          <motion.div initial="initial" animate="enter" exit="exit" transition="transition" key="home">
            <div className = "">
              <motion.div animate={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: 0,
          opacity: 0
        }}
        exit={{
          y: 0,
          opacity: 0
        }}
        transition={{
          duration: 1,
          delay:0
        }}   className="align-middle text-center">
                
                <img src={require('../images/topName.svg')} className=" mt-5 mr-2 mb-5" style={{"min-height": "160px", "max-height": "260px"}} id="toplogo" alt=""/>
                
              </motion.div>

              <motion.div animate={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: 0,
          opacity: 0
        }}
        exit={{
          y: 0,
          opacity: 0
        }}
        transition={{
          duration: 1,
          delay:0.5
        }}   className="text-center mb-5">
                {/* <h1 className="counter"><ShuffleText className="counter" content="Move Emotion" charFrameTime={35} charFrames={10} /></h1> */}
                <h1 className="h2 counter">Move Emotion</h1>
                <h2 className="h6">Yu Ohno's Portfolio</h2>
                
                <span className="text-white w-50 text-center">Hi, I'm Yu Ohno from Japan and engineer, calligrapher artist and designer. </span>
                

              </motion.div>
            </div>
      
            <div className="text-center">
            <motion.div animate={{
          y: 0,
          opacity: 1
        }}
        initial={{
          y: 20,
          opacity: 0
        }}
        exit={{
          y: -20,
          opacity: 0
        }}
        transition={{
          duration: 1,
          delay:1
        }} className="list-unstyled pl-0 d-flex justify-content-center" id="topmenu">
              <div className="pt-2 pb-2"><Link className="h4 text-white mb-3 px-4" to={process.env.PUBLIC_URL + "/about"}>About</Link></div>
              <div className="pt-2 pb-2"><Link className="h4 text-white mb-3 px-4" to={process.env.PUBLIC_URL + "/works"}>Works</Link></div>
              <div className="pt-2 pb-2"><Link className="h4 text-white mb-3 px-4" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></div>
            </motion.div>

            </div>

          </motion.div>

          

          
          </AnimatePresence>
          
        </div>

        <div className="vh-100 d-none">
          <div className="pl-lg-5 container-fluid jumbotron jumbotron-fluid text-dark bg-white w-100 h-100 mb-0" id="no1">
            <div class="container-fluid">
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                
              </ScrollAnimation>
              <h1 className="display-3">What thing I can...</h1>
              <p>The customer</p>
            </div>

          </div>
          <div className="pl-lg-5 container-fluid text-white jumbotron jumbotron-fluid bg-danger w-100 h-100 mb-0" id="no2">
            <h1>No2.</h1>
          </div>
          
          <div className="pl-lg-5 container-fluid text-dark jumbotron jumbotron-fluid bg-white w-100 h-100 mb-0 text-center" id="no3">
            <div className="" style={{"padding-top": "min(calc(25vh - 8vh), 50px)"}}>
              <h1 className="display-4">For more detail...</h1>
              <div className="pt-5 pb-4"><Link className="h3 mb-3" to={process.env.PUBLIC_URL + "/about"}>About</Link></div>
              <div className="pt-5 pb-4"><Link className="h3 mb-3" to={process.env.PUBLIC_URL + "/works"}>Works</Link></div>
              <div className="pt-5 pb-4"><Link className="h3 mb-3" to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></div>
            </div>
          </div>
        </div>

        
        
      </div>
    )
  }
}
export default Home;