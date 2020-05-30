import React, { Component } from 'react';

import '../style.css';

class About extends React.Component {
  render(){
    return(
      <div className="container mt-4">
        <h1>About</h1>
        <h2>Intro.</h2>
            <ul>
                <li>Name: Yu Ohno（大野 優）</li>
                <li>Birthday: December 26, 1996</li>
                <li>Blood Type: AB</li>
            </ul>
        <h2>Career</h2>
        <div className = "contents-works">
            <div className="resume-date">
                <span className="resume-date">April 2019 – Now</span>
            </div> 
              <h3>Zoho Japan Corporation</h3>
              <p>Post support for 6 products with Indian (Global-HQ) team</p>
            </div>

            <div className = "contents-works enmel">
              <div className="resume-date">
                  <span className="resume-date">April 2018 – May 2019</span>
              </div> 
              <h3>Enmel inc.</h3>
              <p>Design, Develop and Maintain Enmel Web service with HTML, CSS and JavaScript</p>
            </div>

            <div className = "contents-works">
              <div className="resume-date">
                  <span className="resume-date">April 2017 – March 2019</span>
              </div>
              <h3>National Institute of Technology, Nara College</h3>
              <p>Advanced Information Engineering course / Bachelor Degree (Engineering)</p>
              <button type="button" class="btn btn-light border-dark btn-sm" data-toggle="collapse" data-target="#projectDetail" aria-expanded="false" aria-controls="collapseExample">
                  Detail
            </button>
            <div class="collapse mt-2" id="projectDetail">

              <h5>Projects</h5>
              <ol>
                <li>Design and Development of Barrier Detector (October 2017 – January 2018, System Design Project 2017)</li>
                <li>Design and Development of Learning Japanese Website (September 2017, Domestic internship, Osaka, Japan)</li>
                <li>Development of Mobile App for Smart Attendance System (August 2017, Oversea internship in Nanyang Polytechnic, Singapore)</li>
                <li>Detection of Random Correnctions from Source Code Snapshots (April 2017 – March 2019, Research Project)</li>
              </ol>

              <h5>Research Papers</h5>
              <ol>
                <li>Detection of Random Correnctions from Source Code Snapshots (Miscellenous, 2019)</li>
                <li><a href="https://uwanolab.jp/pman/data/pdf/156.pdf">Detection of Random Correnctions from Source Code Snapshots (2019 8th International Conference on Software and Computer Applications (ICSCA 2019), Malaysia)</a></li>
                <li>Detection of Random Correction Students from Source Code Snapshots (SIG-ET 2018, Yamaguchi, Japan)</li>
              </ol>
              </div>
            </div>

            <div class = "contents-works">
              <div class="resume-date">
                  <span class="resume-date">April 2012 – March 2017</span>
              </div>
              <h3>National Institute of Technology, Nara College</h3>
              <p>Dept. Information Engineering / Associate Degree</p>
            </div>
      </div>
      
      )
  }
}

export default About;