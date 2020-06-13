import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../style.css';

class WorkDetail extends React.Component {

  constructor() {
    super();
    this.state = {
      works: {
        shodo: {
          id: "shodo",
          name: "Shodo",
          description: "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before.",
          imageUrl: "shodo",
          portfolios:[
             { id:1,
              title:"Shodo1",
              abstract: "hoge1",
              images:[
                "test1"
              ]
            },
            {
              id:2,
              title:"Shodo2",
              abstract: "hoge1",
              images:[
                "test2"
              ]
            },
            {
              id:3,
              title:"Shodo3",
              abstract: "hoge1 <span style='color: red;'>happy</span>",
              images:[
                "test2"
              ]
            }

          ]
        },
        watchface: {
          id: "watchface",
          name: "Watchface",
          description: "Design and Develop with XML, CSS and JavaScript on Fitbit Ionic",
          imageUrl: "watchface",
          portfolios:[
            { id:1,
             title:"Watchface1",
             abstract: "hoge1",
             images:[
               "test1"
             ]
           },
           {
             id:2,
             title:"Watchface2",
             abstract: "hoge1",
             images:[
               "test2"
             ]
           }

          ]
        },
        miscelleneous: {
          id: "miscelleneous",
          name: "Miscelleneous",
          description: "Others",
          imageUrl: "mis",
          portfolios:[
            { id:1,
             title:"Smart Attendance System",
             technologies:"System design and Develop with C# (Xamarin)",
             abstract: "Smart Attendance System is a mobile application that provides checking student's attendances for the lecture through scanning QR code. I propose \"Dynamic QR code\" that the system produces dynamically based on the server time in order to prevent fraud of QR code by some students. Also, I developed Android app which fetchs and posts student's attendance from Web service and DB which have developed by Singaporean labmates through RESTful API.",
             description:[
             ],
             images:[
               "test1"
             ]
           },
           {
            id:2,
            title:"Hardware Products: Barrier Detector",
            technologies: "Product manager and Develop with Arduino",
            abstract: "Barrier Detector provides detecting obstructs on road to prevent injuring for blindness pedestrians. I designed the detection range of obstructs with mathematics such as trigonometric function and 3D-polar-coordinates (r,θ,φ–coordinates) based on pedestrian’s walk-characteristics (e.g. walk speed, visible angular range) with caluculation.",
            description:[
              {
                type: "paragraph",
                header: "Action Items of DRI",
                contents:"Project Management, Arduino coder"
              },
              {
                type: "paragraph",
                header: "Used Technologies",
                contents:"Arduino, Mathematics(3D-polar-coordinates)"
              }

            ],
            images:[
              "test2"
            ]
          },
           {
             id:3,
             title:"Slide Design: How to Design Presentation",
             technologies: "PowerPoint (Japanese)",
             abstract: "I received some requests about improving presentation slides. Through using experiences I created ebook about how to design and make better presentation material for novices. before.",
             description:[

             ],
             images:[
               "test2"
             ]
           },
           {
            id:4,
            title:"Projects: Detection of Random Correnctions from Source Code Snapshots",
            technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
            abstract: "	Classifying student's situation helps improve educational effect in programming course with snapshots. Snapshots can grasp student who falls \"pitfall\" during a course. The purpose of this study is to classify students who make random correction in the programming course with Online Judge System. Random Correction is an action that source code correction without understanding the exercise contents. Then we propose metrics to classify students who make random corrections from snapshots of source code submitted by students and verify their usefulness. The result of the experiment shows that students who cannot reach perfect score had high value of both metrics; 1) a degree of imbalance corrections between source code lines, 2) the number of submitted revisions.",
            description:[
               
            ],
            images:[
              "test2"
            ]
          },
          {
            id:5,
            title:"Enmel",
            technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
            abstract: "Enmel is a Web system which manages and shares the recipes(e.g. ingredients, procedures preparation/finish, allergy etc.) for restaurant or pastry chef. In addition, applying recipe data expected business efficiency such as cost accounting, material management, customer management, their schedule management and so on.",
            description:[
               
            ],
            images:[
              "test2"
            ]
          }

          ]
        }
      }
    };
  }

  render(){
    const category_id = this.props.match.params.category;
    const id = this.props.match.params.id - 1;
    const category = this.state.works[category_id];
    const work = category.portfolios[id];

    var description = this.state.works[category_id].portfolios[id].description.map( section =>
      <div>
        <h4>{section.header}</h4>
        <p>{section.contents}</p>
      </div>
    )
    
    return(
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white pl-0">
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/" + category_id + "/"}>{category.name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{work.title}</li>
          </ol>
        </nav>
        <h2>{work.title}</h2>
        <p>{work.abstract}</p>
        <div className="pt-1">
          {description}
        </div>
        
      </div>
      
      )

      
  }
}

export default WorkDetail;