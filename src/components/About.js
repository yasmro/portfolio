import React, { Component } from 'react';
import { motion } from "framer-motion";
import NavBar from './NavBar'
import Footer from './Footer'
import { state as skills } from '../data/skills'

import '../style.css';

class About extends React.Component {
  constructor() {
    super();
    this.state = skills;
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    var section = "About";
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;
  }

  renderskills(skills) {
    const s = skills.map( skill =>
      // <div className="mb-4">
      <div className="mb-2">
        <dt>{skill.name}</dt>
        {/* <dd>{skill.description}</dd> */}
      </div>    
    )

    return s
  }

  render(){
    const skills = this.state.skills.map( category =>
      <div className="col-lg-4 col-12 mb-3">
        <h4>{category.category}</h4>
        <dl>
          {this.renderskills(category.skills)}
        </dl>
      </div>    
    )

    return(
      <>
      <NavBar />

      <div className="container mt-lg-5">
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
        <h1 className="mb-5 d-none d-md-block text-md-left display-4">About</h1>
        <h1 className="mb-5 d-block d-md-none text-center">About</h1>
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
        delay: 0.1
      }}
   >
        <div className="mt-5">
          <h2>Intro.</h2>
          {/* <ul>
              <li>Name: Yu Ohno（大野 優）</li>
              <li>Birthday: December 26, 1996</li>
              <li>Blood Type: AB</li>
          </ul> */}
          <p>My name is Yu Ohno born in Nara, Japan, on 1996.</p>
          <p>I've learned Information Technology in National Information Technology, Nara College, Japan for seven years(2012 – 2019) and joined Zoho Japan corp in April 2019. I'm taking care of supporting queries from Japanese customers, developers, and reseller partners. I support in the range of ten products:  Zoho CRM (Customer Relationship Management), Zoho Campaign (which provides email marketing application), Zoho SalesIQ (which has Web visitors' tracking, live chat, and chatbot platform on the Web page), Zoho Deluge (which we can develop Zoho services' customization with low-code programming language) and API integrations.</p>
          <p>My hobby is art calligraphy and Web development. I post works of art calligraphy and Web pages to Instagram. I would like to work as an art calligrapher and/or a Web developer, and I hope to make audiences impressive :) </p>
        </div>
      </motion.div>


        {/* <div className="mt-5">
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
            <h2>Career</h2>
            <div className = "contents-works">
              <h5><span class="badge badge-dark rounded-0 pl-3 pr-3">April 2019 – Now</span></h5>

              <h4>Zoho Japan Corporation</h4>
              <ul>
                <li>Post support for Japanese customers with Indian (Global-HQ) team in range of 10 products.</li>
                <ul>
                  <li>Zoho CRM, Campaigns, SalesIQ, Projects, Desk, Analytics, Social, Survey, Deluge and API</li>
                </ul>
                <li className="d-none">Take Deluge and API training for partners</li>
                
              </ul>
            </div>

            <div className = "contents-works enmel">
              <h5><span class="badge badge-dark rounded-0 pl-3 pr-3">April 2018 – May 2019</span></h5>
              <h4>Enmel inc.</h4>
              <p>Design, Develop and Maintain Enmel Web service with HTML, CSS and JavaScript</p>
            </div>

            <div className = "contents-works">
              <h5><span class="badge badge-dark rounded-0 pl-3 pr-3">April 2017 – March 2019</span></h5>
              <h4>National Institute of Technology, Nara College</h4>
              <p>Advanced Information Engineering course / Bachelor Degree (Engineering)</p>
              <button type="button" className="btn btn-light border-dark rounded-0 btn-sm" data-toggle="collapse" data-target="#projectDetail" aria-expanded="false" aria-controls="collapseExample">
                  Detail
              </button>
            <div className="collapse mt-2" id="projectDetail">

              <h5>Projects</h5>
              <ol>
                <li>Design and Development of Barrier Detector (October 2017 – January 2018, System Design Project 2017)</li>
                <li>Design and Development of Learning Japanese Website (September 2017, Domestic internship, Osaka, Japan)</li>
                <li>Development of Mobile App for Smart Attendance System (August 2017, Oversea internship in Nanyang Polytechnic, Singapore)</li>
                <li>Detection of Random Corrections from Source Code Snapshots (April 2017 – March 2019, Research Project)</li>
              </ol>

              <h5>Research Papers</h5>
              <ol>
                <li>Detection of Random Corrections from Source Code Snapshots (Miscellenous, 2019)</li>
                <li><a href="https://uwanolab.jp/pman/data/pdf/156.pdf">Detection of Random Corrections from Source Code Snapshots (2019 8th International Conference on Software and Computer Applications (ICSCA 2019), Malaysia)</a></li>
                <li>Detection of Random Correction Students from Source Code Snapshots (SIG-ET 2018, Yamaguchi, Japan)</li>
              </ol>
              </div>
            </div>

            <div className = "contents-works">
              <h5><span class="badge badge-dark rounded-0 pl-3 pr-3">April 2012 – March 2017</span></h5>
              <h4>National Institute of Technology, Nara College</h4>
              <p>Dept. Information Engineering / Associate Degree</p>
            </div>
            </motion.div>
        </div>  */}

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
        delay:0.3
      }}
   >
        <div className="mt-5">
        
          <h2>Skills</h2>
          <div className="row">
            {skills}
          </div>
        </div>
        </motion.div>

      </div>
      <Footer />
      </>
      
      )
  }
}

export default About;