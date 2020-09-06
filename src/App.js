import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import { motion, AnimatePresence } from "framer-motion";
import { CSSTransition } from 'react-transition-group';

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Worklist from './components/Worklist'
import WorkDetail from './components/WorkDetail'

const ROUTES = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'About', path: '/about', Component: About },
  { name: 'Works', path: '/works', Component: Works },
  { name: 'Worklist', path: '/works/:category', Component: Worklist },
  { name: 'WorkDetail', path: '/works/:category/:id', Component: WorkDetail },
  { name: 'Interests', path: '/interests', Component: Interests },
  { name: 'Contact', path: '/contact', Component: Contact }
];

function App() {
  var url = window.location.href;
  var flag = true;


  const NoMatch = () => (<div className="container mt-5 "><h1 className="display-3 position-absolute text-center ml-auto" style={{"top": 50 + "vh"}}>Not found!! </h1></div>);
  // const loc = useLocation();
 
  return(
    
    ReactDOM.render(
      <BrowserRouter>
        {/* <NavBar /> */}
        {/* <div className="position-fixed w-100 h-100 " Style="z-index:1; background-color: rgba(255,255,255,0.5); backdrop-filter: blur(3.5px);"></div> */}
        <div className="page" Style="padding-top: 56px;">
        <Route render={({ location }) => (
          
            <Switch>
              <AnimatePresence exitBeforeEnter>
              <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home} />
              <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={About} />
              <Route exact path={ process.env.PUBLIC_URL + '/works'}  component={Works}/>
                <Route exact path={ process.env.PUBLIC_URL + '/works/:category'} component={Worklist}/>
                <Route exact path={ process.env.PUBLIC_URL + '/works/:category/:id'} component={WorkDetail}/>
                {/* <Route exact path={ process.env.PUBLIC_URL + '/interests'}  component={Interests}/> */}
              <Route exact path={ process.env.PUBLIC_URL + '/contact'}  component={Contact}/>
              </AnimatePresence>
              <Route component={NoMatch}/>
            </Switch>
            
          )}/>

        </div>

      </BrowserRouter>
      , document.getElementById('root')
      )
  )
  
}

export default App;
