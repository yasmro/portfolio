import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Worklist from './components/Worklist'
import WorkDetail from './components/WorkDetail'

function App() {
  var url = window.location.href;
  var flag = true;

  const NoMatch = () => (<div className="container"><h1>Not found!! </h1></div>);

  return(
    ReactDOM.render(
      <BrowserRouter>
        <NavBar path={ process.env.PUBLIC_URL + '/:menu'}/>
        <div className="" Style="padding-top: 56px;">
          <Switch>
            <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home} Style="padding-top: 0px;"/>
            <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={About} />
            <Route exact path={ process.env.PUBLIC_URL + '/works/'}  component={Works}/>
              <Route exact path={ process.env.PUBLIC_URL + '/works/:category'} component={Worklist}/>
              <Route exact path={ process.env.PUBLIC_URL + '/works/:category/:id'} component={WorkDetail}/>
              <Route exact path={ process.env.PUBLIC_URL + '/interests/'}  component={Interests}/>
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
