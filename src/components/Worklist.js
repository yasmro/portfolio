import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

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

    const works = this.state.works[category_id].portfolios.map( work =>
      <Link className="nav-link col-lg-4 col-md-6 col-12" to={process.env.PUBLIC_URL + "/works/" + category_id + "/" + work.id}>
        <div className="cover-img pb-5 thumbnail">
          <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" className = "bwWrapper pb-1 w-100"/>
          <div className="about-text">
            <h4>{work.title}</h4>
          </div>
        </div>
      </Link>
    )

    const lis = this.state.works[category_id].portfolios.map( work =>
      <li data-target="#carouselExampleIndicators" data-slide-to= {work.id - 1} class={ ((work.id) == 1) ? ("active") : ("")}></li>
    )

    const slides = this.state.works[category_id].portfolios.map( work =>
      
      <div class={ ((work.id) == 1) ? ("carousel-item active") : ("carousel-item")}>
        <img src={require('../images/' + category_id + '/' + work.id +'.png')} alt="test" class="d-block w-100"/>
        <div class="carousel-caption">
          <h6>{work.title}</h6>
        </div>
      </div>
    )

    return(
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

        <div id="carouselExampleIndicators" class="carousel slide carousel-fade hover d-md-none" data-ride="carousel">
          <ol class="carousel-indicators">
            {lis}
          </ol>
          <div class="carousel-inner">
            {slides}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
export default Worklist;