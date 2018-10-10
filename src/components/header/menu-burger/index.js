import React, { Component } from 'react';
import './style.css';

// Images
import BurgerImg from '../../../assets/images/burger.png';
import LogOut from '../../../assets/images/logout.png';
import Profile from '../../../assets/images/profile.png';

import LogoBlack from '../../../assets/images/logo-black.png';
import MenuImg from '../../../assets/images/meny.svg';
import { NavLink } from 'react-router-dom'


class Burger extends Component {
   constructor(props){
      super(props);
      this.state={
         showBurger: false
      };

   }

   showBurger(){
      this.setState({
         showBurger: !this.state.showBurger
      })
   }

   render () {
      return (
         <div className="burger">
            <img src={BurgerImg} className="open-burger" alt="" onClick={()=>this.showBurger()} />
               {this.state.showBurger?
                  <div className="burger-menu-overlay" onClick={()=>this.showBurger()}></div>
                  :(null)}

         {this.state.showBurger?
            <div className="burger-menu-open">
               <div className="burger-menu-open-header">
                  <img src={LogoBlack} className="logo-black" alt="" />
                  <img src={MenuImg} className="menu-img" alt="" onClick={()=>this.showBurger()} />
               </div>
               <div className="user-info">
                  <img src={Profile} className="user-img" alt="" />
                  <p className="user-name">Förnamn Efternamn</p>
               </div>

               <ul>
                  <NavLink to="/free"><p className="menu-item1">Vad är Premium</p></NavLink>                  
                  <a className="menu-item" href="/">Hem</a>
                  <a className="menu-item" href="/">Magasinet</a>
                  <a className="menu-item" href="/">Fotografer</a>
                  <a className="menu-item" href="/help">Hjälp</a>
                  <a className="menu-item" href="/">Om oss</a>
                  <a className="menu-item" href="/">Kontakt</a>
               </ul>
               <div className="user-footer">
                  <img src={LogOut} className="logout-img" alt="" />
                  <a className="logout-text" href="/">Logga ut</a>
               </div>
            </div>
            :(null)}

         </div>
      );
   }
}
export default Burger;
