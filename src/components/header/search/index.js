import React, { Component } from 'react';

import searchImg from '../../../assets/images/icons/search.png';
import close from '../../../assets/images/icons/close.svg';


import './style.css';


class Search extends Component {
   constructor() {
      super();
      this.state = {
         show: false,
         active: false
      }
   }
   operation(){
      this.setState({
         show: !this.state.show
      })
   }

   toggleClass() {
      const currentState = this.state.active;
      this.setState({
         active: !currentState
      });
   };


   render() {
      return (
         <div className="search-comp">
            <img src={searchImg} className="search" onClick={()=>this.operation()} alt="text" />


            {
               this.state.show?
               <div className="search-open-overlay"></div>
               :null
            }

            {
               this.state.show?
               <div className="search-open">
                  <div className="search-open-header">
                     <img src={close} className="close-search" onClick={()=>this.operation()} alt="text" />
                  </div>

                  <button className={this.state.active ? 'search-btn': null} onclick={this.toggleClass}>Lorem</button>

               </div>
               :null
            }
         </div>

      );
   }
}

export default Search;
