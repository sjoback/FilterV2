import React, { Component } from 'react';
import './style.css';

import Burger from './menu-burger/index';
import Search from './search/index';
import Logo from '../logo/index';
import Menu from '../menu/index';



class Header extends Component {
   render () {
      return (
         <div className="header">
            <Logo />
            <Menu />
            <Burger />
            <Search />
         </div>
      );
   }
}
export default Header;
