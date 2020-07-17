import React, { Component } from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar'

class Contact extends Component {
  componentDidMount() {
    var section = "Contact";
    var title = " – Yasmro's Portfolio 2020"
    document.title = section + title;

  }

  constructor() {
    super();
    window.scrollTo(0, 0);
    this.state = {
      contacts: [
        {
          id: "mail",
          name: "Mail",
          icon:"far fa-envelope",
          url: "kantillo0683[at]gmail.com",
          href: "mailto:kantillo0683@gmail.com"
        },
        {
          id: "github",
          name: "GitHub",
          icon:"fab fa-github",
          url: "yasmro",
          href: "https://github.com/yasmro"
        },
        {
          id: "fb",
          name: "Facebook",
          icon:"fab fa-facebook-f",
          url: "yu.ohno.16",
          href: "https://www.facebook.com/yu.ohno.16"
        },
        {
          id: "insta",
          name: "Instagram",
          icon:"fab fa-instagram",
          url: "yasmro1226",
          href: "https://www.instagram.com/yasmro1226"
        }
      ]
    };
  }

  render(){
    
    const contacts = this.state.contacts.map( contact =>
      <a href={contact.href} className="contact-box nav-link col-md-5 mr-md-2 col-12 mb-2 bg-light text-dark" key={contact.id}>
        <div className="cover-img pt-2 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
          <div className="mb-2">
            <i className={contact.icon + " fa-2x"}></i>
            <span className="header h3 position-absolute" Style="left: 56px;">{contact.name}</span>
          </div>
          <p className="" style={{"font-style" : "normal"}}>{contact.url}</p>
        </div>
      </a>
    )

    return(
      <>
      <NavBar />
      <div className="container mt-5">
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
        <h1 className="mb-5 d-none d-md-block text-md-left display-4">Contact</h1>
        <h1 className="mb-5 d-block d-md-none text-center">Contact</h1>
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
        delay:0.2
      }}
   >
        <div className="container mb-5">
        <div className="row">
          {contacts}
        </div>  
        </div>
      </motion.div>
         
      </div>
      </>
      
    )
  }
}
export default Contact;