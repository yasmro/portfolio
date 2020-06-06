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
              description: "hoge1",
              images:[
                "test1"
              ]
            },
            {
              id:2,
              title:"Shodo2",
              description: "hoge1",
              images:[
                "test2"
              ]
            },
            {
              id:3,
              title:"Shodo3",
              description: "hoge1",
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
             description: "hoge1",
             images:[
               "test1"
             ]
           },
           {
             id:2,
             title:"Watchface2",
             description: "hoge1",
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
             title:"Mis1",
             description: "sss",
             images:[
               "test1"
             ]
           },
           {
             id:2,
             title:"Mis2",
             description: "hoge1",
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
        <p>{work.description}</p>
        
      </div>
      
      )
  }
}

export default WorkDetail;