import React, { Component } from 'react';
import './style.css';
import Filterlogo from '../../assets/images/filtervit.png';
import Search from '../../assets/images/icons/search.png';
import Accordion from '../../components/help-accordion/index';

class Help extends Component {
  render(){
    return (
      <div>
    <img className="filterlogo" src={Filterlogo} />
    <img className="search" src={Search} />
    <h1>Behöver du hjälp?</h1>
<Accordion />
      </div>
    )
  }
};

export default Help;
