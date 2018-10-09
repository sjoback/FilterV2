import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Cookies from 'universal-cookie';

// Components
import Recommended from '../../components/slider-recommended';
import Popular from '../../components/slider-popular';
import New from '../../components/slider-new';
import Society from '../../components/slider-society/index';
import Culture from '../../components/slider-culture/index';
import Sport from '../../components/slider-sport/index';
import Header from '../../components/header/index';


// Images
import Fav from '../../assets/images/fav.png';
import Download from '../../assets/images/icons/download.png';
import close from '../../assets/images/icons/close.svg';
import Arrow from '../../assets/images/icons/right-arrow.png';


import './style.css';

const cookies = new Cookies();


class Discover extends Component {
   constructor(props) {
      super(props);
      this.state = {
         show: false,
         shown: false,
         data: [],
         genres: [],
         society: '',
         culture: '',
         sport: ''
      };
   }

   handleSociety = (e) => {
      this.setState({
         society: 'samhälle'
      })
   }
   handleCulture = (e) => {
      this.setState({
         culture: 'kultur'
      })
   }
   handleSport = (e) => {
      this.setState({
         sport: 'sport'
      })
   }

   operation(){
      this.setState({
         show: !this.state.show
      })
   }
   showStory(){
      this.setState({
         shown: !this.state.shown
      })
   }

componentWillUnmount(){
   cookies.remove('filter1');
   cookies.remove('filter2');
   cookies.remove('filter3');
}


   apiData = async (e) => {
      e.preventDefault();

      const society = this.state.society;
      const culture = this.state.culture;
      const sport = this.state.sport;


      if(society){
         const response = await fetch(`http://localhost:3000/stories?genre=${society}`);
         cookies.set('filter1', 'society', { path: '/' });

         const json = await response.json();

         this.setState({
            data: json,
            show: false
         });
      }

      if(culture){
         const response = await fetch(`http://localhost:3000/stories?genre=${culture}`);
         cookies.set('filter2', 'culture', { path: '/' });

         const json = await response.json();

         this.setState({
            culture: json,
            show: false
         });
      }


   if(sport){
      const response = await fetch(`http://localhost:3000/stories?genre=${sport}`);
      cookies.set('filter3', 'sport', { path: '/' });

      const json = await response.json();

      this.setState({
         sport: json,
         show: false
      });
   }

}


render() {
   var society = cookies.get('filter1');
   var culture = cookies.get('filter2');
   var sport = cookies.get('filter3');



   return (

      <div className="discover-container">
         <Header />
         <div className="time-slider"></div>

         <div className="filter-btn1" onClick={()=>this.operation()}></div>

         {this.state.show?
            <div className="form2-overlay"></div>
            : (
               null
            )
         }
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

               <img src={close} className="close-form2" alt="img for closing form" onClick={()=>this.operation()} />
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
                     <img src={Arrow} className="right-arrow-save" alt="img for showing results" />
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

{society ? (
   <Society />
) : null }
{culture ? (
   <Culture />
) : null }
{sport ? (
   <Sport />
) : null }

<New />
<Popular />
<Recommended />

   {
      this.state.shown?
      <div className="storyInfo">

         <div className="storyinfo-header">
            <p className="storyinfo-header-time">Lästid 15 min</p>
            <img src={Fav} className="storyinfo-header-fav" alt="" />
         </div>

         <div className="download">
            <img src={Download} className="download-img" alt="" />
            <p className="download-text">Ladda ned</p>
            <p className="download-size">74 MB</p>
         </div>

         <div className="storyinfo-content">
            <p className="storyinfo-content-title">Storstadsdryll</p>
            <p className="storyinfo-content-text">Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Suspendisse id semper ipsum. Praesent eget laoreet odio. Nam at risus lobortis, commodo eros et, molestie ante. Etiam nec tellus velit. Proin id diam odio. Sed id velit a massa malesuada tristique vitae sit amet est. Suspendisse id semper ipsum. Praesent eget laoreet odio.</p>

            <button className="read-storyinfo-content btn">
               <NavLink to="/article"><p className="right-arrow-text">Läs artikel</p></NavLink>
               <img src={Arrow} className="right-arrow" alt="" />
            </button>
         </div>

         <img src={close} className="close-storyInfo" alt="" onClick={()=>this.showStory()} />
      </div>
      :null
   }

   {
      this.state.shown?
      <div className="storyInfo-overlay" alt="" onClick={()=>this.showStory()}></div>
      :null
   }



</div>
);
}
}

export default Discover;
