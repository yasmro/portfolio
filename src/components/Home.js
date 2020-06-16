import React, { Component } from 'react';
import { motion } from "framer-motion";

class Home extends Component {
  render(){
    return(
      <div className="bg-dark vh-100" Style="margin-top:-56px;">
        <div className="position-absolute pl-lg-5 container text-white" Style = "top: calc(50vh - 56px);" id="topmessage">
        
          <div className = "mb-5">
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
        duration: 0.5
      }}
   >
            <h1>Yu Ohno's Portfolio</h1>
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
                  duration: 0.5,
                  delay: 0
                }}
            >
            <h2>Move Emotion</h2>
            </motion.div>

          </div>
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
                  duration: 0.5,
                  delay: 0.5
                }}
            >
          <p>Hi, I'm Yu Ohno from Japan and post-support engineer (mainly), calligrapher, artist and designer. </p>
          </motion.div>
        </div>
      </div>
    )
  }
}
export default Home;