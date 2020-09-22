import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";

import P5Wrapper from 'react-p5-wrapper'
import testSketch from './animation/wave'

class NavBar extends Component {



  render(){
    
    return(
      <motion.div className="mt-3 ">
        <div className="overflow-hidden" Style="left:0;">
            {/* <P5Wrapper sketch={testSketch} /> */}
            <div className="mt-2  mb-5 ml-2 align-center " Style="margin-bottom: 0px;">
            <p className="text-center counter">Copyright © {new Date().getFullYear().toString()} Yu Ohno "Yasumaro" All rights reserved.</p>
            </div> 
            
        </div>

        {/* <div className="mt-5 pt-5 mb-2 ml-2 align-center " Style="margin-bottom: 0px;">
            <p className="text-center counter">Copyright © {new Date().getFullYear().toString()} Yu Ohno "Yasumaro" All rights reserved.</p>
        </div> */}


        
        
        
      </motion.div>


    )
  }
}
export default NavBar;