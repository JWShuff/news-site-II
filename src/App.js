import React, { useState } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App(props) {
  const [navItemsData, setNavItemsData] = useState(navItems);


  return (
    <div>
      <hr />
      <AppNav navItems={navItemsData} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
      <Router>
        <div>
          <Route exact path='/' component={HomePage}/>
        </div>
        <div>
          <Route exact path='/articles/:articleID' component={ArticlePage} />
        </div>
      </Router>
    </div>
  );

}

export default App;
