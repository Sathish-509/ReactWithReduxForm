import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import Header from './components/home/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePageContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
