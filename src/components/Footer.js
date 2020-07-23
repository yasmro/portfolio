import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";

import P5Wrapper from 'react-p5-wrapper'
import testSketch from './animation/wave'

class NavBar extends Component {



  render(){
    
    return(
      <motion.div className="mt-3">
        <P5Wrapper sketch={testSketch} />
        <div className="mt-2 mb-2 align-center ">
            <p className="text-center counter">Copyright © {new Date().getFullYear().toString()} Yu Ohno "Yasumaro" All rights reserved.</p>
        </div>
        
      </motion.div>


    )
  }
}
export default NavBar;