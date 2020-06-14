import React, { Component } from 'react';

class Contact extends Component {

  constructor() {
    super();
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
      <a href={contact.href} className="contact-box nav-link col-md-5 mr-md-2 col-12 mb-3 bg-light text-dark">
        <div className="cover-img pt-4 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
          <div className="mb-2">
            <i className={contact.icon + " fa-2x mr-3"}></i>
            <span className="h2">{contact.name}</span>
          </div>
          <p>{contact.url}</p>
        </div>
      </a>
    )

    return(
      <div className="container mt-5">
        <h1 className="mb-5 text-center text-md-left">Contact</h1>
      
        <div className="row">
          {contacts}
        </div>   

        {/* <div class="social-icons">
              <a href="mailto:kantillo0683@gmail.com" data-toggle="tooltip" data-placement="bottom" title="kantillo0683@gmail.com">
                <i class="far fa-envelope"></i>
              </a>
              <a href="https://github.com/yasmro" data-toggle="tooltip" data-placement="bottom" title="yasmro">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/yu.ohno.16" data-toggle="tooltip" data-placement="bottom" title="yu.ohno.16">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/yasmro1226" data-toggle="tooltip" data-placement="bottom" title="yasmro1226">
                <i class="fab fa-instagram"></i>
              </a>
        </div> */}
      </div>
    )
  }
}
export default Contact;