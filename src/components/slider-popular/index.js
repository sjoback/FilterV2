import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Fav from '../../assets/images/fav.png';
import PopularImg from '../../assets/images/popular.png';


import './style.css';


class Popular extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         show: false
      }
   }

   operation(){
      this.setState({
         show: !this.state.show
      })
   }

   componentWillMount() {
      this._fetchData();
   }

   _fetchData = async () => {
      const response = await fetch('http://localhost:3000/stories/?genre=populärt');
      const json = await response.json();

      this.setState({
         data: json
      });

      console.log(json);
      console.log(window.location.href);
   }




   render() {

      return (
         <div className="popular">
            <p className="slider-titel">Populärt</p>

               <Carousel
                  showThumbs={false}
                  showIndicators={false}
                  showArrows={false}
                  showStatus={false}
                  centerMode={true}
                  centerSlidePercentage={30}
                  swipeable={true}
                  dynamicHeight={false}
                  >
                  { this.state.data.map(data => (
                     <div>
                     <img src={PopularImg} className="thumbnail_img2" alt="" onClick={()=>this.operation()}/>
                     </div>
                  ))}
               </Carousel>


            {
               this.state.show?
               <div className="storyInfo">
                  <div className="storyinfo-header">
                     <p className="storyinfo-header-title">Storstadsdryll</p>
                     <p className="storyinfo-header-time">Lästid 25 min</p>
                     <img src={Fav} className="storyinfo-header-fav" alt="" />
                  </div>
                  <div className="storyinfo-content">
                     <p className="storyinfo-content-text">Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Suspendisse id semper ipsum. Praesent eget laoreet odio. Nam at risus lobortis, commodo eros et, molestie ante. Etiam nec tellus velit. Proin id diam odio. Sed id velit a massa malesuada tristique vitae sit amet est. Suspendisse id semper ipsum. Praesent eget laoreet odio.</p>
                     <button className="close-storyinfo-content btn">Stäng</button>
                     <a href="/reportage"><button className="read-storyinfo-content btn">Läs vidare</button></a>
                  </div>
                  <button className="close-storyInfo" onClick={()=>this.operation()}>X</button>
               </div>
               :null
            }
            {
               this.state.show?
               <div className="storyInfo-overlay" onClick={()=>this.operation()}></div>
               :null
            }

         </div>


      );
   }
}


export default Popular;
