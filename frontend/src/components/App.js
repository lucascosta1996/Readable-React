import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Posts from './Posts/';
import PostDetail from './PostDetail/';
import NewPost from './NewPost/';
import EditPost from './EditPost';
import PlusButton from './PlusButton';

import logo from './../logo.svg';
import './../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Readable</h1>
        </header>
        <div className="d-flex justify-content-center mb-5 mt-3">
          <Nav />
        </div>
        <div className="container d-flex justify-content-center flex-wrap">
          <div>
            <Switch>
              <Route exact path ='/' component={Posts} />
              <Route exact path ='/new' component={NewPost} />
              <Route exact path ='/edit/:id' component={EditPost} />
              <Route exact path ='/:category' component={Posts} />
              <Route exact path ='/:category/:id' component={PostDetail} />
            </Switch>
            </div>
            <PlusButton />
        </div>
      </div>
    );
  }
}

export default App;
