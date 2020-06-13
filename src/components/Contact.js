import React, { Component } from 'react';

class Contact extends Component {
  render(){
    return(
      <div className="container mt-5">
        <h1 className="mb-5 text-center text-md-left">Contact</h1>
        <p>kantillo0683[at]gmail.com</p>

        {/* <div className="row">
          <a href="mailto:kantillo0683@gmail.com" className="nav-link col-md-5 mr-md-2 col-12 mb-3 bg-light text-dark">
            <div className="cover-img pt-5 pb-5 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
              <div className="about-text">
                <i className="far fa-envelope"></i>
                <h3>Mail</h3>
              </div>
            </div>
          </a>
          <a href="" className="nav-link col-md-5 mr-md-auto col-12 mb-2 bg-light text-dark">
            <div className="cover-img pt-5 pb-5 pr-md-2" Style="background-image:url('../images/shodo/1.png');">
              <div className="about-text">
            
              </div>
            </div>
          </a>
        </div>    */}

        <div class="social-icons">
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
        </div>
      </div>
    )
  }
}
export default Contact;