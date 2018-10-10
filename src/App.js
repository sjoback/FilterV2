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
import Help from './pages/help/index';
import Premium from './pages/premium/index';



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
               <Route exact path='/free' component={Premium} />
               <Route exact path='/help' component={Help} />
            </div>
         </Router>

      );
   }
}

export default App;
