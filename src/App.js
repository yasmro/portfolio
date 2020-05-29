import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Worklist from './components/Worklist'

function App() {
  return(
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
        <div className="">
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/about'}  component={About}/>
          <Route path={'/works/'}  component={Works}/>
            <Route exact path={'/works/:category'} component={Worklist}/>
            <Route exact path={'/works/:category/:name'} component={Worklist}/>
          <Route exact path={'/contact'}  component={Contact}/>
        </div>
      </BrowserRouter>
      , document.getElementById('root')
      )
  )
  
}

export default App;
