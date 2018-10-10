import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


import Header from '../../components/header/index';
import SocialMedia from '../../components/social-media/index';


import close from '../../assets/images/icons/close.svg';
import Arrow from '../../assets/images/icons/right-arrow.png';
import Bookmarked from '../../assets/images/icons/reportage/bookmarked.png';


import './style.css';


class MyList extends Component {
   constructor() {
      super();
      this.state = {
         show: false
      }
   }

   operation(){
      this.setState({
         show: !this.state.show
      })
   }

   render() {
      var settings = {
         dots: false,
         arrows: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         lazyLoad: true,
         responsive: [
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
               }
            }]
         };

         return (
            <div className="min-lista-container">
               <Header />

               <div className="filter-btn1" onClick={()=>this.operation()}></div>
                  {this.state.show?
                     <div className="form2-overlay"></div>
                     : (
                        null
                     )
                  }

               <p className="slider-titel-mylist">Samhälle</p>
               <NavLink to="/bookmarked"><img src={Bookmarked} className="thumbnail_img-vertical" alt="Img for mylist-slider" onClick={()=>this.operation()} /></NavLink>


                  {this.state.show?

                     <div className="form2-container">
                        <div className="read-timer">
                           <p className="read-timer-title">Lästid</p>
                           <p className="timer-interval">0 min - 180 min</p>
                           <div className="fake-slider">
                              <div className="fake-handle1"></div>
                              <div className="fake-handle2"></div>
                           </div>
                        </div>

                        <img src={close} className="close-form2" alt="Img for closing form" onClick={()=>this.operation()} />
                        <form className="form2" onSubmit={this.apiData}>

                           <label className="sam-container margin"><p className="box1-label">Samhälle</p>
                              <input type="checkbox" value={this.state.society} onChange={this.handleSociety} className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Kultur</p>
                              <input type="checkbox" value={this.state.culture} onChange={this.handleCulture} className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Sport</p>
                              <input type="checkbox" value={this.state.sport} onChange={this.handleSport} className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Vetenskap</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Astronomi</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Politik</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Hem</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Nyheter</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Resa</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Hem</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Nyheter</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Resa</p>
                              <input type="checkbox" className="regular-checkbox big-checkbox" />
                           </label>

                           <button type="submit" className="spara-resultat">
                              <p className="save-results">Visa resultat</p>
                              <img src={Arrow} className="right-arrow-save" alt="Arrow-img" />
                           </button>

                           <label className="pop-container margin"><p className="box1-label">Påbörjade</p>
                              <input type="checkbox" className="regular-checkbox1 big-checkbox" />
                           </label>
                           <label className="pop-container margin"><p className="box1-label">Lästa</p>
                              <input type="checkbox" className="regular-checkbox1 big-checkbox" />
                           </label>

                  </form>
                  </div>
                  : (
                  null
                  )
                  }

                  <div className="media-footer1">
                  <SocialMedia />
                  </div>

            </div>


         );
      }
   }


   export default MyList;
