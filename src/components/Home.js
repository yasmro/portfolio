import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";

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

const postVariants = {initial:{ opacity: 0 }, enter:{ opacity: 1 }, exit:{ opacity: 0 }};

class Home extends Component {
  render(){
    return(
      <div className="bg-dark vh-100" Style="margin-top:-56px;">
        <div className="position-absolute pl-lg-5 container text-white" Style = "top: calc(50vh - 56px);" id="topmessage">
        <AnimatePresence exitBeforeEnter>
          <motion.div initial="initial" animate="enter" exit="exit" key="home">
            <div className = "mb-5">
              <motion.div variants={postVariants}>
                <h1>Yu Ohno's Portfolio</h1>
              </motion.div>
              <motion.div variants={postVariants}>
                <h2>Move Emotion</h2>
              </motion.div>
            </div>
            <motion.div variants={postVariants}>
              <p>Hi, I'm Yu Ohno from Japan and post-support engineer (mainly), calligrapher, artist and designer. </p>
            </motion.div>
            
          
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )
  }
}
export default Home;