import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import { motion } from "framer-motion";
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


  const NoMatch = () => (<div className="container"><h1>Not found!! </h1></div>);

  return(
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
        <div className="" Style="padding-top: 56px;">
            <Switch>
                {/* {ROUTES.map(({ path, Component }) => (
                <Route key={path} path={path} exact>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page__item-"
                      unmountOnExit
                    >
                      <div className="page__item">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))} */}
              <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home} Style="padding-top: 0px;"/>
              <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={About} />
              <Route exact path={ process.env.PUBLIC_URL + '/works'}  component={Works}/>
                <Route exact path={ process.env.PUBLIC_URL + '/works/:category'} component={Worklist}/>
                <Route exact path={ process.env.PUBLIC_URL + '/works/:category/:id'} component={WorkDetail}/>
                <Route exact path={ process.env.PUBLIC_URL + '/interests'}  component={Interests}/>
              <Route exact path={ process.env.PUBLIC_URL + '/contact'}  component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
        </div>
      </BrowserRouter>
      , document.getElementById('root')
      )
  )
  
}

export default App;
