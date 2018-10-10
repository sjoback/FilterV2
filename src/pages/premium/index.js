import React, { Component } from 'react';
import './style.css';
import PremiumFeatures from '../../components/premium-features/index';
import Filterlogo from '../../assets/images/filtervit.png';
import Search from '../../assets/images/icons/search.png';
import PremiumInfoFooter from '../../components/premium-info-footer/index';

class Premium extends Component {
  render(){
    return (
      <div>
    <img className="filterlogo" src={Filterlogo} />
    <img className="search" src={Search} />
    <h1>Varför skaffa premium?</h1>
<PremiumFeatures />
<PremiumInfoFooter />
      </div>
    )
  }
};

export default Premium;
