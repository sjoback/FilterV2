import React, { Component } from 'react';
import './App.css';

import Logo from './components/logo/index';

import Header from './components/header/index';


// Sliders

// Pages
import HomePage from './pages/homePage/index';
import Discover from './pages/discover/index';
import MyList from './pages/my-list/index';
import Article from './pages/article/index';
import Bookmarked from './pages/article-bookmarked/index';



import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';


class App extends Component {
   render() {

      return (
         <Router>
            <div className="App">
               <Route exact path='/' component={HomePage}/>
               <Route exact path='/browse' component={Discover} />
               <Route exact path='/my-list' component={MyList} />
               <Route exact path='/article' component={Article} />
               <Route exact path='/bookmarked' component={Bookmarked} />
            </div>
         </Router>

      );
   }
}

export default App;
