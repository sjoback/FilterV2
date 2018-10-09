import React, { Component } from 'react';
import './style.css';
import LogoImg from '../../assets/images/icons/logo.png';
import { NavLink } from 'react-router-dom'



class Logo extends Component {
   render() {
         return (
               <NavLink to="/" activeClassName="activeRoute"><img src={LogoImg} className="logo" alt="" /></NavLink>
         );
      }
   }


   export default Logo;
