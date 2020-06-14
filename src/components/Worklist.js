import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion";

class Worklist extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      hasError: false,
      works: {
        shodo: {
          id: "shodo",
          name: "Shodo",
          description: "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before.",
          imageUrl: "shodo",
          portfolios:[
             { id:1,
              title:"Minazuki",
              description: "",
              images:[
                "test1"
              ]
            },
            {
              id:2,
              title:"Momiji Moyu",
              description: "",
              images:[
                "test2"
              ]
            },
            {
              id:3,
              title:"Silent",
              description: "hoge1",
              images:[
                "test2"
              ]
            },
            { id:4,
              title:"Business Card",
              description: "hoge1",
              images:[
                "test1"
              ]
            },
            

            { id:7,
              title:"The Dusk",
              description: "hoge1",
              images:[
                "test1"
              ]
            },
            
            {
              id:9,
              title:"Geishun 2020",
              description: "hoge1",
              images:[
                "test2"
              ]
            },
            {
              id:10,
              title:"Sakura Kakushi",
              description: "hoge1",
              images:[
                "test2"
              ]
            },
            {
              id:11,
              title:"XYZ",
              description: "hoge1",
              images:[
                "test2"
              ]
            },
            {
              id:12,
              title:"The smell in the beginning of rainy season",
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
             title:"",
             description: "hoge1",
             images:[
               "test1"
             ]
           },
           {
             id:2,
             title:"",
             description: "hoge1",
             images:[
               "test2"
             ]
           },
           {
            id:3,
            title:"",
            description: "hoge1",
            images:[
              "test2"
            ]
          },
          {
            id:4,
            title:"",
            description: "hoge1",
            images:[
              "test2"
            ]
          },
          {
            id:5,
            title:"",
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
              title:"Smart Attendance System",
              technologies:"System design and Develop with C# (Xamarin)",
              description: "Smart Attendance System is a mobile application that provides checking student's attendances for the lecture through scanning QR code. I propose \"Dynamic QR code\" that the system produces dynamically based on the server time in order to prevent fraud of QR code by some students. Also, I developed Android app which fetchs and posts student's attendance from Web service and DB which have developed by Singaporean labmates through RESTful API.",
              images:[
                "test1"
              ]
            },
            {
             id:2,
             title:"Hardware Products: Barrier Detector",
             technologies: "Product manager and Develop with Arduino",
             description: "Barrier Detector provides detecting obstructs on road to prevent injuring for blindness pedestrians. I designed the detection range of obstructs with mathematics such as trigonometric function and three dimensional polar-coordinates ($r, \theta, \varphi$–coordinates) based on pedestrian’s walk-characteristics (e.g. walk speed, visible angular range) with caluculation.",
             images:[
               "test2"
             ]
           },
            {
              id:3,
              title:"Slide Design: How to Design Presentation",
              technologies: "PowerPoint (Japanese)",
              description: "I received some requests about improving presentation slides. Through using experiences I created ebook about how to design and make better presentation material for novices. before.",
              images:[
                "test2"
              ]
            },
            {
              id:4,
              title:"Projects: Detection of Random Correnctions from Source Code Snapshots",
              technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
              description: "Enmel is a Web system which manages and shares the recipes(e.g. ingredients, procedures preparation/finish, allergy etc.) for restaurant or pastry chef. In addition, applying recipe data expected business efficiency such as cost accounting, material management, customer management, their schedule management and so on.",
              images:[
                "test2"
              ]
            },
            {
              id:5,
              title:"Enmel",
              technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
              description: "Enmel is a Web system which manages and shares the recipes(e.g. ingredients, procedures preparation/finish, allergy etc.) for restaurant or pastry chef. In addition, applying recipe data expected business efficiency such as cost accounting, material management, customer management, their schedule management and so on.",
              images:[
                "test2"
              ]
            }

          ]
        }
      }
    };
  }

  fetchData(url){
    this.setState({isLoading: true})

    fetch(url)
      .then((response) => {
        // responseのokプロパティでアクセスの判定をします。trueの場合は正常にアクセスできているので、isLoadingをfalseにします。
        console.log(response)
        if(!response.ok){
          throw Error(response.statusText)
        }
        this.setState({ isLoading: false })
        return response
      })
      .then(
        (response) => response.json()
        // .json()メソッドでresponseがjsonであることを定義します。一行のアロー関数なので自動的にreturnされています。
      )
      .then((data) => {
        // 渡されたjsonデータをもとにtodoを組み立てています。Object.assign()は第1引数を{}とすることで、第２引数以降をmerge(結合)した新しいObjectを生成します
        console.log(data)
        const w = data
        this.setState({ works: w })
        console.log("3");
      })
      .catch(() => this.setState({ hasError: true }))

  }

  componentDidMount() {
    this.fetchData('data.json');
  }

  render(){

    const category_id = this.props.match.params.category;
    const category = this.state.works[category_id];

    var works;
    if(category_id == "miscelleneous"){
      works = this.state.works[category_id].portfolios.map( work =>
        <Link className="nav-link col-lg-4 col-md-6 col-12 text-dark" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + work.id}>
          <div className="cover-img pb-5 thumbnail">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className = "bwWrapper pb-1 w-100"/>
            <div className="about-text">
              <h4>{work.title}</h4>
            </div>
          </div>
        </Link>

      )
    }else{
      works = this.state.works[category_id].portfolios.map( work =>
        <div className="nav-link col-lg-4 col-md-6 col-12 text-dark" >
          <div className="cover-img pb-5 thumbnail">
            <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" data-toggle="modal" data-target= { "#" + category_id + work.id } className = "bwWrapper pb-1 w-100"/>
            <div className="about-text">
              <h4>{work.title}</h4>
            </div>
          </div>
        </div>
      )
    }

    var modal;
    if(category_id != "miscelleneous"){
      modal = this.state.works[category_id].portfolios.map( work =>
        <div className="modal fade" id={category_id + work.id } tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-body mb-0 p-0">
                <div className="embed-responsive-16by9 z-depth-1-half">
                  <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="clock01" className="aligncenter w-100"/>
                </div>  
              </div>
              <button type="button" className="btn btn-outline-light text-dark" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      )
    }

    

    const lis = this.state.works[category_id].portfolios.map( work =>
      <li data-target="#carouselExampleIndicators" data-slide-to= {work.id - 1} className={ ((work.id) == 1) ? ("active") : ("")}></li>
    )

    var slides;
    if(category_id == "miscelleneous"){
      slides = this.state.works[category_id].portfolios.map( work =>
          <div class={ ((work.id) == 1) ? ("carousel-item active") : ("carousel-item")}>
            <Link className="" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + work.id}>
              <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
              <div className="mt-3 text-dark text-center">
                <h6>{work.title}</h6>
              </div>
            </Link>
          </div>

      )
      
    }else{
      slides = this.state.works[category_id].portfolios.map( work =>
        <div className={ ((work.id) == 1) ? ("carousel-item active") : ("carousel-item")}>
          <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className="d-block w-100"/>
          <div className="mt-3 text-dark text-center">
            <h6>{work.title}</h6>
          </div>
        </div>
        
      )
    }

    return(
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
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white pl-0">
            <li className="breadcrumb-item"><Link to={process.env.PUBLIC_URL + "/works/"}>Works</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{category.name}</li>
          </ol>
        </nav>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        
        <div className="row d-none d-md-flex">
          {works}          
        </div>
        {modal}

        <div id="carouselExampleIndicators" className="carousel slide  hover d-md-none" data-ride="carousel">
          <div className="carousel-inner">
            {slides}
          </div>
          <ol className="carousel-indicators">
            {lis}
          </ol>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      </motion.div>
    )
  }
}
export default Worklist;