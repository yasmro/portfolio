import React, { Component } from 'react';
import { motion } from "framer-motion";
import NavBar from './NavBar'
import '../style.css';

class Interests extends React.Component {
  componentDidMount() {
    var section = "Interests";
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;
  }

  render(){
    return(
      <>
      <NavBar />
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
        <h1 className="mb-5 text-center text-md-left">Interests</h1>
        
        <div className="mb-5">
          <h3>Spread the charm of "Shodo"</h3>
          <p>Now Writing...</p>
        </div>
        <div className="mb-5">
          <h3>How do we reduce the tiresome for working?</h3>
          <p>Now Writing...</p>
        </div>
        <div className="mb-5">
          <h3>Fashion in Watchface art</h3>
          <p>Now Writing...</p>
        </div>        
        
      </div>
      </motion.div>
      </>
      
      )
  }
}

export default Interests;