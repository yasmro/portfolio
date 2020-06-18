export var state = {
  works: {
    categories: [
      {
        id: "shodo",
        name: "Shodo",
        description: "Experienced since 2009 and took 20+ awards on Japanese calligraphy concours before.",
        imageUrl: "shodo",
      },
      {
        id: "watchface",
        name: "Watchface",
        description: "Design and Develop with XML, CSS and JavaScript on Fitbit Ionic",
        imageUrl: "watchface"
      },
      {
        id: "miscelleneous",
        name: "Miscelleneous",
        description: "Others",
        imageUrl: "mis"
      }
    ],
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
        {
          id:1,
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
          key: "sas",
          category: "Mobile App",
         title:"Smart Attendance System",
         abstract: "Smart Attendance System is a mobile application that provides checking student's attendances for the lecture through scanning QR code. I propose \"Dynamic QR code\" that the system produces dynamically based on the server time in order to prevent fraud of QR code by some students. Also, I developed Android app which fetchs and posts student's attendance from Web service and DB which have developed by Singaporean labmates through RESTful API.",
         description:[
           {
            type: "paragraph",
            header: "Project Duration",
            contents:"1 month(2–29 Aug 2017)"
          },
          {
            type: "paragraph",
            header: "Action Items of DRI",
            contents:"System design and Develop with C# (Xamarin)"
          },
          {
            type: "paragraph",
            header: "Used Technologies",
            contents:"Apache Server, Xamarin, PHP, MySQL, Visual Studio C# and Libraries regarding QR-code (ZXing, Scandit SDK)"
          }
         ],
         images:[
           "test1"
         ]
       },
       {
        id:2,
        key: "bd",
        category: "Hardware Product",
        title:"Barrier Detector",
        technologies: "Product manager and Develop with Arduino",
        abstract: "Barrier Detector provides detecting obstructs on road to prevent injuring for blindness pedestrians. I designed the detection range of obstructs with mathematics such as trigonometric function and 3D-polar-coordinates (r,θ,φ–coordinates) based on pedestrian’s walk-characteristics (e.g. walk speed, visible angular range) with caluculation.",
        description:[
          {
            type: "paragraph",
            header: "Project Duration",
            contents:"4 months(Sep 2017 – Jan 2018)"
          },
          {
            type: "paragraph",
            header: "Action Items of DRI",
            contents:"Project Management, Arduino coder"
          },
          {
            type: "paragraph",
            header: "Used Technologies",
            contents:"Arduino, Frizing, Tera Term, Fusion360, Mathematics(3D-polar-coordinates)"
          },
          {
            type: "images",
            header: "",
            images: [
              "slide01.png",
              "slide02.png",
              "slide03.png"
            ]
          }
        ]
      },
      //  {
      //    id:3,
      //    key: "design_presentation",
      //   category: "Slide Design",
      //    title:"How to Design Presentation",
      //    technologies: "PowerPoint (Japanese)",
      //    abstract: "I received some requests about improving presentation slides. Through using experiences I created ebook about how to design and make better presentation material for novices. before.",
      //    description:[
      //     {
      //       type: "link",
      //       header: "",
      //       links: [
      //         {
      //           name: "Download Here (PDF file)",
      //           // href: "../images/HowToDesignPresentationV1_0.pdf"
      //           href: "https://yasmro.github.io/portfolio-old/img/HowToDesignPresentationV1_0.pdf"
      //         }
      //       ]
      //     },
      //    ],
      //    images:[
      //      "test2"
      //    ]
      //  },
       {
        id:4,
        key: "random_correction",
        category: "Research Project",
        title:"Detection of Random Correnctions from Source Code Snapshots",
        technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
        abstract: "	Classifying student's situation helps improve educational effect in programming course with snapshots. Snapshots can grasp student who falls \"pitfall\" during a course. The purpose of this study is to classify students who make random correction in the programming course with Online Judge System. Random Correction is an action that source code correction without understanding the exercise contents. Then we propose metrics to classify students who make random corrections from snapshots of source code submitted by students and verify their usefulness. The result of the experiment shows that students who cannot reach perfect score had high value of both metrics; 1) a degree of imbalance corrections between source code lines, 2) the number of submitted revisions.",
        description:[
           
        ],
        images:[
          "test2"
        ]
      },
      // {
      //   id:5,
      //   title:"Enmel",
      //   key: "enmel",
      //   category: "Web Design",
      //   technologies: "Design, Develop and Maintain Web page with HTML, CSS and JavaScript",
      //   abstract: "Enmel is a Web system which manages and shares the recipes(e.g. ingredients, procedures preparation/finish, allergy etc.) for restaurant or pastry chef. In addition, applying recipe data expected business efficiency such as cost accounting, material management, customer management, their schedule management and so on.",
      //   description:[
           
      //   ],
      //   images:[
      //     "test2"
      //   ]
      // },
      {
        id:6,
        title:"Own Portfolio Sites",
        key: "portfolio",
        category: "Web Design",
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