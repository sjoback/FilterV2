import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'



import './style.css';


class Menu extends Component {

   render() {



      return (
         <div className="menu">
            <li className="link-wrapper start"><NavLink exact to="/" activeClassName="activeRoute">Start</NavLink></li>
            <li className="link-wrapper upptäck"><NavLink to="/browse" activeClassName="activeRoute">Upptäck</NavLink></li>
            <li className="link-wrapper bibliotek"><NavLink to="/my-list" activeClassName="activeRoute">Min lista</NavLink></li>
         </div>

      );
   }
}

export default Menu;
