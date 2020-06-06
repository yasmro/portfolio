import React, { Component } from 'react';

import '../style.css';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: 1,
          category: "Programming",
          skills:[
            {
              name: "HTML5 / CSS3",
              description: "Bootstrap 4 and Web design"
            },
            {
              name: "JavaScript",
              description: "Available for jQuery and native. Also, I'm learning ReactJS now."
            },
            {
              name: "Java",
              description: "Analyze student's activity data in programming lectures"
            },
            {
              name: "R",
              description: "Analyze student's activity data in programming lectures"
            },
            {
              name: "Shell Script",
              description: "Analyze student's activity data in programming lectures"
            },
            {
              name: "C#",
              description: ""
            },
            {
              name: "MySQL",
              description: ""
            }
          ]
          
        },
        {
          id: 2,
          category: "Design",
          skills:[
            {
              name: "Graphical Design",
              description: "PowerPoint, Image and Clockface on smartwatch"
            },
            {
              name: "Web Design",
              description: "Available with HTML, CSS and JavaScript"
            },
            {
              name: "Adobe Illustrator / Photoshop",
              description: "Novice level"
            }
          ]
        },
        {
          id: 3,
          category: "Others",
          skills:[
            {
              name: "Japanese Calligraphy",
              description: "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before."
            },
            {
              name: "Git / Subversion",
              description: "Experienced with group development"
            },
            {
              name: "English",
              description: "TOEIC 675 (took on April 2018)"
            }
          ]
        }
      ]
    };
  }

  renderskills(skills) {
    const s = skills.map( skill =>
      <div className="mb-4">
        <dt>{skill.name}</dt>
        <dd>{skill.description}</dd>
      </div>    
    )

    return s
  }

  render(){
    const skills = this.state.skills.map( category =>
      <div class="col-lg-4 col-12 mb-3">
        <h4>{category.category}</h4>
        <dl>
          {this.renderskills(category.skills)}
        </dl>
      </div>    
    )

    return(
      <div className="container mt-5">
        <h1 className="mb-5">About</h1>
        <div className="mt-5">
          <h2>Intro.</h2>
          <ul>
              <li>Name: Yu Ohno（大野 優）</li>
              <li>Birthday: December 26, 1996</li>
              <li>Blood Type: AB</li>
          </ul>
        </div>


        <div className="mt-5">
            <h2>Career</h2>
            <div className = "contents-works">
            <div className="resume-date">
                <span className="resume-date">April 2019 – Now</span>
            </div> 
              <h4>Zoho Japan Corporation</h4>
              <p>Post support for 6 products with Indian (Global-HQ) team</p>
            </div>

            <div className = "contents-works enmel">
              <div className="resume-date">
                  <span className="resume-date">April 2018 – May 2019</span>
              </div> 
              <h4>Enmel inc.</h4>
              <p>Design, Develop and Maintain Enmel Web service with HTML, CSS and JavaScript</p>
            </div>

            <div className = "contents-works">
              <div className="resume-date">
                  <span className="resume-date">April 2017 – March 2019</span>
              </div>
              <h4>National Institute of Technology, Nara College</h4>
              <p>Advanced Information Engineering course / Bachelor Degree (Engineering)</p>
              <button type="button" class="btn btn-light border-dark rounded-0 btn-sm" data-toggle="collapse" data-target="#projectDetail" aria-expanded="false" aria-controls="collapseExample">
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
              <h4>National Institute of Technology, Nara College</h4>
              <p>Dept. Information Engineering / Associate Degree</p>
            </div>
        </div> 

        <div className="mt-5">
          <h2>Skills</h2>
          <div class="row">
            {skills}
          </div>
        </div>

      </div>
      
      )
  }
}

export default About;