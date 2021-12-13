import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/home';
import SideBar from './components/sidebar';
import Header from './components/header';
import "./styles/App.css"

function App() {
  return (
    <div className="main_container">
      <Router>
        <SideBar/>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
