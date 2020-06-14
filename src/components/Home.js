import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <div className="bg-dark vh-100" Style="margin-top:-56px;">
        <div className="position-absolute pl-lg-5 container text-white" Style = "top: calc(50vh - 56px);" id="topmessage">
          <div className = "mb-5">
            <h1>Yu Ohno's Portfolio</h1>
            <h2>Move Emotion</h2>
          </div>
          <p>Hi, I'm Yu Ohno from Japan and post-support engineer (mainly), calligrapher, artist and designer. </p>
        </div>
      </div>
    )
  }
}
export default Home;