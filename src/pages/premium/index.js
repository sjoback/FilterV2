import React, { Component } from 'react';
import './style.css';
import PremiumFeatures from '../../components/premium-features/index';
import Filterlogo from '../../assets/images/filtervit.png';
import Search from '../../assets/images/icons/search.png';
import PremiumInfoFooter from '../../components/premium-info-footer/index';
import Burger from '../../components/header/menu-burger/index';
import Logo from '../../assets/images/icons/logo.png';

import { NavLink } from 'react-router-dom'


class Premium extends Component {
  render(){
    return (
      <div>
    <Burger />
   <div className="fixed"></div>
   <NavLink to="/"><img src={Logo} className="filterlogo" alt="" /></NavLink>
    <h1>Varför skaffa premium?</h1>
<PremiumFeatures />
<PremiumInfoFooter />
      </div>
    )
  }
};

export default Premium;
