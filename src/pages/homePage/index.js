import React, { Component } from 'react';
import Continue from '../../components/slider-continue/index';
import Recommended from '../../components/slider-recommended/index';
import Menu from '../../components/menu/index';
import Header from '../../components/header/index';
import SocialMedia from '../../components/social-media/index';

import './style.css';


class HomePage extends Component {
   render() {

      return (
         <div className="homepage">
            <Header />
            <div className="start-header-img">
               <p className="start-header-text">Gräver man så finner man.</p>
            </div>
            <Continue />
            <Recommended />
            <SocialMedia />
         </div>
      );
   }
}

export default HomePage;
