import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Worklist from './components/Worklist'

function App() {
  var url = window.location.href;
  var flag = true;

  const NoMatch = () => (<h1>Not found!! </h1>);

  return(
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
        <div className="">
          <Switch>
            <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={About}/>
            <Route exact path={ process.env.PUBLIC_URL + '/works/'}  component={Works}/>
              <Route exact path={ process.env.PUBLIC_URL + '/works/:category'} component={Worklist}/>
              <Route exact path={ process.env.PUBLIC_URL + '/works/:category/:name'} component={Worklist}/>
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
